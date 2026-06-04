import { motion } from 'framer-motion';
import { Globe, Code2, Smartphone, LayoutDashboard, Database, Workflow } from 'lucide-react';

const services = [
  {
    title: 'Landing Pages',
    description: 'Conversion-focused marketing sites that communicate your value clearly and load fast. Delivered in as little as 48 hours.',
    icon: Globe,
    gradient: 'radial-gradient(ellipse at 0% 0%, rgba(244,114,182,0.10) 0%, transparent 60%)',
  },
  {
    title: 'Web Development',
    description: 'Full-stack web applications built with modern frameworks — fast, responsive, and built to scale with your business.',
    icon: Code2,
    gradient: 'radial-gradient(ellipse at 0% 0%, rgba(91,142,245,0.12) 0%, transparent 60%)',
  },
  {
    title: 'Android Apps',
    description: 'Native Android applications designed for real users — smooth performance, clean UI, and reliable on every device.',
    icon: Smartphone,
    gradient: 'radial-gradient(ellipse at 0% 0%, rgba(167,139,250,0.10) 0%, transparent 60%)',
  },
  {
    title: 'Dashboard & Admin Panels',
    description: 'High-clarity interfaces for managing data, operations, and teams — built to be used daily and loved.',
    icon: LayoutDashboard,
    gradient: 'radial-gradient(ellipse at 0% 0%, rgba(251,191,36,0.09) 0%, transparent 60%)',
  },
  {
    title: 'Business Management Systems',
    description: 'ERP, LMS, fee management, ticketing, and other custom systems tailored to how your organisation actually works.',
    icon: Workflow,
    gradient: 'radial-gradient(ellipse at 0% 0%, rgba(52,211,153,0.09) 0%, transparent 60%)',
  },
  {
    title: 'Custom Software Solutions',
    description: 'Bespoke applications built to solve the exact problems your business faces — no off-the-shelf compromises.',
    icon: Database,
    gradient: 'radial-gradient(ellipse at 0% 0%, rgba(34,211,238,0.09) 0%, transparent 60%)',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export default function Services() {
  return (
    <section className="py-32 relative overflow-hidden" id="services"
      style={{ background: '#0F0F14' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(91,142,245,0.04) 0%, transparent 60%)' }} />

      <div className="container px-6 max-w-7xl mx-auto relative z-10">
        <div className="max-w-xl mb-20">
          <span className="section-label block mb-5">Services</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-[1.15] mb-4">
            Everything you need to build, ship, and scale.
          </h2>
          <p className="text-white/35 text-[15px] leading-relaxed">
            We work with businesses of all sizes to deliver software that actually solves problems.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', overflow: 'hidden' }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}
              className="group relative p-8 transition-all duration-200 cursor-default"
              style={{ background: '#0F0F14' }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = '#13131A'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = '#0F0F14'; }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: service.gradient }} />

              <div className="relative z-10">
                <div className="mb-6 w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <service.icon size={16} className="text-white/50 group-hover:text-white/80 transition-colors duration-200" />
                </div>
                <h3 className="text-[13px] font-semibold text-white mb-2.5 tracking-[-0.01em]">
                  {service.title}
                </h3>
                <p className="text-white/35 text-[13px] leading-relaxed group-hover:text-white/45 transition-colors duration-200">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
