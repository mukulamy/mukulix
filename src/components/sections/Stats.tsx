import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function Counter({ end, suffix = '', duration = 1800 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | undefined;
    let frame: number;
    const update = (ts: number) => {
      if (!startTime) startTime = ts;
      const p = ts - startTime;
      if (p < duration) {
        setCount(Math.floor(end * (1 - Math.pow(2, -10 * (p / duration)))));
        frame = requestAnimationFrame(update);
      } else {
        setCount(end);
      }
    };
    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [end, duration, isInView]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-black text-white tracking-tight tabular-nums">
      {count}{suffix}
    </span>
  );
}

const stats = [
  { label: 'Projects Delivered', value: 20, suffix: '+', note: 'Across web, mobile & business systems' },
  { label: 'Years Experience', value: 5, suffix: '+', note: 'Building production-grade software' },
  { label: 'Developers Mentored', value: 500, suffix: '+', note: 'As GDG Campus Lead & tech educator' },
  { label: 'Client Satisfaction', value: 95, suffix: '%', note: 'Based on post-project feedback' },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#111116', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.06] divide-y md:divide-y-0">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col px-8 py-10"
            >
              <Counter end={stat.value} suffix={stat.suffix} />
              <p className="text-[11px] font-semibold text-white/50 mt-3 mb-1 uppercase tracking-wider">{stat.label}</p>
              <p className="text-[11px] text-white/25 leading-relaxed">{stat.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
