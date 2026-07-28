import React, { useState } from 'react';
import { Phone, Mail, Menu, X, ShieldCheck, MapPin } from 'lucide-react';

export default function Navbar({ onOpenQuoteModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0B0C10]/90 backdrop-blur-md border-b border-slate-800/80 transition-all">
      {/* Top Announcement & Click-to-Call Bar */}
      <div className="bg-[#12141C] border-b border-white/5 py-1.5 px-4 text-xs font-medium text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#FF5E00]" />
              Ljubljana &amp; okolica (30km+ radij)
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              100% Garancija na izvedbo &amp; Natančnost
            </span>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <a 
              href="mailto:info@varex.si" 
              className="flex items-center gap-1.5 hover:text-[#FF5E00] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#FF5E00]" />
              info@varex.si
            </a>
            <a 
              href="tel:+38640123456" 
              className="flex items-center gap-1.5 font-bold text-white hover:text-[#FF5E00] transition-colors bg-[#FF5E00]/10 px-2.5 py-0.5 rounded border border-[#FF5E00]/30"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF5E00]" />
              040 123 456
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#domov" className="flex items-center gap-3 group">
          <img 
            src="/logo.png" 
            alt="VAREX Logo" 
            className="h-11 w-auto object-contain transition-transform group-hover:scale-105" 
          />
          <div className="flex flex-col">
            <span className="font-extrabold text-2xl tracking-wider text-white group-hover:text-[#FF5E00] transition-colors">
              VAREX
            </span>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest -mt-1 font-semibold">
              Kovinstvo po meri
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 font-semibold text-sm text-slate-300">
          <a href="#domov" className="hover:text-[#FF5E00] transition-colors">Začetna</a>
          <a href="#storitve" className="hover:text-[#FF5E00] transition-colors">Storitve</a>
          <a href="#o-nas" className="hover:text-[#FF5E00] transition-colors">O nas</a>
          <a href="#reference" className="hover:text-[#FF5E00] transition-colors">Reference</a>
          <a href="#faq" className="hover:text-[#FF5E00] transition-colors">FAQ</a>
          <a href="#kontakt" className="hover:text-[#FF5E00] transition-colors">Kontakt</a>
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <button 
            onClick={onOpenQuoteModal} 
            className="btn-primary text-sm font-bold shadow-lg"
          >
            <span>Brezplačno Povpraševanje</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#FF5E00]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#12141C] border-b border-slate-800 px-4 py-6 space-y-4 text-center">
          <a href="#domov" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-200 font-medium hover:text-[#FF5E00]">Začetna</a>
          <a href="#storitve" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-200 font-medium hover:text-[#FF5E00]">Storitve</a>
          <a href="#o-nas" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-200 font-medium hover:text-[#FF5E00]">O nas</a>
          <a href="#reference" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-200 font-medium hover:text-[#FF5E00]">Reference</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-200 font-medium hover:text-[#FF5E00]">FAQ</a>
          <a href="#kontakt" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-200 font-medium hover:text-[#FF5E00]">Kontakt</a>
          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenQuoteModal(); }} 
            className="w-full btn-primary justify-center mt-4"
          >
            Brezplačno Povpraševanje
          </button>
        </div>
      )}
    </header>
  );
}
