import React from 'react';
import { Shield, Zap, Clock, ArrowRight, Phone, Play, CheckCircle2 } from 'lucide-react';

export default function Hero({ onOpenQuoteModal, onOpenVideoModal }) {
  return (
    <section id="domov" className="relative min-h-[88vh] flex items-center justify-center overflow-hidden pt-12 pb-20 bg-[#0B0C10]">
      {/* Dynamic Background Spark Glowing Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF5E00]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FFAA00]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column - Copywriting & Call to Action */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5E00]/15 border border-[#FF5E00]/30 text-[#FF5E00] text-xs font-bold uppercase tracking-wider">
            <Zap className="w-4 h-4 text-[#FFAA00] animate-pulse" />
            <span>Vodilni kovinar v Ljubljani &amp; okolici</span>
          </div>

          {/* Main H1 Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
            Vrhunski Kovinski <br className="hidden sm:block" />
            <span className="gradient-spark-text">Nadstreški, Pergole</span> <br />
            in Varjenje po Meri
          </h1>

          {/* Subheadline Copy */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
            Iščete ultimativno zanesljivost, vrhunsko natančnost in hitro izvedbo? 
            Izdelujemo unikatne kovinske konstrukcije, avtomobilske nadstreške, modernne pergole 
            in ograje z dolgo življenjsko dobo.
          </p>

          {/* Key USP Checklist */}
          <div className="grid sm:grid-cols-2 gap-3 pt-2 text-sm font-semibold text-slate-200">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#FF5E00] shrink-0" />
              <span>Brezplačna izmera in svetovanje na terenu</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#FF5E00] shrink-0" />
              <span>Pripravljeno v dogovorjenem roku (100% zanesljivo)</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#FF5E00] shrink-0" />
              <span>Vrhunsko TIG &amp; MIG varjenje ter antikorozija</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#FF5E00] shrink-0" />
              <span>Garancija in certificirani materiali</span>
            </div>
          </div>

          {/* Hero CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button 
              onClick={onOpenQuoteModal} 
              className="btn-primary text-base font-bold px-8 py-4 text-white shadow-xl flex items-center gap-3"
            >
              <span>Pridobite Brezplačno Ponudbo</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a 
              href="tel:+38640123456" 
              className="btn-secondary text-base font-semibold px-6 py-4 flex items-center gap-3"
            >
              <Phone className="w-5 h-5 text-[#FF5E00]" />
              <span>Pokličite: 040 123 456</span>
            </a>
          </div>

          {/* Clean USP Checklist */}
          <div className="pt-8 border-t border-slate-800/80 flex flex-wrap gap-x-8 gap-y-4 text-sm font-semibold text-slate-300">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#FF5E00] shrink-0" />
              <span>100% spoštovanje rokov</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#FF5E00] shrink-0" />
              <span>Profesionalna montaža</span>
            </div>
          </div>
        </div>

        {/* Right Column - Hero Visual Media & Video Trigger */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden border border-[#FF5E00]/30 shadow-2xl group">
            <img 
              src="/welding_spark_craft.jpg" 
              alt="VAREX Natančno Varjenje" 
              className="w-full h-[460px] object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-transparent to-transparent opacity-90" />

            {/* Video Play Modal Trigger */}
            <button 
              onClick={onOpenVideoModal}
              className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-[#FF5E00]/90 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all border-4 border-white/20 group-hover:bg-[#FF5E00]"
            >
              <Play className="w-8 h-8 fill-current ml-1" />
            </button>

            {/* Floating Card */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#12141C]/90 backdrop-blur-md border border-white/10 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-[#FF5E00]/20 text-[#FF5E00]">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Certificirano Kovinarstvo</div>
                <div className="text-xs text-slate-400">Najvišji standardi kakovosti in varjenja po meri</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
