import React, { useEffect } from 'react';
import { MapPin, Navigation, Phone, Mail } from 'lucide-react';

export default function InteractiveMap() {
  useEffect(() => {
    // Dynamically load Leaflet if available
    if (window.L && document.getElementById('map-container')) {
      const container = document.getElementById('map-container');
      if (container._leaflet_id) return; // already initialized

      const ljubljanaCoords = [46.0569, 14.5058];
      const map = window.L.map('map-container', {
        center: ljubljanaCoords,
        zoom: 10,
        scrollWheelZoom: false
      });

      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);

      // Add 30km coverage radius circle
      window.L.circle(ljubljanaCoords, {
        color: '#FF5E00',
        fillColor: '#FF5E00',
        fillOpacity: 0.15,
        radius: 30000 // 30km
      }).addTo(map);

      // Add marker for VAREX HQ
      const marker = window.L.marker(ljubljanaCoords).addTo(map);
      marker.bindPopup(`
        <div style="color: #000; font-family: sans-serif; text-align: center;">
          <strong style="color: #FF5E00; font-size: 14px;">VAREX Ljubljana</strong><br/>
          Kovinarstvo in Varjenje po Meri<br/>
          <em>30km+ Pokritost Terena</em>
        </div>
      `).openPopup();
    }
  }, []);

  return (
    <section className="py-20 bg-[#0B0C10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="badge-orange">Lokacija in Pokritost Terena</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ljubljana z Okolico (Radij 30km+)
          </h2>
          <p className="text-slate-400 text-base">
            Delujemo po celotni osrednjeslovenski regiji. Izmero, dostavo in montažo izvajamo v mestih: Ljubljana, Domžale, Kamnik, Kranj, Vrhnika, Grosuplje, Logatec, Medvode in širše.
          </p>
        </div>

        {/* Map & Info Card Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Map Container */}
          <div className="lg:col-span-8 bg-[#12141C] border border-[#FF5E00]/30 rounded-3xl overflow-hidden shadow-2xl h-[420px] relative">
            <div id="map-container" className="w-full h-full" />
          </div>

          {/* Location Summary Box */}
          <div className="lg:col-span-4 bg-[#12141C] border border-slate-800 rounded-3xl p-8 space-y-6 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-[#FF5E00]/20 text-[#FF5E00]">
                <Navigation className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Terenska Izvedba</h3>
                <span className="text-xs text-slate-400">Pridemo do vas</span>
              </div>
            </div>

            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FF5E00] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Sedež in Delavnica:</strong>
                  <span>Ljubljana, Slovenija (Industrijska cona)</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#FF5E00] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Direktni Telefon:</strong>
                  <a href="tel:+38640123456" className="text-[#FF5E00] hover:underline font-bold">040 123 456</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#FF5E00] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">E-pošta za Povpraševanja:</strong>
                  <a href="mailto:info@varex.si" className="text-slate-200 hover:text-[#FF5E00]">info@varex.si</a>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#FF5E00]/10 border border-[#FF5E00]/20 text-xs text-slate-300">
              💡 <strong className="text-white">Opomba:</strong> Za projekte izven 30km radija se dogovorimo po predhodnem usklajevanju.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
