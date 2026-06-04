import { motion } from 'framer-motion';
import { Globe, Smartphone, LayoutDashboard, Code2 } from 'lucide-react';
import { fireContactIntent } from '@/lib/intent';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
});

const projectCards = [
  { icon: Globe, label: 'Landing Pages', sub: 'Delivered in 48 hrs', color: '#5B8EF5', bg: 'rgba(91,142,245,0.1)' },
  { icon: Code2, label: 'Web Applications', sub: 'Full-stack & scalable', color: '#34d399', bg: 'rgba(52,211,153,0.1)' },
  { icon: Smartphone, label: 'Android Apps', sub: 'Native & performant', color: '#a78bfa', bg: 'rgba(167,139,250,0.1)' },
  { icon: LayoutDashboard, label: 'Business Systems', sub: 'ERP, LMS & more', color: '#f59e0b', bg: 'rgba(245,158,11,0.1)' },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-[100dvh] flex items-center overflow-hidden pt-20"
      id="home"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
            backgroundSize: '72px 72px',
          }}
        />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] opacity-[0.07]"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, #5B8EF5 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, #5B8EF5 0%, transparent 70%)' }}
        />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="container px-6 max-w-7xl mx-auto relative z-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-14 items-center">

          <div className="flex flex-col items-start space-y-5">
            <motion.div {...fadeUp(0)}>
              <span className="inline-block text-[11px] px-3 py-1.5 rounded-full font-medium tracking-wide"
                style={{ border: '1px solid rgba(91,142,245,0.25)', color: 'rgba(91,142,245,0.8)', background: 'rgba(91,142,245,0.06)' }}>
                Custom Software · Web · Mobile · Business Systems
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.08)}
              className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold tracking-tight leading-[1.06] text-white"
            >
              Software That Drives<br />
              Real Business<br />
              <span className="blue-text">Growth</span>
            </motion.h1>

            <motion.p {...fadeUp(0.16)}
              className="text-[15px] text-white/40 leading-[1.75] max-w-[440px]">
              We build custom web apps, Android applications, ERPs, LMS platforms, and business automation systems — engineered for performance, built to scale, and delivered on time.
            </motion.p>

            <motion.div {...fadeUp(0.24)} className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-1">
              <a href="#contact" data-testid="link-hero-schedule-call"
                onClick={() => fireContactIntent('Free Consultation')}>
                <button
                  data-testid="button-hero-schedule-call"
                  className="h-10 px-6 rounded-full bg-white text-[#0C0C10] text-sm font-semibold hover:bg-white/90 active:scale-[0.98] transition-all duration-150 shadow-[0_0_0_1px_rgba(255,255,255,0.1)]"
                >
                  Book Free Consultation
                </button>
              </a>
              <a href="#contact" data-testid="link-hero-estimate"
                onClick={() => fireContactIntent('Project Estimate')}>
                <button
                  data-testid="button-hero-estimate"
                  className="h-10 px-6 rounded-full text-sm font-medium text-white/60 hover:text-white/90 border border-white/[0.12] hover:border-white/[0.22] transition-all duration-150"
                >
                  Get a Free Project Estimate
                </button>
              </a>
            </motion.div>

            <motion.div {...fadeUp(0.32)} className="flex flex-col gap-2.5 pt-1">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-1.5">
                  {[
                    { color: '#5B8EF5', initial: 'M' },
                    { color: '#34d399', initial: 'S' },
                    { color: '#a78bfa', initial: 'A' },
                    { color: '#e2a063', initial: 'D' },
                  ].map((item, i) => (
                    <div key={i} className="w-6 h-6 rounded-full border border-[#0C0C10] flex items-center justify-center text-[8px] font-bold text-white"
                      style={{ background: item.color }}>{item.initial}</div>
                  ))}
                </div>
                <p className="text-[11px] text-white/30">Trusted by <span className="text-white/50">40+ businesses</span> across India</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#34d399]" />
                  <span className="text-[11px] text-white/35">Google Cloud Certified</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#5B8EF5]" />
                  <span className="text-[11px] text-white/35">5+ yrs experience</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#a78bfa]" />
                  <span className="text-[11px] text-white/35">500+ devs mentored</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-8 rounded-3xl opacity-[0.15] blur-3xl pointer-events-none"
              style={{ background: 'radial-gradient(circle, #5B8EF5 0%, transparent 70%)' }} />

            <div className="relative rounded-2xl overflow-hidden p-6 space-y-3"
              style={{ background: '#111318', border: '1px solid rgba(255,255,255,0.09)', boxShadow: '0 32px 80px rgba(0,0,0,0.6)' }}>

              <div className="flex items-center gap-2 mb-5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] text-white/25 font-mono"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#5B8EF5]" />
                    what we build
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {projectCards.map((card, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="rounded-xl p-4 flex flex-col gap-3"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: card.bg, border: `1px solid ${card.color}22` }}>
                      <card.icon size={15} style={{ color: card.color }} />
                    </div>
                    <div>
                      <p className="text-[12px] font-semibold text-white leading-tight">{card.label}</p>
                      <p className="text-[11px] text-white/30 mt-0.5">{card.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-between px-1">
                <p className="text-[11px] text-white/25">From idea to launch — fast.</p>
                <span className="text-[11px] px-2 py-0.5 rounded-full font-medium"
                  style={{ color: '#34d399', background: 'rgba(52,211,153,0.1)' }}>
                  ✓ On-time delivery
                </span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -top-4 -right-4 flex items-center gap-2 px-3 py-2 rounded-full text-[11px] font-medium shadow-xl"
              style={{ background: '#111318', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)' }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" />
              Landing page in 48 hrs
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-5 -left-4 flex items-center gap-2 px-3 py-2 rounded-full text-[11px] font-medium shadow-xl"
              style={{ background: '#111318', border: '1px solid rgba(91,142,245,0.25)', color: 'rgba(255,255,255,0.6)' }}
            >
              <span style={{ color: '#5B8EF5', fontWeight: 700 }}>₹10k–₹10L</span> project range
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
