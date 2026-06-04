import { motion } from 'framer-motion';
import { Shield, Clock, GitBranch, Server, Headphones, TrendingUp } from 'lucide-react';
import { fireContactIntent } from '@/lib/intent';

const trustItems = [
  {
    title: 'Structured Delivery Process',
    description: 'Every project follows a defined 8-step process — from discovery to post-launch support. No surprises, no scope creep.',
    icon: GitBranch,
    detail: 'Discovery → Planning → Design → Build → Test → Launch → Handoff → Support',
  },
  {
    title: 'On-Time, Every Time',
    description: 'We quote realistic timelines and hold ourselves to them. Landing pages in 48 hrs; complex systems within agreed milestones.',
    icon: Clock,
    detail: '95% on-time delivery rate across all projects',
  },
  {
    title: 'Production-Grade Code',
    description: 'No shortcuts. Every codebase is structured for maintainability, performance, and easy handoff — whether you have a dev team or not.',
    icon: Shield,
    detail: 'Clean architecture · TypeScript · Documented',
  },
  {
    title: 'Cloud-Ready Infrastructure',
    description: 'Google Cloud Certified expertise means your systems are deployed with best practices — scalable, reliable, and cost-efficient.',
    icon: Server,
    detail: 'GCP · Firebase · Cloud Run · Managed DBs',
  },
  {
    title: 'Post-Launch Support',
    description: 'We don\'t disappear after go-live. Bug fixes, feature additions, and ongoing maintenance are all available.',
    icon: Headphones,
    detail: 'Retainer options available · Response within 24 hrs',
  },
  {
    title: 'Business-Outcome Focused',
    description: 'We measure success by what changes in your business — not just lines of code. Features exist to move metrics.',
    icon: TrendingUp,
    detail: 'ROI-driven development philosophy',
  },
];

const industries = ['Education', 'Manufacturing', 'Operations', 'E-Commerce', 'Healthcare', 'Logistics'];

export default function WhyUs() {
  return (
    <section className="py-24 relative overflow-hidden" id="why-us"
      style={{ background: '#0F0F14' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 100% 50%, rgba(91,142,245,0.04) 0%, transparent 60%)' }} />

      <div className="container px-6 max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 items-start">

          <div className="lg:sticky lg:top-32">
            <span className="section-label block mb-5">Why Mukulix</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-[1.15] mb-4">
              Built for businesses who can't afford to get it wrong.
            </h2>
            <p className="text-white/35 text-[14px] leading-relaxed max-w-xs mb-7">
              Senior engineering, transparent process, real accountability.
            </p>

            <div className="mb-7">
              <p className="text-[10px] text-white/25 uppercase tracking-widest mb-3">Industries Served</p>
              <div className="flex flex-wrap gap-2">
                {industries.map((ind) => (
                  <span key={ind} className="text-[11px] px-2.5 py-1 rounded-md"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.45)' }}>
                    {ind}
                  </span>
                ))}
              </div>
            </div>

            <a href="#contact" className="inline-block"
              onClick={() => fireContactIntent('Free Consultation')}>
              <button className="h-10 px-6 rounded-full bg-white text-[#0C0C10] text-sm font-semibold hover:bg-white/90 transition-colors duration-150"
                data-testid="button-whyus-cta">
                Work With Us
              </button>
            </a>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.07 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-px"
            style={{ border: '1px solid rgba(255,255,255,0.06)', borderRadius: '14px', overflow: 'hidden' }}
          >
            {trustItems.map((h, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}
                className="group p-6 transition-colors duration-200"
                style={{
                  background: '#0F0F14',
                  borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  borderBottom: i < trustItems.length - 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = '#13131A'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = '#0F0F14'; }}
              >
                <h.icon size={15} className="text-white/30 mb-3 group-hover:text-white/60 transition-colors duration-200" />
                <h3 className="text-[13px] font-semibold text-white mb-1.5">{h.title}</h3>
                <p className="text-[12px] text-white/35 leading-relaxed mb-2.5">{h.description}</p>
                <p className="text-[10px] text-white/20 leading-snug font-mono">{h.detail}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
