import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "They built our website exactly how we wanted it, maybe even better honestly. Communication was smooth throughout and they delivered on time. Would definitely work with them again.",
    author: "Abhishek Bhardwaj",
    role: "Founder, The Earth Design Studio",
    initials: "AB",
  },
  {
    quote: "The ticket system has made a huge difference for our team. Before this we were managing everything on WhatsApp and spreadsheets. Now everything is in one place and tracking is effortless.",
    author: "Rohit Sharma",
    role: "Operations Manager",
    initials: "RS",
  },
  {
    quote: "Our LMS works really well for both teachers and students. There were a couple of small things we asked to fix after launch and they sorted it out quickly. Happy with the overall experience.",
    author: "Priya Desai",
    role: "Academic Coordinator",
    initials: "PD",
  },
  {
    quote: "We were using 4 different softwares before the ERP was built. Now everything is in one system — saves a lot of time and confusion. The team understood our business well before starting.",
    author: "Vikram Joshi",
    role: "Director, Manufacturing Operations",
    initials: "VJ",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden" id="testimonials"
      style={{ background: '#0C0C10' }}>
      <div className="container px-6 max-w-6xl mx-auto relative z-10">

        <div className="mb-14">
          <span className="section-label block mb-5">Client Stories</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-[1.15] max-w-sm">
            What our clients say.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0"
          style={{ border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', overflow: 'hidden' }}>
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 relative"
              style={{
                borderRight: index % 2 === 0 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                borderBottom: index < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                background: '#0C0C10',
              }}
            >
              <div className="text-5xl leading-none mb-5 font-serif select-none"
                style={{ color: 'rgba(255,255,255,0.05)' }}>"</div>
              <p className="text-[14px] text-white/55 leading-[1.8] mb-7">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0"
                  style={{ background: 'rgba(91,142,245,0.12)', border: '1px solid rgba(91,142,245,0.2)', color: 'rgba(91,142,245,0.8)' }}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-white leading-tight">{t.author}</p>
                  <p className="text-[11px] text-white/30 mt-0.5">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
