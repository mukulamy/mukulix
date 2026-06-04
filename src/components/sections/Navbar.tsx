import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Code2, Smartphone, LayoutDashboard, Database, Workflow, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import mukulixLogo from '/mukulix-logo-clean.png';
import { fireContactIntent } from '@/lib/intent';

const serviceItems = [
  { title: 'Landing Pages', icon: Globe, desc: 'Delivered in as little as 48 hours' },
  { title: 'Web Development', icon: Code2, desc: 'Full-stack apps built to scale' },
  { title: 'Android Apps', icon: Smartphone, desc: 'Native & performant mobile apps' },
  { title: 'Dashboard & Admin Panels', icon: LayoutDashboard, desc: 'High-clarity interfaces for daily use' },
  { title: 'Business Management Systems', icon: Workflow, desc: 'ERP, LMS, ticketing & more' },
  { title: 'Custom Software Solutions', icon: Database, desc: 'Bespoke apps for your exact needs' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleServicesEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };
  const handleServicesLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 120);
  };

  const navLinks = [
    { name: 'Work', href: '#projects' },
    { name: 'About', href: '#founder' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0C0C10]/80 backdrop-blur-md border-b border-white/[0.06] py-4' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <a href="#" data-testid="link-home-logo" className="flex items-center gap-2">
          <img src={mukulixLogo} alt="Mukulix" width="64" height="64"
            className="h-16 w-auto object-contain" loading="eager" decoding="async" />
          <span className="text-white font-bold text-lg tracking-tight">Mukul<span className="text-blue-500">ix</span></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">

            <div ref={servicesRef} className="relative"
              onMouseEnter={handleServicesEnter} onMouseLeave={handleServicesLeave}>
              <a href="#pricing" data-testid="link-nav-services"
                className="flex items-center gap-1 text-sm font-medium text-white/50 hover:text-white/90 transition-colors">
                Services
                <ChevronDown size={13} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </a>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[520px] rounded-2xl overflow-hidden shadow-2xl"
                  style={{ background: '#13131A', border: '1px solid rgba(255,255,255,0.08)' }}
                  onMouseEnter={handleServicesEnter} onMouseLeave={handleServicesLeave}>
                  <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 rounded-sm"
                    style={{ background: '#13131A', border: '1px solid rgba(255,255,255,0.08)', borderBottom: 'none', borderRight: 'none' }} />
                  <div className="grid grid-cols-2 gap-px p-1" style={{ background: 'rgba(255,255,255,0.04)' }}>
                    {serviceItems.map((s) => (
                      <a key={s.title} href="#pricing"
                        data-testid={`link-nav-service-${s.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="group flex items-start gap-3 p-4 rounded-xl transition-all duration-150"
                        style={{ background: '#13131A' }}
                        onMouseEnter={e => (e.currentTarget.style.background = '#1A1A24')}
                        onMouseLeave={e => (e.currentTarget.style.background = '#13131A')}>
                        <div className="mt-0.5 w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center"
                          style={{ background: 'rgba(91,142,245,0.1)', border: '1px solid rgba(91,142,245,0.15)' }}>
                          <s.icon size={14} className="text-[#5B8EF5]" />
                        </div>
                        <div>
                          <p className="text-[13px] font-medium text-white/80 group-hover:text-white transition-colors leading-tight mb-0.5">{s.title}</p>
                          <p className="text-[11px] text-white/35 leading-snug">{s.desc}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="px-5 py-3 flex items-center justify-between"
                    style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <p className="text-[11px] text-white/30">Web, mobile & business software</p>
                    <a href="#contact" className="text-[11px] font-medium text-[#5B8EF5] hover:text-[#7AABFF] transition-colors"
                      onClick={() => fireContactIntent('Project Estimate')}>
                      Get a free estimate →
                    </a>
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <a key={link.name} href={link.href}
                data-testid={`link-nav-${link.name.toLowerCase()}`}
                className="text-sm font-medium text-white/50 hover:text-white/90 transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          <a href="#contact" data-testid="link-nav-book-call"
            onClick={() => fireContactIntent('Free Consultation')}>
            <Button variant="default" data-testid="button-nav-book-call"
              className="rounded-full px-5 py-1.5 h-auto text-sm font-medium bg-white text-black hover:bg-white/90">
              Free Consultation
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu" data-testid="button-mobile-menu-toggle">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0C0C10] border-b border-white/[0.06] py-6 px-6 flex flex-col gap-4 shadow-2xl">
          <div>
            <p className="text-[11px] font-semibold text-white/30 uppercase tracking-widest mb-3">Services</p>
            <div className="flex flex-col gap-1">
              {serviceItems.map((s) => (
                <a key={s.title} href="#pricing"
                  data-testid={`link-mobile-service-${s.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-center gap-3 py-2 text-[14px] text-white/60 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}>
                  <s.icon size={14} className="text-[#5B8EF5] flex-shrink-0" />
                  {s.title}
                </a>
              ))}
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} className="pt-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href}
                data-testid={`link-mobile-nav-${link.name.toLowerCase()}`}
                className="text-lg font-medium text-white hover:text-white/80 transition-colors"
                onClick={() => setMobileMenuOpen(false)}>
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={() => { setMobileMenuOpen(false); fireContactIntent('Free Consultation'); }}
              data-testid="link-mobile-nav-book-call">
              <Button data-testid="button-mobile-nav-book-call"
                className="w-full rounded-full bg-white text-black hover:bg-white/90">Free Consultation</Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
