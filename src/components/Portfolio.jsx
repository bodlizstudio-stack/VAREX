import React, { useState } from 'react';
import { MapPin, Calendar, CheckCircle, ExternalLink, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Dvojni avtomobilski nadstrešek s shrambo',
    location: 'Ljubljana - Vič',
    date: 'Junij 2026',
    category: 'Nadstreški',
    image: '/nadstesek.png',
    description: 'Celovita izvedba toplo pocinkane jeklene konstrukcije z integrirano zaprto kovinsko shrambo za kolesa in orodje. Izvedeno v mat antracit odtenku (RAL 7016) z odvodnjavanjem.',
    specs: ['Pocinkano jeklo RAL 7016', 'Kaljeno varnostno steklo', 'Velikost: 6.2m x 5.8m', 'Skriti žlebovi in LED trakovi']
  },
  {
    id: 2,
    title: 'Bioklimatska kovinska pergola z LED osvetlitvijo',
    location: 'Brezovica pri Ljubljani',
    date: 'Maj 2026',
    category: 'Pergole',
    image: '/pergola_bioclimatic.jpg',
    description: 'Luksuzna terasna pergola z avtomatskim obračanjem lamel, ZIP senčili in dimabilno ambientalno LED osvetlitvijo za brezskrbno bivanje na terasi v vseh letnih časih.',
    specs: ['Aluminij & Jeklo', 'Motorizirane lamele', 'Avtomatika za dež in veter', 'Integrirane ZIP rolete']
  },
  {
    id: 3,
    title: 'Moderna dvoriščna ograja z drsnimi vrati',
    location: 'Domžale',
    date: 'April 2026',
    category: 'Ograje',
    images: ['/ograja.png', '/ograja1.png'],
    description: 'Unikatna ograja z lasersko izrezanimi kovinskimi paneli ter avtomatiziranimi drsnimi dvoriščnimi vrati na daljinsko upravljanje. Dvojna zaščita pred rjo.',
    specs: ['Laserski razrez panelov', 'Elektromotorni pogon vrata', 'Prašno barvano (Mat Črna)', 'Garancija 10 let']
  }
];

export default function Portfolio({ onSelectProjectQuote }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [projectImageIndices, setProjectImageIndices] = useState({});
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);

  return (
    <section id="reference" className="py-24 bg-[#0B0C10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="badge-orange">Naše Reference</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Izdelani Projekti v Ljubljani in Okolici
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Oglejte si nekatere izmed naših zadnjih vrhunskih izvedb kovinskih nadstreškov, pergol in ograj po meri.
          </p>
        </div>

        {/* 3 Featured Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <div 
              key={proj.id}
              className="bg-[#12141C] border border-slate-800 rounded-2xl overflow-hidden hover:border-[#FF5E00]/50 transition-all duration-300 group flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Image Container with Zoom hover */}
                <div className="relative h-64 overflow-hidden bg-slate-900 group/image">
                  <img 
                    src={proj.images ? proj.images[projectImageIndices[proj.id] || 0] : proj.image} 
                    alt={proj.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12141C] via-transparent to-transparent opacity-80" />

                  <span className="absolute top-3 left-3 bg-[#FF5E00] text-white text-xs font-bold px-3 py-1 rounded-md shadow">
                    {proj.category}
                  </span>

                  {/* Left / Right arrows for slider in card */}
                  {proj.images && proj.images.length > 1 && (
                    <>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          const len = proj.images.length;
                          const current = projectImageIndices[proj.id] || 0;
                          setProjectImageIndices(prev => ({
                            ...prev,
                            [proj.id]: (current - 1 + len) % len
                          }));
                        }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 text-white hover:bg-[#FF5E00] transition-colors z-10"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          const len = proj.images.length;
                          const current = projectImageIndices[proj.id] || 0;
                          setProjectImageIndices(prev => ({
                            ...prev,
                            [proj.id]: (current + 1) % len
                          }));
                        }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 text-white hover:bg-[#FF5E00] transition-colors z-10"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </>
                  )}

                  <button 
                    onClick={() => {
                      setSelectedImage(proj);
                      setLightboxImageIndex(projectImageIndices[proj.id] || 0);
                    }}
                    className="absolute top-3 right-3 p-2 rounded-lg bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#FF5E00] z-10"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Content Details */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#FF5E00]" />
                      {proj.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#FF5E00]" />
                      {proj.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#FF5E00] transition-colors leading-snug">
                    {proj.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {proj.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-800/80">
                    {proj.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle className="w-3.5 h-3.5 text-[#FF5E00]" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Action */}
              <div className="p-6 pt-0">
                <button 
                  onClick={() => onSelectProjectQuote(proj.title)}
                  className="w-full btn-secondary text-xs font-bold justify-center py-2.5"
                >
                  <span>Želim Podoben Projekt</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="max-w-4xl w-full bg-[#12141C] border border-[#FF5E00]/40 rounded-2xl overflow-hidden relative shadow-2xl space-y-4 p-6">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-800/80 rounded-full z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative">
              <img 
                src={selectedImage.images ? selectedImage.images[lightboxImageIndex] : selectedImage.image} 
                alt={selectedImage.title} 
                className="w-full h-96 object-cover rounded-xl border border-white/10" 
              />

              {/* Left / Right arrows for slider in Lightbox */}
              {selectedImage.images && selectedImage.images.length > 1 && (
                <>
                  <button 
                    onClick={() => {
                      const len = selectedImage.images.length;
                      const nextIdx = (lightboxImageIndex - 1 + len) % len;
                      setLightboxImageIndex(nextIdx);
                      setProjectImageIndices(prev => ({
                        ...prev,
                        [selectedImage.id]: nextIdx
                      }));
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 text-white hover:bg-[#FF5E00] transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={() => {
                      const len = selectedImage.images.length;
                      const nextIdx = (lightboxImageIndex + 1) % len;
                      setLightboxImageIndex(nextIdx);
                      setProjectImageIndices(prev => ({
                        ...prev,
                        [selectedImage.id]: nextIdx
                      }));
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 text-white hover:bg-[#FF5E00] transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            <div className="space-y-2">
              <div className="text-xs text-[#FF5E00] font-bold uppercase">{selectedImage.location} • {selectedImage.date}</div>
              <h3 className="text-2xl font-bold text-white">{selectedImage.title}</h3>
              <p className="text-sm text-slate-300">{selectedImage.description}</p>
            </div>

            <div className="flex justify-end pt-4">
              <button 
                onClick={() => {
                  const title = selectedImage.title;
                  setSelectedImage(null);
                  onSelectProjectQuote(title);
                }}
                className="btn-primary text-sm font-bold"
              >
                Povpraševanje za ta tip projekta
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
