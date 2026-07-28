import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

const faqItems = [
  {
    q: 'Kako poteka postopek naročila kovinskega nadstreška ali pergole?',
    a: 'Postopek je preprost in pregleden: 1. Pošljete nam povpraševanje (preko obrazca ali telefona). 2. Pripravimo okvirno ponudbo. 3. Opravimo natančno izmero na vaši lokaciji. 4. Izdelamo konstrukcijo v delavnici in poskrbimo za strokovno montažo.'
  },
  {
    q: 'Zakaj cene niso javno objavljene na spletni strani?',
    a: 'Vsi naši izdelki (nadstreški, pergole, ograje in varilna dela) so narejeni 100% po meri in željah naročnika. Cena je odvisna od natančnih dimenzij, izbire materialov (npr. pocinkano jeklo, inox, kaljeno steklo), zahtevnosti terena in dodatkov (LED osvetlitev, ZIP rolete). Za vsako stranko pripravimo prilagojeno ponudbo.'
  },
  {
    q: 'Kakšen je povprečen rok dobave in montaže?',
    a: 'Rok izvedbe je odvisen od obsega projekta, običajno pa od potrditve naročila do končne montaže preteče med 3 in 6 tednov. Vedno se držimo vnaprej dogovorjenih rokov.'
  },
  {
    q: 'Ali nudite izmero in svetovanje na terenu?',
    a: 'Da! Vsem našim strankam v Ljubljani in okolici (v radiju 30km+) nudimo možnost strokovne izmere ter tehničnega svetovanja neposredno na objektu.'
  },
  {
    q: 'Kako so kovinske konstrukcije zaščitene pred rjo?',
    a: 'Uporabljamo najvišje standarde zaščite: vroče cinkanje, ki jeklo zaščiti pred korozijo za več desetletij, nato pa sledi fino peskanje in prašno barvanje (pečenje barve v peči) v poljubnem RAL odtenku po vaši izbiri.'
  },
  {
    q: 'Kakšno garancijo nudite na svoje izdelke?',
    a: 'Na konstrukcijo in antikorozijsko zaščito nudimo do 10 let garancije, na izvedbo montaže in mehanske elemente pa standardno garancijo z zagotovljenim servisom.'
  }
];

export default function FAQ({ onOpenQuoteModal }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 bg-[#12141C] relative border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="badge-orange">Pogosta Vprašanja</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Vse, kar morate vedeti pred Naročilom
          </h2>
          <p className="text-slate-400 text-base">
            Tukaj so odgovori na najpogostejša vprašanja naših strank. Imate specifično vprašanje? Kontaktirajte nas!
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? 'bg-[#181B26] border-[#FF5E00]/50 shadow-lg' 
                    : 'bg-[#141722]/80 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-lg text-white"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? 'text-[#FF5E00]' : 'text-slate-500'}`} />
                    {item.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-[#FF5E00] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-slate-300 text-sm leading-relaxed border-t border-slate-800/60 mt-2 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Ask Question Card */}
        <div className="p-8 rounded-3xl bg-[#181B26] border border-[#FF5E00]/30 text-center space-y-4 shadow-xl">
          <MessageSquare className="w-10 h-10 text-[#FF5E00] mx-auto" />
          <h3 className="text-xl font-bold text-white">Niste našli odgovora na vaše vprašanje?</h3>
          <p className="text-sm text-slate-300 max-w-lg mx-auto">
            Pokličite naše strokovnjake na <strong className="text-white">040 123 456</strong> ali nam pošljite kratko sporočilo.
          </p>
          <button 
            onClick={onOpenQuoteModal}
            className="btn-primary text-sm font-bold inline-flex items-center gap-2"
          >
            Pošljite Vprašanje ali Povpraševanje
          </button>
        </div>

      </div>
    </section>
  );
}
