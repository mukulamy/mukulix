import { motion } from 'framer-motion';
import { Globe, Monitor, Code2, Smartphone } from 'lucide-react';
import { fireContactIntent } from '@/lib/intent';

const tiers = [
  {
    icon: Globe,
    category: 'Landing Pages',
    starting: '₹10,000',
    usd: '~$120',
    note: 'Delivered in as little as 48 hours',
    includes: ['Single-page design', 'Mobile responsive', 'SEO optimised', 'Contact / lead form', 'Hosting setup'],
    color: '#5B8EF5',
    bg: 'rgba(91,142,245,0.08)',
    border: 'rgba(91,142,245,0.18)',
    intent: 'Landing Page',
  },
  {
    icon: Monitor,
    category: 'Business Websites',
    starting: '₹35,000',
    usd: '~$420',
    note: 'Multi-page, CMS-ready, professionally crafted',
    includes: ['Up to 8 pages', 'CMS / content editing', 'Blog or portfolio', 'Analytics integration', 'Performance optimised'],
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.08)',
    border: 'rgba(167,139,250,0.18)',
    intent: 'Business Website',
  },
  {
    icon: Code2,
    category: 'Custom Web Apps',
    starting: '₹80,000',
    usd: '~$960',
    note: 'Full-stack, auth, dashboards, APIs',
    includes: ['Auth & user management', 'Admin dashboard', 'Custom database design', 'REST API', 'Cloud deployment'],
    color: '#34d399',
    bg: 'rgba(52,211,153,0.08)',
    border: 'rgba(52,211,153,0.18)',
    intent: 'Web Application',
  },
  {
    icon: Smartphone,
    category: 'Mobile Applications',
    starting: '₹1,00,000',
    usd: '~$1,200',
    note: 'Android-native, performant, Play Store ready',
    includes: ['Android native build', 'Backend + API', 'Push notifications', 'Offline capability', 'Play Store deployment'],
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.18)',
    intent: 'Mobile App',
  },
];

export default function Pricing() {
  return (
    <section className="py-24 relative overflow-hidden" id="pricing"
      style={{ background: '#0F0F14' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(91,142,245,0.04) 0%, transparent 55%)' }} />

      <div className="container px-6 max-w-6xl mx-auto relative z-10">
        <div className="max-w-xl mb-12">
          <span className="section-label block mb-5">Investment</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-[1.15] mb-3">
            Transparent starting points.<br />
            <span className="blue-text">Fixed-price proposals.</span>
          </h2>
          <p className="text-white/35 text-[14px] leading-relaxed">
            Every project is scoped individually. These are reference points — your proposal will be precise, detailed, and fixed before we begin.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } } }}
              className="rounded-2xl p-6 flex flex-col group transition-all duration-200"
              style={{ background: '#111116', border: '1px solid rgba(255,255,255,0.07)' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = tier.border;
                (e.currentTarget as HTMLDivElement).style.background = '#13131A';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)';
                (e.currentTarget as HTMLDivElement).style.background = '#111116';
              }}
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
                style={{ background: tier.bg, border: `1px solid ${tier.border}` }}>
                <tier.icon size={15} style={{ color: tier.color }} />
              </div>

              <p className="text-[13px] font-semibold text-white mb-0.5">{tier.category}</p>
              <p className="text-[11px] text-white/30 leading-snug mb-4">{tier.note}</p>

              <div className="mb-5">
                <p className="text-[10px] text-white/25 uppercase tracking-widest mb-1">Starting from</p>
                <p className="text-2xl font-black text-white tracking-tight">{tier.starting}</p>
                <p className="text-[11px] mt-0.5" style={{ color: `${tier.color}80` }}>{(tier as any).usd}</p>
              </div>

              <div className="flex-1 space-y-1.5 mb-5">
                {tier.includes.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full mt-[7px] shrink-0" style={{ background: tier.color }} />
                    <span className="text-[12px] text-white/40 leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              <a href="#contact" onClick={() => fireContactIntent(tier.intent)}>
                <button
                  className="w-full h-9 rounded-xl text-[12px] font-semibold transition-all duration-150"
                  style={{ background: tier.bg, color: tier.color, border: `1px solid ${tier.border}` }}
                >
                  Get a Quote →
                </button>
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-5 px-6 py-5 rounded-2xl"
          style={{ background: '#111116', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <div>
            <p className="text-[14px] font-semibold text-white mb-0.5">Need something more complex?</p>
            <p className="text-[12px] text-white/35">ERP systems, LMS platforms, enterprise software, and multi-platform solutions are all in scope.</p>
          </div>
          <a href="#contact" className="shrink-0"
            onClick={() => fireContactIntent('Enterprise / Custom System')}>
            <button className="h-10 px-6 rounded-full bg-white text-[#0C0C10] text-sm font-semibold hover:bg-white/90 transition-colors duration-150 whitespace-nowrap">
              Discuss Your Project
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
