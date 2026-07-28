import React from 'react';
import { Phone, Mail, Send } from 'lucide-react';

export default function MobileCallBar({ onOpenQuoteModal }) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0B0C10]/95 backdrop-blur-md border-t border-[#FF5E00]/40 p-2.5 flex items-center gap-2 shadow-2xl">
      <a 
        href="tel:+38640123456" 
        className="flex-1 btn-call justify-center text-xs font-extrabold py-3 shadow-lg"
      >
        <Phone className="w-4 h-4" />
        <span>Pokličite zdaj</span>
      </a>

      <button 
        onClick={onOpenQuoteModal} 
        className="flex-1 btn-primary justify-center text-xs font-extrabold py-3 shadow-lg"
      >
        <Send className="w-4 h-4" />
        <span>Povpraševanje</span>
      </button>
    </div>
  );
}
