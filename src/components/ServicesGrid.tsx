import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/clinicData';
import { ServiceItem } from '../types';
import { 
  Sparkles, 
  Anchor, 
  ShieldAlert, 
  Layers, 
  Smile, 
  Baby, 
  Zap, 
  HeartHandshake, 
  Clock, 
  Check, 
  ArrowRight,
  Info
} from 'lucide-react';

interface ServicesGridProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Treatments' },
    { id: 'cosmetic', label: 'Cosmetic & Veneers' },
    { id: 'implants', label: 'Implants & Surgery' },
    { id: 'rct', label: 'Rotary RCT (Painless)' },
    { id: 'aligners', label: 'Clear Aligners' },
    { id: 'pediatric', label: 'Kids & Family' },
    { id: 'emergency', label: 'Emergency Care' },
  ];

  const filteredServices = activeCategory === 'all' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.category === activeCategory || (activeCategory === 'aligners' && (s.category === 'aligners' || s.id === 'orthodontic-braces')));

  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Anchor': return <Anchor className="w-5 h-5" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Smile': return <Smile className="w-5 h-5" />;
      case 'Baby': return <Baby className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5 text-rose-500" />;
      default: return <HeartHandshake className="w-5 h-5" />;
    }
  };

  return (
    <section id="treatments" className="py-16 md:py-24 bg-white border-t border-sand-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-gold-700 mb-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-50 border border-gold-200">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>Comprehensive Dental Solutions</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-luxuryDark-950 mt-2">
              Advanced Clinical Care
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-lg leading-relaxed">
            Every procedure at Neha Dental Clinic combines precision microsurgery, biological enamel preservation, and painless anesthetic technology.
          </p>
        </div>

        {/* Category Filter Pills (Horizontal scroll on mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
                activeCategory === cat.id
                  ? 'bg-luxuryDark-950 text-gold-300 shadow-md border border-gold-500/30'
                  : 'bg-sand-100 hover:bg-sand-200 text-slate-700 border border-sand-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-[#FAF8F5] rounded-3xl overflow-hidden border border-sand-200/90 hover:border-gold-300 hover:shadow-luxury-hover transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Header & Image */}
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-luxuryDark-950 text-[11px] font-bold tracking-wide shadow-sm flex items-center gap-1.5">
                      <span className="text-gold-600">{getIcon(service.iconName)}</span>
                      <span className="capitalize">{service.category}</span>
                    </span>
                  </div>

                  {/* Pain Level Indicator */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/80 backdrop-blur-sm text-[11px] font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                      {service.painLevel}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sand-200 text-[11px]">
                      <Clock className="w-3 h-3 text-gold-400" />
                      {service.duration}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-luxuryDark-950 mb-1 group-hover:text-gold-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gold-700 font-semibold mb-3">
                    {service.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Key Benefits Checklist */}
                  <div className="space-y-1.5 mb-4">
                    {service.benefits.slice(0, 3).map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-sand-200/50 mt-2 flex items-center gap-3">
                <button
                  onClick={() => onOpenBooking(service.id)}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-luxuryDark-950 hover:bg-gold-600 text-gold-300 hover:text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setSelectedService(service)}
                  className="p-2.5 rounded-xl bg-white hover:bg-sand-200 text-slate-700 border border-sand-300 text-xs transition-colors"
                  title="View Procedure Details"
                >
                  <Info className="w-4 h-4 text-slate-600" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detailed Service Information Dialog */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-sand-300 animate-scaleUp">
            <div className="relative h-48 bg-slate-900">
              <img 
                src={selectedService.image} 
                alt={selectedService.title} 
                className="w-full h-full object-cover opacity-85"
              />
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors text-sm font-bold"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="px-2.5 py-0.5 rounded-full bg-gold-500 text-luxuryDark-950 text-[10px] font-bold uppercase tracking-wider mb-1 inline-block">
                  {selectedService.category}
                </span>
                <h3 className="font-serif text-2xl font-bold text-white leading-tight">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
              <p className="text-sm text-slate-700 leading-relaxed">
                {selectedService.description}
              </p>

              <div className="grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-sand-50 border border-sand-200 text-xs">
                <div>
                  <span className="text-slate-500 block">Typical Duration</span>
                  <strong className="text-slate-900">{selectedService.duration}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block">Comfort Level</span>
                  <strong className="text-emerald-700">{selectedService.painLevel}</strong>
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-slate-900 mb-2">
                  Clinical Advantages
                </h4>
                <div className="space-y-2">
                  {selectedService.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <span className="text-xs text-slate-500 block mb-1">Recommended For:</span>
                <p className="text-xs font-medium text-slate-800 bg-sand-100 p-2.5 rounded-xl border border-sand-200">
                  {selectedService.idealFor}
                </p>
              </div>
            </div>

            <div className="p-4 bg-sand-50 border-t border-sand-200 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-sand-200 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const sId = selectedService.id;
                  setSelectedService(null);
                  onOpenBooking(sId);
                }}
                className="px-5 py-2.5 rounded-xl bg-luxuryDark-950 hover:bg-gold-600 text-gold-300 hover:text-white text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
              >
                <span>Book This Treatment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
