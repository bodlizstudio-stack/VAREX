import React from 'react';
import { Target, Award, Wrench, Shield, Check } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="o-nas" className="py-24 bg-[#12141C] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#FF5E00]/30 shadow-2xl">
              <img 
                src="/welding_spark_craft.jpg" 
                alt="O podjetju VAREX" 
                className="w-full h-[480px] object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12141C] via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#181B26]/90 backdrop-blur-md border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-[#FF5E00] font-bold text-sm">
                  <Award className="w-5 h-5" />
                  <span>VAREX Standard Kakovosti</span>
                </div>
                <p className="text-xs text-slate-300">
                  Uporabljamo le visoko kakovostno certificirano jeklo ter napredne postopke varjenja TIG in MIG za najvišjo življenjsko dobo.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Mission & Company Info */}
          <div className="lg:col-span-7 space-y-6">
            <span className="badge-orange">O Podjetju VAREX</span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Vaš Zanesljiv Partner za Kovinarstvo in Varjenje po Meri
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Podjetje <strong className="text-white">VAREX</strong> je sinonim za natančnost, hitrost in tehnično perfekcijo pri izdelavi kovinskih konstrukcij. 
              Zavedamo se, da je nadstrešek ali pergola dolgoročna investicija v vaš dom, zato pri vsakem projektu zagotavljamo 
              brezkompromisno kakovost materialov in storitev.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="p-5 rounded-2xl bg-[#181B26] border border-slate-800 space-y-2">
                <div className="p-2.5 rounded-lg bg-[#FF5E00]/10 text-[#FF5E00] w-fit">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">Naša Misija</h3>
                <p className="text-xs text-slate-400">
                  Zagotavljati strankam v Ljubljani in širši regiji trajne kovinske rešitve, narejene 100% po meri in brez zamud pri izvedbi.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#181B26] border border-slate-800 space-y-2">
                <div className="p-2.5 rounded-lg bg-[#FF5E00]/10 text-[#FF5E00] w-fit">
                  <Wrench className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">Vrhunska Tehnologija</h3>
                <p className="text-xs text-slate-400">
                  Uporaba CNC razreza, laserskega preoblikovanja ter vroče antikorozijske cinkalne zaščite z mat prašnim lakiranjem.
                </p>
              </div>
            </div>

            {/* Checklist */}
            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <Check className="w-5 h-5 text-[#FF5E00]" />
                <span>Osebni pristop: Izmera in strokovno svetovanje neposredno na vaši lokaciji.</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <Check className="w-5 h-5 text-[#FF5E00]" />
                <span>Hitra odzivnost: Informativno ponudbo pripravimo v najkrajšem možnem času.</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <Check className="w-5 h-5 text-[#FF5E00]" />
                <span>Popolna storitev: Od idejne zasnove do natančne končne montaže.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
