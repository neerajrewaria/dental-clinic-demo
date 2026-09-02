import React, { useState } from 'react';
import { Camera, Maximize2, MapPin } from 'lucide-react';

export const ClinicGallery: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  const galleryItems = [
    {
      title: "State-of-the-Art Ergonomic Dental Suite",
      tag: "Treatment Suite",
      desc: "Relaxing patient lounge with modern dental chair and ambient lighting",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=900"
    },
    {
      title: "Class-B Multi-Cycle Autoclave Station",
      tag: "100% Sterile Safety",
      desc: "Hospital-grade sterilization with sealed pouch instrumentation",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=900"
    },
    {
      title: "Digital Radiography & Apex Locators",
      tag: "Advanced Diagnostics",
      desc: "Ultra-low radiation digital X-rays with immediate high-res screen display",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=900"
    },
    {
      title: "Welcoming Reception & Consultation Lounge",
      tag: "Patient Comfort",
      desc: "Calming, hygienic atmosphere with dedicated refreshment amenities",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=900"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-gold-700 mb-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-100/60 border border-gold-200">
              <Camera className="w-3.5 h-3.5 text-gold-600" />
              <span>Clinic Atmosphere & Hygiene</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-luxuryDark-950 mt-2">
              Inside Neha Dental Clinic
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 bg-white px-4 py-2.5 rounded-2xl border border-sand-200 shadow-sm">
            <MapPin className="w-4 h-4 text-gold-600 shrink-0" />
            <span>SCO 38, First Floor, Huda Market, Sector 38, Gurugram</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActivePhoto(item.image)}
              className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-luxury-hover border border-sand-200 bg-slate-900 cursor-pointer aspect-[4/5] transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* Tag */}
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-luxuryDark-950 text-[10px] font-bold uppercase tracking-wider">
                  {item.tag}
                </span>
              </div>

              {/* Expand Icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Content */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-serif text-base font-bold text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-[11px] text-sand-300 mt-1 line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Production Note */}
        <div className="mt-8 p-4 rounded-2xl bg-white/70 border border-dashed border-sand-300 text-center text-xs text-slate-500 max-w-2xl mx-auto">
          💡 <strong className="text-slate-700">Personalized Demo Architecture:</strong> These high-resolution visual placeholders are structured with clean CDN hooks for instant drag-and-drop replacement with Neha Dental Clinic's photography.
        </div>

      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div 
          onClick={() => setActivePhoto(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer animate-fadeIn"
        >
          <div className="relative max-w-4xl w-full max-h-[85vh] rounded-2xl overflow-hidden">
            <img src={activePhoto} alt="Clinic Full View" className="w-full h-full object-contain mx-auto" />
            <button 
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 px-4 py-2 rounded-full bg-white/20 hover:bg-white/40 text-white font-bold text-xs backdrop-blur-md"
            >
              ✕ Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
