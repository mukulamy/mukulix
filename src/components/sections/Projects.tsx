import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'The Earth Design Studio',
    problem: 'A design studio with exceptional work but a dated web presence failing to convert visitors into clients.',
    solution: 'Built a premium editorial website reflecting their brand quality — clean layout, fast-loading, SEO-optimised, with a clear inquiry flow.',
    outcome: 'Inbound inquiries increased 3× in the first month post-launch.',
    link: 'http://theearthdesignstudio.com/',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'SEO'],
    industry: 'Creative Agency',
    tint: 'rgba(200,160,100,0.07)',
    accentLine: '#c8a064',
    visual: { bars: [55, 72, 60, 88, 75, 92, 80, 95], label: 'Inbound Inquiries', metric: '3× Growth' },
  },
  {
    title: 'Ticket Management System',
    problem: 'An operations team managing support on WhatsApp and spreadsheets — no visibility, no accountability, constant delays.',
    solution: 'Custom ticketing platform with creation, assignment, status tracking, SLA alerts, and a management reporting dashboard.',
    outcome: 'Ticket resolution time reduced by 40% within two months of launch.',
    link: '#',
    tags: ['React', 'Node.js', 'MongoDB', 'REST API'],
    industry: 'Operations',
    tint: 'rgba(52,211,153,0.07)',
    accentLine: '#34d399',
    visual: { bars: [40, 55, 48, 70, 62, 80, 74, 90], label: 'Tickets Resolved / Week', metric: '−40% Resolution Time' },
  },
  {
    title: 'Learning Management System',
    problem: 'An educational institution running courses via manual registration, email, and offline tracking — unscalable as student numbers grew.',
    solution: 'End-to-end LMS with course creation, enrollment, assignment submission, progress tracking, and a dedicated learner dashboard.',
    outcome: '500+ students onboarded in the first term. Zero downtime.',
    link: '#',
    tags: ['React', 'Express', 'MySQL', 'Firebase Auth'],
    industry: 'Education',
    tint: 'rgba(91,142,245,0.07)',
    accentLine: '#5B8EF5',
    visual: { bars: [30, 45, 58, 52, 70, 68, 84, 100], label: 'Students Enrolled', metric: '500+ onboarded' },
  },
  {
    title: 'Enterprise ERP System',
    problem: 'A manufacturing business using 4 disconnected tools for inventory, HR, payroll, and procurement — creating data silos and admin overhead.',
    solution: 'Unified ERP with real-time inventory, procurement workflows, HR records, payroll automation, and management reporting.',
    outcome: 'Replaced 4 separate tools. Saved 12+ hours of admin work per week.',
    link: '#',
    tags: ['React', 'Node.js', 'MongoDB', 'GCP'],
    industry: 'Manufacturing',
    tint: 'rgba(167,139,250,0.07)',
    accentLine: '#a78bfa',
    visual: { bars: [50, 60, 55, 72, 68, 80, 85, 92], label: 'Processes Automated', metric: '12 hrs saved / week' },
  },
  {
    title: 'Fee Management System',
    problem: 'A school collecting fees manually — missed payments, paper receipts, no automated reminders, and poor parent visibility.',
    solution: 'Digital fee platform with online payments, automated reminders, overdue alerts, receipt generation, and a parent-facing portal.',
    outcome: 'Fee collection rate improved from 71% to 94% in one academic quarter.',
    link: '#',
    tags: ['React', 'Express', 'MySQL', 'Payment Gateway'],
    industry: 'Education',
    tint: 'rgba(245,158,11,0.07)',
    accentLine: '#f59e0b',
    visual: { bars: [45, 52, 60, 58, 72, 76, 88, 94], label: 'Collection Rate', metric: '94% on time' },
  },
];

export default function Projects() {
  return (
    <section className="py-24 relative overflow-hidden" id="projects"
      style={{ background: '#0C0C10' }}>

      <div className="container px-6 max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-lg">
            <span className="section-label block mb-5">Case Studies</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-[1.15]">
              Real problems. Real solutions.<br />Measurable outcomes.
            </h2>
          </div>
          <a href="#contact" data-testid="link-projects-start">
            <button className="shrink-0 h-10 px-6 rounded-full text-sm font-medium text-white/50 hover:text-white/90 border border-white/[0.1] hover:border-white/[0.2] transition-all duration-150">
              Start a Project →
            </button>
          </a>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => {
            const inner = (
              <div
                className={`rounded-2xl overflow-hidden transition-all duration-300 ${index === 0 ? 'group-hover:-translate-y-0.5' : ''}`}
                style={{ background: '#111116', border: '1px solid rgba(255,255,255,0.07)', boxShadow: '0 2px 0 rgba(255,255,255,0.02)' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${project.accentLine}40`;
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 40px rgba(0,0,0,0.3)`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 0 rgba(255,255,255,0.02)';
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr]">
                  {/* Visual panel */}
                  <div className="relative h-52 lg:h-auto min-h-[200px] flex flex-col justify-between p-7 overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${project.tint} 0%, rgba(0,0,0,0) 70%)` }}>
                    <div className="absolute top-0 left-0 right-0 h-px"
                      style={{ background: `linear-gradient(90deg, ${project.accentLine}60, transparent)` }} />
                    <div className="flex items-start justify-between">
                      <span className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                        style={{ color: project.accentLine, background: `${project.accentLine}15`, border: `1px solid ${project.accentLine}25` }}>
                        {project.industry}
                      </span>
                    </div>
                    <div className="flex-1 flex flex-col justify-end mt-3">
                      <p className="text-[10px] text-white/25 uppercase tracking-widest mb-2.5">{project.visual.label}</p>
                      <div className="flex items-end gap-1 h-14 mb-2.5">
                        {project.visual.bars.map((h, i) => (
                          <div key={i} className="flex-1 rounded-sm"
                            style={{ height: `${h}%`, background: i === project.visual.bars.length - 1 ? project.accentLine : `${project.accentLine}28` }} />
                        ))}
                      </div>
                      <p className="text-2xl font-bold text-white">{project.visual.metric}</p>
                    </div>
                  </div>

                  {/* Content panel */}
                  <div className="p-7 flex flex-col justify-between gap-5"
                    style={{ borderLeft: '1px solid rgba(255,255,255,0.05)' }}>
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <h3 className="text-xl font-bold text-white tracking-tight leading-tight">{project.title}</h3>
                        {index === 0 && (
                          <ArrowUpRight size={18} className="shrink-0 mt-0.5 text-white/20 group-hover:text-white/60 transition-colors duration-200" />
                        )}
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-[10px] text-white/25 uppercase tracking-widest mb-1">Problem</p>
                          <p className="text-[12px] text-white/40 leading-relaxed">{project.problem}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-white/25 uppercase tracking-widest mb-1">Solution</p>
                          <p className="text-[12px] text-white/40 leading-relaxed">{project.solution}</p>
                        </div>
                        <div className="flex items-start gap-2.5 p-3 rounded-lg"
                          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                          <div className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ background: project.accentLine }} />
                          <div>
                            <p className="text-[10px] text-white/25 uppercase tracking-widest mb-0.5">Outcome</p>
                            <p className="text-[12px] text-white/55 leading-relaxed font-medium">{project.outcome}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[11px] text-white/25 uppercase tracking-wider">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.65, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                {index === 0 ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block group" data-testid="link-project-0">
                    {inner}
                  </a>
                ) : (
                  <div className="group">{inner}</div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
