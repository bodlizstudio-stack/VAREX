import React, { useState } from 'react';
import { Play, Sparkles, CheckCircle, ShieldCheck } from 'lucide-react';

export default function VideoShowcase({ onOpenVideoModal }) {
  return (
    <section className="py-20 bg-[#0B0C10] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#12141C] border border-[#FF5E00]/30 rounded-3xl p-8 lg:p-12 relative overflow-hidden shadow-2xl">
          
          {/* Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FF5E00]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Description */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5E00]/15 text-[#FF5E00] text-xs font-bold uppercase">
                <Sparkles className="w-4 h-4" />
                <span>Predstavitev Kakovosti</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Poglejte si Natančnost in Strast pri Delu
              </h2>

              <p className="text-slate-300 text-base leading-relaxed">
                Pri VAREX-u ne delamo kompromisov. Vsak zvar, vsak nosilec in vsak detajl 
                je natančno obdelan v naši delavnici z najsodobnejšo tehnologijo varjenja in preoblikovanja kovin.
              </p>

              <div className="space-y-3 pt-2 text-sm text-slate-200">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#FF5E00]" />
                  <span>Laserski razrez in CNC upogibanje jeklenih profilov</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#FF5E00]" />
                  <span>Dvojna antikorozijska zaščita (vroče cinkanje + prašno lakiranje)</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#FF5E00]" />
                  <span>Stroga kontrola varilnih spojev (TIG/MIG certifikati)</span>
                </div>
              </div>

              <div className="pt-4">
                <button 
                  onClick={onOpenVideoModal}
                  className="btn-primary text-base font-bold py-3.5 px-7"
                >
                  <Play className="w-5 h-5 fill-current" />
                  <span>Oglejte si Video Predstavitev</span>
                </button>
              </div>
            </div>

            {/* Right Video Thumbnail Container */}
            <div className="lg:col-span-6">
              <div 
                onClick={onOpenVideoModal}
                className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl cursor-pointer group h-80 sm:h-96"
              >
                <img 
                  src="/thumbnail.jpeg?v=2" 
                  alt="VAREX Welding Showcase" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#FF5E00] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform border-4 border-white/20">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg text-xs font-semibold text-white border border-white/10">
                  ▶ Video prikaz delavnice (01:45 min)
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
