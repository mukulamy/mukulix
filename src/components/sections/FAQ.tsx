import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How much does a project cost?',
    answer: 'Project investment depends on scope and complexity. As a reference: landing pages start from ₹15,000, business websites from ₹35,000, custom web applications from ₹80,000, and mobile applications from ₹1,00,000. We provide a detailed, fixed-price proposal after an initial discovery call — no hidden costs.',
  },
  {
    question: 'How long does development take?',
    answer: 'Timelines depend on scope. Landing pages can be delivered in 48 hours. Business websites typically take 1–2 weeks. Custom web applications take 4–8 weeks. Enterprise systems (ERP, LMS) range from 6–16 weeks. You\'ll receive a precise timeline in your project proposal.',
  },
  {
    question: 'Do you provide maintenance after launch?',
    answer: 'Yes. We offer post-launch support packages covering bug fixes, security updates, performance monitoring, and minor feature additions. Retainer engagements are available for ongoing development. We respond to critical issues within 24 hours.',
  },
  {
    question: 'Do you provide hosting and deployment?',
    answer: 'Yes. We can handle complete deployment on Google Cloud Platform, Firebase, or other cloud providers. We configure domains, SSL certificates, and production environments. Hosting management can be included as part of a maintenance retainer.',
  },
  {
    question: 'Can you work with our existing systems or codebase?',
    answer: 'Absolutely. We regularly audit, extend, and improve existing codebases. Before starting, we conduct a technical assessment and provide an honest evaluation of what\'s there. We can integrate with your existing databases, APIs, and third-party services.',
  },
  {
    question: 'Do you build fully custom software — not templates?',
    answer: 'Yes, always. Every project is built from scratch to match your exact requirements. We don\'t use off-the-shelf templates or pre-built SaaS tools. This means you own 100% of the code and are never locked into a platform.',
  },
];

export default function FAQ() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0F0F14]" id="faq">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(91,142,245,0.03) 0%, transparent 60%)' }} />

      <div className="container px-6 max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center space-y-3 mb-12"
        >
          <span className="section-label">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Questions we hear often.
          </h2>
          <p className="text-white/35 text-[14px] leading-relaxed max-w-sm mx-auto">
            Straight answers. No vague promises.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-white/[0.07]"
                data-testid={`faq-item-${index}`}
              >
                <AccordionTrigger className="text-left text-sm font-medium text-white/80 hover:text-white py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[13px] text-white/40 leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <p className="text-[13px] text-white/30 mb-3">Have a different question?</p>
          <a href="#contact">
            <button className="h-10 px-6 rounded-full text-sm font-medium text-white/60 hover:text-white border border-white/10 hover:border-white/20 transition-all duration-150">
              Ask us directly →
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
