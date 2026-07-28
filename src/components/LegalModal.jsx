import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

export default function LegalModal({ isOpen, onClose, type }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-[#12141C] border border-slate-800 rounded-3xl p-6 sm:p-8 relative max-h-[85vh] overflow-y-auto space-y-6 text-slate-300 text-sm">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-[#FF5E00]/20 text-[#FF5E00]">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              {type === 'privacy' ? 'Pravilnik o Zasebnosti (GDPR)' : 'Politika Piškotkov in Sledenja'}
            </h3>
            <span className="text-xs text-slate-400">Podjetje VAREX - Zadnja posodobitev 2026</span>
          </div>
        </div>

        {type === 'privacy' ? (
          <div className="space-y-4 text-xs leading-relaxed text-slate-300">
            <p>
              Pri podjetju <strong className="text-white">VAREX</strong> spoštujemo vašo zasebnost in varujemo vaše osebne podatke v skladu z Uredbo (EU) 2016/679 (GDPR) ter slovensko zakonodajo o varstvu osebnih podatkov.
            </p>
            <h4 className="font-bold text-white text-sm">1. Zbiranje podatkov</h4>
            <p>
              Osebne podatke (ime, telefonska številka, e-pošta, lokacija projekta), ki jih posredujete preko kontaktnega obrazca ali po telefonu, zbiramo izključno z namenom priprave neobvezujoče ponudbe ter izvedbe naročila.
            </p>
            <h4 className="font-bold text-white text-sm">2. Hramba in zaščita</h4>
            <p>
              Vaših podatkov ne posredujemo tretjim osebam. Podatki se hranijo varno in se izbrišejo po izpolnitvi namena ali na vašo zahtevo na info@varex.si.
            </p>
          </div>
        ) : (
          <div className="space-y-4 text-xs leading-relaxed text-slate-300">
            <p>
              Spletno mesto <strong className="text-white">VAREX</strong> uporablja piškotke za zagotavljanje boljšemu delovanju spletne strani, analitiko obiska (Google Analytics) ter optimizacijo oglasnih kampanj (Google Ads).
            </p>
            <h4 className="font-bold text-white text-sm">Vrste piškotkov:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Nujni piškotki:</strong> Omogočajo pomanjkljivo delovanje strani in varnost.</li>
              <li><strong>Analitični piškotki:</strong> Google Analytics sledenje za izboljšavo uporabniške izkušnje.</li>
              <li><strong>Marketinški piškotki:</strong> Merjenje konverzij povpraševanj in telefonskih klicev.</li>
            </ul>
          </div>
        )}

        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button onClick={onClose} className="btn-primary text-xs font-bold px-6">
            Razumem
          </button>
        </div>

      </div>
    </div>
  );
}
