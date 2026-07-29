import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import VideoShowcase from './components/VideoShowcase';
import Portfolio from './components/Portfolio';
import AboutUs from './components/AboutUs';
import InteractiveMap from './components/InteractiveMap';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import AIChatbot from './components/AIChatbot';
import MobileCallBar from './components/MobileCallBar';
import LegalModal from './components/LegalModal';
import Footer from './components/Footer';
import { X, Play } from 'lucide-react';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [presetService, setPresetService] = useState('Nadstreški po meri');
  const [legalModal, setLegalModal] = useState({ isOpen: false, type: 'privacy' });

  const handleOpenQuote = (serviceName = 'Nadstreški po meri') => {
    setPresetService(serviceName);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0B0C10] text-slate-100 font-sans selection:bg-[#FF5E00] selection:text-white">
      {/* Top Sticky Header */}
      <Navbar onOpenQuoteModal={() => handleOpenQuote()} />

      {/* Hero Section */}
      <Hero 
        onOpenQuoteModal={() => handleOpenQuote()}
        onOpenVideoModal={() => setVideoModalOpen(true)}
      />

      {/* Services Section */}
      <Services onSelectService={(sName) => handleOpenQuote(sName)} />

      {/* Video Showcase Section */}
      <VideoShowcase onOpenVideoModal={() => setVideoModalOpen(true)} />

      {/* References & Portfolio */}
      <Portfolio onSelectProjectQuote={(projName) => handleOpenQuote(`Projekt: ${projName}`)} />

      {/* About Us */}
      <AboutUs />

      {/* Location & Coverage Map */}
      <InteractiveMap />

      {/* FAQ Accordion */}
      <FAQ onOpenQuoteModal={() => handleOpenQuote()} />

      {/* Main Contact & Quote Form */}
      <ContactForm presetService={presetService} />

      {/* Footer */}
      <Footer onOpenLegal={(type) => setLegalModal({ isOpen: true, type })} />

      {/* AI Chatbot Widget */}
      <AIChatbot onOpenQuoteModal={() => handleOpenQuote()} />

      {/* Mobile Sticky Bar */}
      <MobileCallBar onOpenQuoteModal={() => handleOpenQuote()} />

      {/* Quick Quote Modal Popup */}
      {quoteModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-[#12141C] border border-[#FF5E00]/40 rounded-3xl p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setQuoteModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <ContactForm 
              presetService={presetService} 
              onCloseModal={() => setQuoteModalOpen(false)} 
            />
          </div>
        </div>
      )}

      {/* Video Player Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="max-w-4xl w-full bg-[#12141C] border border-[#FF5E00]/50 rounded-3xl p-6 relative shadow-2xl space-y-4">
            <button 
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Play className="w-5 h-5 text-[#FF5E00] fill-current" />
              <span>VAREX Industrijska Izdelava in Varjenje po Meri</span>
            </h3>

            <div className="relative rounded-2xl overflow-hidden aspect-video bg-black flex items-center justify-center border border-white/10">
              <video 
                controls 
                autoPlay 
                poster="/thumbnail.jpeg?v=2" 
                className="w-full h-full object-cover"
              >
                <source src="/video%20_varex.mp4" type="video/mp4" />
                <source src="/video _varex.mp4" type="video/mp4" />
                Vaš brskalnik ne podpira predvajanja videa.
              </video>
            </div>
          </div>
        </div>
      )}

      {/* Legal Privacy & Cookies Modal */}
      <LegalModal 
        isOpen={legalModal.isOpen}
        type={legalModal.type}
        onClose={() => setLegalModal({ isOpen: false, type: 'privacy' })}
      />
    </div>
  );
}
