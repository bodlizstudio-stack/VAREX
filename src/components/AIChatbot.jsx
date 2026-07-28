import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, User, PhoneCall, Sparkles } from 'lucide-react';

const presetBotAnswers = {
  'cene': 'Vse cene pri VAREX-u so oblikovane 100% po meri glede na dimenzije in specifikacije materialov. Pošljite nam povpraševanje ali pa nas pokličite na 040 123 456 za natančen izračun!',
  'izmera': 'Brezplačno izmero na terenu izvajamo na območju Ljubljane in okolice (30km+ radij). Želite, da vas pokličemo in se dogovorimo za termin?',
  'rok': 'Rok izvedbe je običajno med 3 in 6 tednov od potrditve skice in izbire materialov.',
  'nadstreski': 'Izdelujemo jeklene nadstreške z antikorozijskim pocinkanjem in prašnim lakiranjem. Kritina je lahko kaljeno steklo, polikarbonat ali izolativni paneli.',
  'pergole': 'Naše bioklimatske kovinske pergole omogočajo avtomatsko obračanje lamel, LED osvetlitev ter integrirane ZIP rolete pred vetrom.',
  'ograje': 'Izdelujemo dvoriščne in balkonske ograje z laserskim izrezom vzorcev ter avtomatska drsna vrata na daljinski pogon.',
  'kontakt': 'Lahko nas pokličete direktno na 040 123 456 ali pišete na info@varex.si.'
};

export default function AIChatbot({ onOpenQuoteModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Pozdravljeni! Sem VAREX AI Asistent ⚡ Kako vam lahko pomagam pri izbiri nadstreška, pergole ali ograje?'
    }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    // Append User Message
    const newMessages = [...messages, { sender: 'user', text: query }];
    setMessages(newMessages);
    if (!textToSend) setInput('');

    // Generate AI response based on keywords
    setTimeout(() => {
      let responseText = 'Hvala za vaše vprašanje! Za podrobne tehnične informacije ali izmero nas lahko pokličete na 040 123 456 ali oddate povpraševanje.';
      const lower = query.toLowerCase();

      if (lower.includes('cen') || lower.includes('košt') || lower.includes('plač')) {
        responseText = presetBotAnswers['cene'];
      } else if (lower.includes('izmer') || lower.includes('teren') || lower.includes('obisk')) {
        responseText = presetBotAnswers['izmera'];
      } else if (lower.includes('rok') || lower.includes('čas') || lower.includes('dneva')) {
        responseText = presetBotAnswers['rok'];
      } else if (lower.includes('nadstreš') || lower.includes('avto')) {
        responseText = presetBotAnswers['nadstreski'];
      } else if (lower.includes('pergol') || lower.includes('terasa')) {
        responseText = presetBotAnswers['pergole'];
      } else if (lower.includes('ograj') || lower.includes('vrata')) {
        responseText = presetBotAnswers['ograje'];
      } else if (lower.includes('kontakt') || lower.includes('telefon') || lower.includes('mail')) {
        responseText = presetBotAnswers['kontakt'];
      }

      setMessages(prev => [...prev, { sender: 'bot', text: responseText }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Trigger Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="relative group p-4 rounded-full bg-[#FF5E00] text-white shadow-2xl hover:scale-110 transition-all border-2 border-white/20 flex items-center gap-3"
        >
          <Sparkles className="w-6 h-6 animate-pulse" />
          <span className="hidden sm:inline font-bold text-sm pr-1">VAREX Asistent</span>
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-[#0B0C10]" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 sm:w-96 bg-[#12141C] border border-[#FF5E00]/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[480px]">
          
          {/* Header */}
          <div className="bg-[#181B26] p-4 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[#FF5E00] text-white">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">VAREX AI Asistent</h4>
                <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-semibold">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
                  Na voljo 24/7 za vprašanja
                </span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 text-slate-400 hover:text-white rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Filter Suggestion Badges */}
          <div className="bg-[#0B0C10] p-2 flex gap-1.5 overflow-x-auto border-b border-slate-800 text-[11px]">
            <button onClick={() => handleSend('Kakšne so cene?')} className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 whitespace-nowrap hover:bg-[#FF5E00]/20 hover:text-[#FF5E00]">
              💰 Cene &amp; Ponudba
            </button>
            <button onClick={() => handleSend('Kako poteka izmera?')} className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 whitespace-nowrap hover:bg-[#FF5E00]/20 hover:text-[#FF5E00]">
              📐 Izmera na terenu
            </button>
            <button onClick={() => handleSend('Kovinski nadstreški')} className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 whitespace-nowrap hover:bg-[#FF5E00]/20 hover:text-[#FF5E00]">
              🚗 Nadstreški
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#0B0C10]/50 text-xs">
            {messages.map((msg, idx) => (
              <div 
                key={idx}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-lg bg-[#FF5E00]/20 text-[#FF5E00] flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                )}
                <div 
                  className={`p-3 rounded-2xl max-w-[80%] leading-relaxed ${
                    msg.sender === 'user' 
                      ? 'bg-[#FF5E00] text-white font-medium rounded-tr-none' 
                      : 'bg-[#181B26] text-slate-200 border border-slate-800 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Call Action Inside Chat */}
          <div className="p-2 bg-[#181B26] border-t border-slate-800 flex items-center justify-between text-xs px-4">
            <a href="tel:+38640123456" className="text-[#FF5E00] font-bold flex items-center gap-1 hover:underline">
              <PhoneCall className="w-3.5 h-3.5" /> Pokličite: 040 123 456
            </a>
            <button 
              onClick={() => { setIsOpen(false); onOpenQuoteModal(); }} 
              className="text-slate-300 font-medium hover:text-white underline text-[11px]"
            >
              Oddaj povpraševanje
            </button>
          </div>

          {/* Input Box */}
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className="p-3 bg-[#12141C] border-t border-slate-800 flex gap-2"
          >
            <input 
              type="text" 
              placeholder="Napišite vprašanje..."
              value={input}
              onChange={e => setInput(e.target.value)}
              className="flex-1 bg-[#181B26] border border-slate-800 rounded-xl px-3 py-2 text-white text-xs focus:outline-none focus:border-[#FF5E00]"
            />
            <button 
              type="submit" 
              className="p-2.5 rounded-xl bg-[#FF5E00] text-white hover:bg-[#FF7722]"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </div>
  );
}
