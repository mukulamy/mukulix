import { motion } from 'framer-motion';
import { BadgeCheck, Users, GraduationCap, Cloud, Linkedin } from 'lucide-react';
import { fireContactIntent } from '@/lib/intent';
import mukulImage from '/mukul-photo.jpg';

const credentials = [
  { label: 'Google Cloud Certified', icon: Cloud, color: '#5B8EF5', bg: 'rgba(91,142,245,0.1)' },
  { label: 'Former GDG Campus Lead', icon: GraduationCap, color: '#a78bfa', bg: 'rgba(167,139,250,0.1)' },
  { label: '500+ Developers Mentored', icon: Users, color: '#34d399', bg: 'rgba(52,211,153,0.1)' },
  { label: 'Full Stack & Mobile Dev', icon: BadgeCheck, color: '#f59e0b', bg: 'rgba(245,158,11,0.1)' },
];

const techStack = [
  'React', 'Angular', 'TypeScript', 'Node.js',
  'Firebase', 'GCP', 'MySQL', 'MongoDB',
];

const deliverables = [
  { label: 'ERP Systems', note: 'End-to-end enterprise resource planning' },
  { label: 'LMS Platforms', note: 'Course delivery & student management' },
  { label: 'Ticketing Systems', note: 'Support & operations management' },
  { label: 'Analytics Dashboards', note: 'Real-time business intelligence' },
  { label: 'Android Applications', note: 'Native mobile solutions' },
  { label: 'Web Applications', note: 'Full-stack, scalable products' },
];

export default function Founder() {
  return (
    <section className="py-24 relative overflow-hidden" id="founder"
      style={{ background: '#0F0F14' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 0% 50%, rgba(91,142,245,0.04) 0%, transparent 60%)' }} />

      <div className="container px-6 max-w-6xl mx-auto relative z-10">
        <div className="mb-12">
          <span className="section-label block mb-5">The Team Behind Mukulix</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-[1.15] max-w-lg">
            Senior engineering expertise.<br />
            <span className="blue-text">Startup execution speed.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 items-start">

          {/* LEFT: Founder card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl overflow-hidden"
            style={{ background: '#111116', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div className="h-1 w-full"
              style={{ background: 'linear-gradient(90deg, #5B8EF5, #a78bfa, #34d399)' }} />

            <div className="p-7">
              {/* Avatar + identity */}
              <div className="flex items-start justify-between gap-4 mb-7">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0"
                    style={{ border: '1px solid rgba(91,142,245,0.25)' }}>
                    <img src={mukulImage} alt="Mukul Yadav"
                      className="w-full h-full object-cover object-top" />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-white tracking-tight">Mukul Yadav</h3>
                    <p className="text-[12px] text-white/40 mt-0.5">Software Engineer · Full Stack Developer</p>
                    <div className="flex items-center gap-1.5 mt-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#34d399]" />
                      <span className="text-[11px] text-white/30">Available for new projects</span>
                    </div>
                  </div>
                </div>
                <a
                  href="https://www.linkedin.com/in/mukulji/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium transition-colors duration-150 flex-shrink-0"
                  style={{ background: 'rgba(91,142,245,0.1)', border: '1px solid rgba(91,142,245,0.2)', color: 'rgba(91,142,245,0.8)' }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(91,142,245,0.18)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'rgba(91,142,245,0.1)')}
                >
                  <Linkedin size={12} />
                  LinkedIn
                </a>
              </div>

              {/* Credentials grid */}
              <div className="grid grid-cols-2 gap-2 mb-7">
                {credentials.map((c, i) => (
                  <div key={i} className="flex items-center gap-2 px-3 py-2.5 rounded-xl"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: c.bg }}>
                      <c.icon size={12} style={{ color: c.color }} />
                    </div>
                    <span className="text-[11px] text-white/55 leading-snug font-medium">{c.label}</span>
                  </div>
                ))}
              </div>

              {/* Tech stack */}
              <div>
                <p className="text-[10px] text-white/25 uppercase tracking-widest mb-2.5">Core Technologies</p>
                <div className="flex flex-wrap gap-1.5">
                  {techStack.map((t) => (
                    <span key={t} className="text-[11px] px-2.5 py-1 rounded-md font-medium"
                      style={{ background: 'rgba(91,142,245,0.08)', border: '1px solid rgba(91,142,245,0.15)', color: 'rgba(91,142,245,0.8)' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <div className="space-y-7">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[15px] text-white/45 leading-[1.8] max-w-xl"
            >
              Mukulix is led by a software engineer with hands-on experience building production-grade systems for businesses across education, operations, and enterprise.
              Every project is approached with the same rigour — clean architecture, scalable code, and a sharp focus on business outcomes.
            </motion.p>

            {/* Deliverables grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.07 } } }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-px rounded-2xl overflow-hidden"
              style={{ border: '1px solid rgba(255,255,255,0.06)' }}
            >
              {deliverables.map((d, i) => (
                <motion.div
                  key={i}
                  variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } } }}
                  className="px-5 py-4 group transition-colors duration-200"
                  style={{
                    background: '#0F0F14',
                    borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                    borderBottom: i < deliverables.length - 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = '#13131A'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = '#0F0F14'; }}
                >
                  <div className="flex items-start gap-2.5">
                    <div className="w-1 h-1 rounded-full mt-2 shrink-0 bg-[#5B8EF5]" />
                    <div>
                      <p className="text-[13px] font-semibold text-white leading-tight mb-0.5">{d.label}</p>
                      <p className="text-[11px] text-white/30 leading-snug">{d.note}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a href="#contact" onClick={() => fireContactIntent('Free Consultation')}>
                <button className="h-10 px-6 rounded-full bg-white text-[#0C0C10] text-sm font-semibold hover:bg-white/90 transition-colors duration-150">
                  Discuss Your Project
                </button>
              </a>
              <a href="#projects">
                <button className="h-10 px-6 rounded-full text-sm font-medium text-white/50 hover:text-white/90 border border-white/[0.1] hover:border-white/[0.2] transition-all duration-150">
                  View Case Studies →
                </button>
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
