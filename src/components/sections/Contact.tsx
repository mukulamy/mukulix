import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { Send, Mail, Clock, CheckCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const WHATSAPP_URL = "https://wa.me/919599161403";

const intentOptions = [
  'Free Consultation',
  'Project Estimate',
  'Landing Page',
  'Business Website',
  'Web Application',
  'Mobile App',
  'Enterprise / Custom System',
  'Other',
];

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  intent: z.string().min(1, 'Please select what you\'re looking for'),
  budget: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const guarantees = [
  { icon: Clock, text: 'Response within 24 hours' },
  { icon: CheckCircle, text: 'Free project estimate included' },
  { icon: CheckCircle, text: 'No obligation consultation' },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      intent: '',
      budget: '',
      message: '',
    },
  });

  // Read intent set by CTA buttons anywhere on the page
  useEffect(() => {
    const stored = sessionStorage.getItem('contact-intent');
    if (stored) {
      form.setValue('intent', stored);
      sessionStorage.removeItem('contact-intent');
    }

    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail?.intent;
      if (detail) form.setValue('intent', detail);
    };
    window.addEventListener('contact:intent', handler);
    return () => window.removeEventListener('contact:intent', handler);
  }, [form]);

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value as string);
      });

      await fetch('https://script.google.com/macros/s/AKfycbw5vKuUC4U9uE5MyZaUgZUTFWCCz1RB6n0JA0838kmpVGlLsMvy_76cFGqKXRGkaBV4/exec', {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });

      toast.success('Message sent successfully', {
        description: "We'll respond with a project estimate within 24 hours.",
      });
      form.reset();
    } catch (error) {
      toast.error('Failed to send message', {
        description: 'Please try again or contact us directly via WhatsApp.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-[#0C0C10] border-t border-white/[0.06] relative overflow-hidden" id="contact">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 0% 100%, rgba(91,142,245,0.04) 0%, transparent 55%)' }} />

      <div className="container px-6 max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div className="space-y-7">
            <div>
              <span className="section-label block mb-5">Get In Touch</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
                Book a free consultation.<br />
                <span className="blue-text">Get a project estimate.</span>
              </h2>
              <p className="text-sm text-white/40 leading-relaxed max-w-sm">
                Tell us what you're building. We'll review your requirements and send a detailed, fixed-price estimate — no obligation, no sales pressure.
              </p>
            </div>

            <div className="space-y-2.5">
              {guarantees.map((g, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(91,142,245,0.1)', border: '1px solid rgba(91,142,245,0.2)' }}>
                    <g.icon size={13} style={{ color: '#5B8EF5' }} />
                  </div>
                  <p className="text-[13px] text-white/50">{g.text}</p>
                </div>
              ))}
            </div>

            <div>
              <p className="text-[11px] text-white/25 uppercase tracking-widest mb-3">Prefer to reach out directly?</p>
              <div className="flex flex-wrap gap-2.5">
                <a href="mailto:mukulyadav3203@gmail.com" data-testid="link-contact-email"
                  className="px-4 py-2 rounded-full border border-white/10 flex items-center gap-2 text-white/55 hover:text-white hover:border-white/20 transition-colors text-sm font-medium">
                  <Mail size={15} /> mukulyadav3203@gmail.com
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-testid="link-contact-whatsapp"
                  className="px-4 py-2 rounded-full border border-white/10 flex items-center gap-2 text-white/55 hover:text-white hover:border-white/20 transition-colors text-sm font-medium">
                  <FaWhatsapp size={15} /> WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-2xl p-7">
            <div className="mb-5">
              <p className="text-[13px] font-semibold text-white mb-0.5">Free Project Consultation</p>
              <p className="text-[12px] text-white/35">We'll review your project and send a detailed estimate within 24 hours.</p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs text-white/60">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Hansika" data-testid="input-contact-name"
                            className="bg-white/[0.04] border-white/10 text-white placeholder-white/20 rounded-lg h-10" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs text-white/60">Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="hansika@ex.com" data-testid="input-contact-email"
                            className="bg-white/[0.04] border-white/10 text-white placeholder-white/20 rounded-lg h-10" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Intent dropdown — auto-filled from CTA buttons */}
                <FormField
                  control={form.control}
                  name="intent"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs text-white/60">I'm looking for</FormLabel>
                      <FormControl>
                        <select
                          {...field}
                          data-testid="select-contact-intent"
                          className="w-full h-10 rounded-lg px-3 text-sm bg-white/[0.04] border border-white/10 text-white focus:outline-none focus:ring-1 focus:ring-white/20 appearance-none"
                          style={{ color: field.value ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.3)' }}
                        >
                          <option value="" disabled style={{ background: '#111116', color: 'rgba(255,255,255,0.4)' }}>Select an option</option>
                          {intentOptions.map(opt => (
                            <option key={opt} value={opt} style={{ background: '#111116', color: '#fff' }}>{opt}</option>
                          ))}
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs text-white/60">Company (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Acme Inc." data-testid="input-contact-company"
                            className="bg-white/[0.04] border-white/10 text-white placeholder-white/20 rounded-lg h-10" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs text-white/60">Budget Range (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. ₹50k–₹1L" data-testid="input-contact-budget"
                            className="bg-white/[0.04] border-white/10 text-white placeholder-white/20 rounded-lg h-10" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs text-white/60">Project Details</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="What are you building? What problem does it solve? What's your timeline?"
                          data-testid="textarea-contact-message"
                          className="min-h-[100px] bg-white/[0.04] border-white/10 text-white placeholder-white/20 rounded-lg resize-y"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  data-testid="button-contact-submit"
                  className="w-full h-10 text-sm font-semibold rounded-lg bg-white text-black hover:bg-white/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">Sending...</span>
                  ) : (
                    <span className="flex items-center gap-2">Send & Request Estimate <Send size={15} /></span>
                  )}
                </Button>

                <p className="text-center text-[11px] text-white/20">
                  We respond within 24 hours · No spam · Your data is private
                </p>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
