import React, { useState } from 'react';
import { Home, Layers, Shield, Wrench, ArrowRight, CheckCircle } from 'lucide-react';

const servicesData = [
  {
    id: 'nadstreski',
    title: 'Kovinski Nadstreški po Meri',
    badge: 'Najbolj Priljubljeno',
    icon: Home,
    image: '/carport_modern.jpg',
    description: 'Trajni in sodobni jekleni nadstreški za avtomobile, terase ali vhodne objekte. Odporni na vremenske vplive z antikorozijsko zaščito in prašnim lakiranjem.',
    features: [
      'Toplo pocinkana jeklena konstrukcija',
      'Izbira kritine (kaljeno steklo, polikarbonat, sendvič paneli)',
      'Skriti odtoki vode in LED osvetlitev',
      'Prilagodljive dimenzije 100% po vaših željah'
    ]
  },
  {
    id: 'pergole',
    title: 'Moderne Kovinske Pergole',
    badge: 'Premium Dizajn',
    icon: Layers,
    image: '/pergola_bioclimatic.jpg',
    description: 'Ustvarite popoln zunanji prostor za sprostitev. Bioklimatske in kovinske pergole z rotirajočimi lamelami omogočajo senco poleti ter zaščito pred dežjem.',
    features: [
      'Prilagodljive motorizirane lamele',
      'Integrirane ZIP rolete in steklene stene',
      'Ambientalna dimabilna LED osvetlitev',
      'Minimalistični industrijski izgled v RAL barvah'
    ]
  },
  {
    id: 'ograje',
    title: 'Kovinske & Inox Ograje',
    badge: 'Varnost in Eleganca',
    icon: Shield,
    image: '/metal_fence_modern.jpg',
    description: 'Dvoriščne, balkonske in stopniščne kovinske ograje. Kombinacija vrhunske varnosti, estetske popolnosti in avtomatiziranih vrat po meri.',
    features: [
      'Lasersko izrezani vzorci in moderni profili',
      'Avtomatska drsna in krilna dvoriščna vrata',
      'Visoka antikorozijska odpornost',
      'Inox in prašno barvano jeklo'
    ]
  },
  {
    id: 'varjenje',
    title: 'Varjenje po Meri & Konstrukcije',
    badge: 'Natančna Izdelava',
    icon: Wrench,
    image: '/welding_spark_craft.jpg',
    description: 'Profesionalno TIG, MIG/MAG varjenje jekla, aluminija in inoxa. Izdelava nosilnih kovinskih konstrukcij, stopnic in industrijskih elementov.',
    features: [
      'Certificirani varilci z dolgoletnimi izkušnjami',
      'Varjenje Inox, aluminija in konstrukcijskega jekla',
      'Popravila in terenska montaža',
      'Natančne tolerance po načrtu'
    ]
  }
];

export default function Services({ onSelectService }) {
  const [activeTab, setActiveTab] = useState(servicesData[0].id);

  return (
    <section id="storitve" className="py-24 bg-[#12141C] relative border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="badge-orange">Storitve VAREX</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Vrhunska Kovinska Izdelava za Vaš Dom ali Posel
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Specializirani smo za 3 ključna področja: kovinske nadstreške, modernne pergole in kovinske ograje ter zahtevna varilna dela po meri.
          </p>
        </div>

        {/* Desktop Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          {/* Services Navigation List */}
          <div className="space-y-4">
            {servicesData.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`cursor-pointer p-6 rounded-2xl transition-all border ${
                    isActive 
                      ? 'bg-[#181B26] border-[#FF5E00] shadow-xl shadow-[#FF5E00]/10 scale-[1.02]' 
                      : 'bg-[#141722]/60 border-slate-800 hover:border-slate-700 hover:bg-[#181B26]/80'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-3.5 rounded-xl ${isActive ? 'bg-[#FF5E00] text-white' : 'bg-slate-800 text-slate-400'}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="text-xl font-bold text-white">{item.title}</h3>
                          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#FF5E00]/10 text-[#FF5E00] border border-[#FF5E00]/20">
                            {item.badge}
                          </span>
                        </div>
                        <p className="text-sm text-slate-400 mt-1 line-clamp-2">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Service Showcase Card */}
          {(() => {
            const current = servicesData.find(s => s.id === activeTab);
            return (
              <div className="bg-[#181B26] border border-[#FF5E00]/30 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6">
                <div className="relative rounded-2xl overflow-hidden h-64 border border-white/10">
                  <img 
                    src={current.image} 
                    alt={current.title} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181B26] via-transparent to-transparent opacity-80" />
                  <span className="absolute top-4 right-4 bg-[#FF5E00] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    VAREX Izvedba
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-extrabold text-white">{current.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{current.description}</p>
                </div>

                {/* Features List */}
                <div className="space-y-2.5 pt-2 border-t border-slate-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Prednosti in specifikacije:</h4>
                  {current.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-slate-200">
                      <CheckCircle className="w-4 h-4 text-[#FF5E00] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button 
                  onClick={() => onSelectService(current.title)} 
                  className="w-full btn-primary justify-center font-bold py-3.5 mt-4"
                >
                  <span>Zahtevaj Ponudbo za {current.title.split(' ')[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })()}

        </div>

      </div>
    </section>
  );
}
