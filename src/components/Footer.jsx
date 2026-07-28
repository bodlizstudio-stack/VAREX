import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer({ onOpenLegal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080B] text-slate-400 border-t border-slate-800 pt-16 pb-24 md:pb-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="VAREX Logo" className="h-10 w-auto object-contain" />
              <span className="text-2xl font-extrabold text-white tracking-wider">VAREX</span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Vrhunska izdelava kovinskih nadstreškov, modernih pergol, ograj in profesionalno varjenje po meri. Zanesljiva izvedba za stranke v Ljubljani in okolici (30km+).
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="p-2.5 rounded-xl bg-[#12141C] text-slate-300 hover:text-[#FF5E00] hover:bg-[#FF5E00]/10 border border-slate-800 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-xl bg-[#12141C] text-slate-300 hover:text-[#FF5E00] hover:bg-[#FF5E00]/10 border border-slate-800 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-xl bg-[#12141C] text-slate-300 hover:text-[#FF5E00] hover:bg-[#FF5E00]/10 border border-slate-800 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Storitve</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#storitve" className="hover:text-[#FF5E00]">Kovinski Nadstreški</a></li>
              <li><a href="#storitve" className="hover:text-[#FF5E00]">Moderne Pergole</a></li>
              <li><a href="#storitve" className="hover:text-[#FF5E00]">Kovinske &amp; Inox Ograje</a></li>
              <li><a href="#storitve" className="hover:text-[#FF5E00]">Varjenje Po Meri (TIG/MIG)</a></li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Navigacija</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#domov" className="hover:text-[#FF5E00]">Začetna Stran</a></li>
              <li><a href="#o-nas" className="hover:text-[#FF5E00]">O Podjetju</a></li>
              <li><a href="#reference" className="hover:text-[#FF5E00]">Reference in Projekti</a></li>
              <li><a href="#faq" className="hover:text-[#FF5E00]">Pogosta Vprašanja</a></li>
              <li><a href="#kontakt" className="hover:text-[#FF5E00]">Obrazec za Ponudbo</a></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Kontakt</h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FF5E00]" />
                <a href="tel:+38640123456" className="text-white font-bold hover:text-[#FF5E00]">040 123 456</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FF5E00]" />
                <a href="mailto:info@varex.si" className="hover:text-[#FF5E00]">info@varex.si</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF5E00]" />
                <span>Ljubljana + 30km radij</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & legal */}
        <div className="flex flex-wrap justify-between items-center gap-4 text-xs">
          <div>
            &copy; {new Date().getFullYear()} VAREX Kovinarstvo po meri. Vse pravice pridržane.
          </div>

          <div className="flex items-center gap-6">
            <button onClick={() => onOpenLegal('privacy')} className="hover:text-white underline">
              Zasebnost (GDPR)
            </button>
            <button onClick={() => onOpenLegal('cookies')} className="hover:text-white underline">
              Piškotki &amp; Sledenje
            </button>
            <button 
              onClick={scrollToTop} 
              className="p-2 rounded-lg bg-[#12141C] text-slate-300 hover:text-[#FF5E00] border border-slate-800"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
