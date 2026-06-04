import { motion } from 'framer-motion';
import { MessageSquare, Map, PenTool, Code2, FlaskConical, Rocket, FolderOpen, Headphones } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Discovery',
    description: 'Understand your goals, users, constraints, and existing systems before any code is written.',
    color: '#5B8EF5',
    bg: 'rgba(91,142,245,0.1)',
  },
  {
    num: '02',
    icon: Map,
    title: 'Planning',
    description: 'Scope, architecture, tech stack, and timeline — agreed upfront. A clear plan, no surprises.',
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.1)',
  },
  {
    num: '03',
    icon: PenTool,
    title: 'Design',
    description: 'UI/UX wireframes reviewed and approved before development begins. You see it first.',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.1)',
  },
  {
    num: '04',
    icon: Code2,
    title: 'Development',
    description: 'Built in focused sprints with regular check-ins. Real, working progress at every milestone.',
    color: '#34d399',
    bg: 'rgba(52,211,153,0.1)',
  },
  {
    num: '05',
    icon: FlaskConical,
    title: 'Testing',
    description: 'Thorough QA across devices and use cases. Edge cases, performance, and security all validated.',
    color: '#22d3ee',
    bg: 'rgba(34,211,238,0.1)',
  },
  {
    num: '06',
    icon: Rocket,
    title: 'Launch',
    description: 'Smooth deployment with zero-downtime strategies. We handle go-live and stay on standby.',
    color: '#f472b6',
    bg: 'rgba(244,114,182,0.1)',
  },
  {
    num: '07',
    icon: FolderOpen,
    title: 'Handoff',
    description: 'Clean code delivery, documentation, walkthroughs, and full ownership transfer to your team.',
    color: '#a3e635',
    bg: 'rgba(163,230,53,0.1)',
  },
  {
    num: '08',
    icon: Headphones,
    title: 'Support',
    description: 'Bug fixes, updates, and ongoing feature development — available well past the finish line.',
    color: '#fb923c',
    bg: 'rgba(251,146,60,0.1)',
  },
];

export default function Process() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: '#0C0C10' }} id="process">
      <div className="container px-6 max-w-6xl mx-auto relative z-10">

        <div className="mb-14">
          <span className="section-label block mb-5">How We Work</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-[1.15] max-w-md">
            A process built for clarity and confidence.
          </h2>
          <p className="text-white/35 text-[14px] leading-relaxed mt-3 max-w-sm">
            Eight defined phases. Complete transparency. You know exactly where your project stands at every step.
          </p>
        </div>

        {/* Desktop: 4+4 grid */}
        <div className="hidden md:block space-y-4">
          {/* Row 1: steps 1–4 */}
          <div className="grid grid-cols-4 gap-4">
            {steps.slice(0, 4).map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col p-5 rounded-2xl relative"
                style={{ background: '#111116', border: '1px solid rgba(255,255,255,0.07)', minHeight: '190px' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${step.color}35`;
                  (e.currentTarget as HTMLDivElement).style.background = '#13131A';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)';
                  (e.currentTarget as HTMLDivElement).style.background = '#111116';
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                    style={{ background: step.bg, border: `1px solid ${step.color}25` }}>
                    <step.icon size={14} style={{ color: step.color }} />
                  </div>
                  <span className="text-[11px] font-mono font-semibold" style={{ color: `${step.color}60` }}>{step.num}</span>
                </div>
                <h3 className="text-[13px] font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-[12px] text-white/35 leading-relaxed flex-1">{step.description}</p>
                <div className="mt-4 h-px rounded-full"
                  style={{ background: `linear-gradient(90deg, ${step.color}40, transparent)` }} />
                {i < 3 && (
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.07 + 0.3 }}
                    style={{ originX: 0 }}
                    className="absolute top-1/2 -right-5 -translate-y-1/2 flex items-center gap-0.5 z-10"
                  >
                    <div className="w-4 h-px" style={{ background: `${step.color}40` }} />
                    <svg width="7" height="7" viewBox="0 0 8 8" fill="none">
                      <path d="M0 4H6M6 4L3 1M6 4L3 7" stroke={steps[i + 1].color} strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Row 2: steps 5–8 */}
          <div className="grid grid-cols-4 gap-4">
            {steps.slice(4).map((step, i) => (
              <motion.div
                key={i + 4}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i + 4) * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col p-5 rounded-2xl relative"
                style={{ background: '#111116', border: '1px solid rgba(255,255,255,0.07)', minHeight: '190px' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${step.color}35`;
                  (e.currentTarget as HTMLDivElement).style.background = '#13131A';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)';
                  (e.currentTarget as HTMLDivElement).style.background = '#111116';
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                    style={{ background: step.bg, border: `1px solid ${step.color}25` }}>
                    <step.icon size={14} style={{ color: step.color }} />
                  </div>
                  <span className="text-[11px] font-mono font-semibold" style={{ color: `${step.color}60` }}>{step.num}</span>
                </div>
                <h3 className="text-[13px] font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-[12px] text-white/35 leading-relaxed flex-1">{step.description}</p>
                <div className="mt-4 h-px rounded-full"
                  style={{ background: `linear-gradient(90deg, ${step.color}40, transparent)` }} />
                {i < 3 && (
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: (i + 4) * 0.07 + 0.3 }}
                    style={{ originX: 0 }}
                    className="absolute top-1/2 -right-5 -translate-y-1/2 flex items-center gap-0.5 z-10"
                  >
                    <div className="w-4 h-px" style={{ background: `${step.color}40` }} />
                    <svg width="7" height="7" viewBox="0 0 8 8" fill="none">
                      <path d="M0 4H6M6 4L3 1M6 4L3 7" stroke={steps[i + 5].color} strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical */}
        <div className="md:hidden relative pl-8">
          <div className="absolute left-[13px] top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, rgba(91,142,245,0.4), transparent)' }} />
          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div className="absolute -left-8 top-1 w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ background: '#0C0C10', border: `1px solid ${step.color}50` }}>
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: step.color }} />
                </div>
                <span className="text-[10px] font-mono text-white/25 mb-1 block">{step.num}</span>
                <h3 className="text-[14px] font-semibold text-white mb-1.5">{step.title}</h3>
                <p className="text-[13px] text-white/35 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
