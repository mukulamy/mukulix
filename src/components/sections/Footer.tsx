import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_URL = "https://wa.me/919599161403";

export default function Footer() {
  return (
    <footer className="bg-[#0C0C10] border-t border-white/[0.06] py-10">
      <div className="container px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
          <div>
            <a href="#" className="text-lg font-semibold tracking-tight text-white">
              Mukul<span className="text-blue-500">ix</span>
            </a>
            <p className="text-[12px] text-white/25 mt-1.5 max-w-xs leading-relaxed">
              Custom software for businesses that need to move fast and build right.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <div>
              <p className="text-[10px] text-white/20 uppercase tracking-widest mb-2">Company</p>
              <div className="flex flex-col gap-1.5">
                <a href="#founder" className="text-[12px] text-white/35 hover:text-white transition-colors">About</a>
                <a href="#projects" className="text-[12px] text-white/35 hover:text-white transition-colors">Case Studies</a>
                <a href="#process" className="text-[12px] text-white/35 hover:text-white transition-colors">Process</a>
              </div>
            </div>
            <div>
              <p className="text-[10px] text-white/20 uppercase tracking-widest mb-2">Services</p>
              <div className="flex flex-col gap-1.5">
                <a href="#services" className="text-[12px] text-white/35 hover:text-white transition-colors">Web Development</a>
                <a href="#services" className="text-[12px] text-white/35 hover:text-white transition-colors">Mobile Apps</a>
                <a href="#services" className="text-[12px] text-white/35 hover:text-white transition-colors">Business Systems</a>
              </div>
            </div>
            <div>
              <p className="text-[10px] text-white/20 uppercase tracking-widest mb-2">Contact</p>
              <div className="flex flex-col gap-1.5">
                <a href="#contact" className="text-[12px] text-white/35 hover:text-white transition-colors">Get a Quote</a>
                <a href="#pricing" className="text-[12px] text-white/35 hover:text-white transition-colors">Pricing</a>
                <a href="#faq" className="text-[12px] text-white/35 hover:text-white transition-colors">FAQ</a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/20">© 2025 Mukulix. All rights reserved.</p>
          <div className="flex gap-4 text-white/25">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaGithub size={15} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaLinkedin size={15} /></a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaWhatsapp size={15} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
