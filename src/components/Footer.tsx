import React from 'react';
import { CLINIC_DATA, DOCTOR_DATA, SERVICES_DATA } from '../data/clinicData';
import { 
  MapPin, 
  Phone, 
  Heart, 
  ArrowUp,
  Sparkles
} from 'lucide-react';

interface FooterProps {
  onOpenBooking: (serviceId?: string) => void;
  onDemoAction?: (msg?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onDemoAction }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCallClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onDemoAction) {
      onDemoAction('Calling functionality will be available on the official website after launch.');
    }
  };

  return (
    <footer className="bg-luxuryDark-950 text-sand-200 pt-16 pb-24 lg:pb-16 border-t border-white/10 relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 4-Column Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand & Doctor Tribute (Col 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-white p-1.5 shadow-lg border border-white/20 flex items-center justify-center shrink-0 overflow-hidden">
                <img 
                  src="/logo.png" 
                  alt="Dr Kiruthika Asokan's Dental Clinic Official Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-base font-bold tracking-tight text-white block leading-tight">
                  DR KIRUTHIKA ASOKAN'S
                </span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-gold-400 font-semibold">
                  DENTAL CLINIC • PORUR, CHENNAI
                </span>
              </div>
            </div>

            <p className="text-sand-300 text-xs sm:text-sm leading-relaxed">
              Spearheaded by <strong className="text-white">{DOCTOR_DATA.name}</strong>, Dr Kiruthika Asokan's Dental Clinic delivers specialized Orthodontics, painless Root Canal Treatments (RCT), and computer-guided Dental Implants in a soothing, sterile environment.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-sand-300">
              <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
              <span>Proudly Women-Led & Patient-First</span>
            </div>
          </div>

          {/* Treatments Navigation (Col 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-gold-400">
              Clinical Specializations
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-sand-300">
              {SERVICES_DATA.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => onOpenBooking(service.id)}
                    className="hover:text-gold-300 transition-colors text-left flex items-center gap-1.5"
                  >
                    <span className="text-gold-500">›</span>
                    <span>{service.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Emergency (Col 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-gold-400">
              Clinic Timings
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-sand-300">
              <div>
                <strong className="text-white block font-medium">Mon – Sat:</strong>
                <span>10:00 AM – 8:30 PM</span>
              </div>
              <div>
                <strong className="text-white block font-medium">Sunday:</strong>
                <span>By Prior Appointment</span>
              </div>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1 text-emerald-400 text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  Emergency Consultations
                </span>
              </div>
            </div>
          </div>

          {/* Location & Quick Contact (Col 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-gold-400">
              Porur, Chennai Location
            </h4>
            
            <div className="space-y-2.5 text-xs sm:text-sm text-sand-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{CLINIC_DATA.address.full}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <div className="flex flex-col">
                  {CLINIC_DATA.phones.map((p, i) => (
                    <button 
                      key={i} 
                      onClick={handleCallClick}
                      className="hover:text-gold-300 font-medium text-left transition-colors"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-luxuryDark-950 font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5"
              >
                <span>Reserve Appointment</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Demo Credit */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-sand-400 text-center md:text-left">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center justify-center md:justify-start gap-2 text-sand-200">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <p className="font-semibold text-white">
                Demo Website Created by <span className="text-gold-400 font-bold">Neeraj</span>
              </p>
            </div>
            <p className="text-[11px] text-sand-400 leading-relaxed">
              This is a demonstration website concept and is not the official website of Dr Kiruthika Asokan's Dental Clinic.
            </p>
            <p className="text-[10px] text-sand-500">
              © {new Date().getFullYear()} Dr Kiruthika Asokan's Dental Clinic, Porur, Chennai. All concept and design presentation rights reserved.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-sand-300 hover:text-white transition-colors border border-white/10 flex items-center gap-1.5 text-xs font-medium shrink-0 shadow-sm"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
