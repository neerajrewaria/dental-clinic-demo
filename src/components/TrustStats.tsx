import React from 'react';
import { CLINIC_DATA } from '../data/clinicData';
import { 
  HeartHandshake, 
  Car, 
  Accessibility, 
  ShieldCheck, 
  Clock, 
  Sparkles
} from 'lucide-react';

export const TrustStats: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    HeartHandshake: <HeartHandshake className="w-5 h-5 text-rose-600" />,
    Car: <Car className="w-5 h-5 text-blue-600" />,
    Accessibility: <Accessibility className="w-5 h-5 text-emerald-600" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-gold-600" />,
    Clock: <Clock className="w-5 h-5 text-purple-600" />,
    Sparkles: <Sparkles className="w-5 h-5 text-amber-600" />
  };

  const statCounters = [
    { value: '10+', label: 'Years Clinical Experience', sub: 'Dr. Manju Sharma' },
    { value: '1,200+', label: 'Gurugram Smiles Transformed', sub: 'Sector 13 & Beyond' },
    { value: '100%', label: 'Painless Gentle Protocol', sub: 'Rotary Single-Sitting RCT' },
    { value: '4.9★', label: 'Google Patient Rating', sub: 'Verified Local Trust' },
  ];

  return (
    <section className="py-12 bg-white border-y border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 pb-12 border-b border-sand-200">
          {statCounters.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-luxuryDark-950 gold-gradient-text">
                {stat.value}
              </span>
              <span className="text-sm font-bold text-slate-800 mt-1">
                {stat.label}
              </span>
              <span className="text-xs text-slate-500 mt-0.5">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>

        {/* Why Patients Choose Vrinda Dental Clinic - Amenity Cards */}
        <div className="pt-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="text-xs uppercase font-bold tracking-widest text-gold-700 mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Patient-First Standard</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-luxuryDark-950">
                Crafted for Total Comfort & Trust
              </h2>
            </div>
            <p className="text-sm text-slate-600 max-w-md">
              Every detail at Vrinda Dental Clinic—from convenient parking on Mata Road opposite Mamta Hospital to hospital-grade sterilization—is designed around your peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {CLINIC_DATA.amenities.map((item, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-sand-50/70 hover:bg-white border border-sand-200/90 hover:border-gold-300 hover:shadow-luxury transition-all duration-300 flex flex-col group"
              >
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-sand-200 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  {iconMap[item.icon] || <ShieldCheck className="w-5 h-5 text-gold-600" />}
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
