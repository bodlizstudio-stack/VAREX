import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock, CheckCircle2, ShieldCheck, Paperclip } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactForm({ presetService, onCloseModal }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    service: presetService || 'Nadstreški po meri',
    message: '',
    gdpr: true
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Trigger celebratory confetti effect
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {}

    // Simulated Analytics Event
    if (window.gtag) {
      window.gtag('event', 'generate_lead', {
        event_category: 'contact_form',
        event_label: formData.service
      });
    }
  };

  return (
    <section id="kontakt" className="py-24 bg-[#0B0C10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="badge-orange">Hitro Povpraševanje</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Kontaktirajte Nas za Brezplačno Ponudbo
          </h2>
          <p className="text-slate-400 text-base">
            Izpolnite spodnji obrazec ali nas pokličite direktno. Odgovorili vam bomo v najkrajšem možnem času.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-8 bg-[#12141C] border border-slate-800 rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white">Direktni Kontakti</h3>

            <div className="space-y-6">
              {/* Phone */}
              <a 
                href="tel:+38640123456" 
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#181B26] border border-[#FF5E00]/30 hover:border-[#FF5E00] transition-all group"
              >
                <div className="p-3.5 rounded-xl bg-[#FF5E00] text-white shadow-lg shadow-[#FF5E00]/30">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase">Pokličite Nas Takoj</div>
                  <div className="text-xl font-extrabold text-white group-hover:text-[#FF5E00] transition-colors">
                    040 123 456
                  </div>
                  <div className="text-[11px] text-emerald-400 font-medium">Kliknite za klic na mobilni napravi</div>
                </div>
              </a>

              {/* Email */}
              <a 
                href="mailto:info@varex.si" 
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#181B26] border border-slate-800 hover:border-slate-700 transition-all group"
              >
                <div className="p-3.5 rounded-xl bg-slate-800 text-[#FF5E00]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase">Pošljite E-pošto</div>
                  <div className="text-base font-bold text-white group-hover:text-[#FF5E00] transition-colors">
                    info@varex.si
                  </div>
                  <div className="text-[11px] text-slate-400">Za načrte in tehnične risbe</div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#181B26] border border-slate-800">
                <div className="p-3.5 rounded-xl bg-slate-800 text-[#FF5E00]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase">Sedež in Območje</div>
                  <div className="text-sm font-bold text-white">Ljubljana &amp; okolica (Radij 30km+)</div>
                  <div className="text-[11px] text-slate-400">Domžale, Kamnik, Kranj, Vrhnika...</div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#181B26] border border-slate-800">
                <div className="p-3.5 rounded-xl bg-slate-800 text-[#FF5E00]">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase">Delovni Čas</div>
                  <div className="text-sm font-bold text-white">Pon - Pet: 07:00 - 17:00</div>
                  <div className="text-[11px] text-slate-400">Sobota: Po dogovoru</div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#FF5E00]/10 border border-[#FF5E00]/20 flex items-center gap-3 text-xs text-slate-300">
              <ShieldCheck className="w-5 h-5 text-[#FF5E00] shrink-0" />
              <span>Vsi podatki so strogo zaupni in se uporabijo izključno za pripravo ponudbe.</span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#12141C] border border-[#FF5E00]/30 rounded-3xl p-8 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-500">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-extrabold text-white">Povpraševanje Uspešno Poslano!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                  Zahvaljujemo se vam za vašo ponudbo za <strong className="text-[#FF5E00]">{formData.service}</strong>. 
                  Naša ekipa pregleduje vaše podatke in vas bo kontaktirala v najkrajšem možnem času.
                </p>
                <div className="pt-4">
                  <button 
                    onClick={() => { setSubmitted(false); if (onCloseModal) onCloseModal(); }}
                    className="btn-primary text-sm font-bold"
                  >
                    Oddaj Novo Povpraševanje
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                  <h3 className="text-xl font-bold text-white">Obrazec za Ponudbo</h3>
                  <span className="text-xs text-[#FF5E00] font-semibold">* Vsa polja so obvezna</span>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-slate-300">Ime in Priimek *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="npr. Janez Novak"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-[#181B26] border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#FF5E00]"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-slate-300">Telefonska Številka *</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="npr. 040 123 456"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-[#181B26] border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#FF5E00]"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-slate-300">E-poštni Naslov *</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="janez@domena.si"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-[#181B26] border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#FF5E00]"
                    />
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-slate-300">Lokacija Projekta (Kraj)</label>
                    <input 
                      type="text" 
                      placeholder="npr. Ljubljana - Vič"
                      value={formData.location}
                      onChange={e => setFormData({...formData, location: e.target.value})}
                      className="w-full bg-[#181B26] border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#FF5E00]"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-300">Izberite Storitev</label>
                  <select 
                    value={formData.service}
                    onChange={e => setFormData({...formData, service: e.target.value})}
                    className="w-full bg-[#181B26] border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#FF5E00]"
                  >
                    <option value="Nadstreški po meri">Kovinski Nadstrešek za avto ali teraso</option>
                    <option value="Bioklimatska Pergola">Moderna Bioklimatska Kovinska Pergola</option>
                    <option value="Kovinske in Inox Ograje">Dvoriščna ali Balkonska Ograja po meri</option>
                    <option value="Varilna Dela in Konstrukcije">Varjenje TIG/MIG &amp; Kovinske Konstrukcije</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-300">Opis Projekta in Dimenzije</label>
                  <textarea 
                    rows="4" 
                    placeholder="Zapišite okvirne dimenzije (npr. 6m x 4m), posebne želje glede barve ali kritine..."
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-[#181B26] border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#FF5E00]"
                  />
                </div>

                {/* Simulated File Attachment */}
                <div className="p-3 rounded-xl bg-[#181B26] border border-dashed border-slate-700 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-2">
                    <Paperclip className="w-4 h-4 text-[#FF5E00]" />
                    <span>Priložite skico ali sliko terena (opcijsko)</span>
                  </span>
                  <input type="file" className="text-[10px] text-slate-400 file:bg-[#FF5E00]/20 file:text-[#FF5E00] file:border-0 file:rounded-lg file:px-2 file:py-1 cursor-pointer" />
                </div>

                {/* GDPR Checkbox */}
                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    id="gdpr" 
                    required 
                    checked={formData.gdpr}
                    onChange={e => setFormData({...formData, gdpr: e.target.checked})}
                    className="mt-1 accent-[#FF5E00]" 
                  />
                  <label htmlFor="gdpr" className="text-xs text-slate-400">
                    Strinjam se s shranjevanjem osebnih podatkov za namen priprave neobvezujoče ponudbe.
                  </label>
                </div>

                {/* Submit button */}
                <button type="submit" className="w-full btn-primary justify-center font-bold py-4 text-base shadow-xl">
                  <Send className="w-5 h-5" />
                  <span>Pošljite Povpraševanje</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
