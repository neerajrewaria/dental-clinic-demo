import React from 'react';
import { CLINIC_DATA } from '../data/clinicData';
import { Zap, Phone, ArrowRight } from 'lucide-react';

interface EmergencyCareBannerProps {
  onOpenBooking: (serviceId?: string) => void;
  onDemoAction?: (msg?: string) => void;
}

export const EmergencyCareBanner: React.FC<EmergencyCareBannerProps> = ({ onOpenBooking, onDemoAction }) => {
  return (
    <section className="py-12 bg-gradient-to-r from-luxuryDark-950 via-luxuryDark-900 to-luxuryDark-950 text-white relative overflow-hidden border-y border-gold-500/20">
      
      {/* Subtle warning glow indicator */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Text Info */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-rose-500/20 border border-rose-500/40 text-rose-400 flex items-center justify-center shrink-0 animate-pulse">
              <Zap className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full bg-rose-500 text-white text-[10px] font-bold uppercase tracking-wider">
                  Emergency Care Available
                </span>
                <span className="text-xs text-sand-300">
                  Same-Day Priority Slots
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                Severe Tooth Pain or Dental Trauma?
              </h3>
              <p className="text-sand-300 text-xs sm:text-sm mt-1 max-w-xl">
                Don’t wait through unbearable pain. Dr. Manju Sharma provides immediate emergency toothache relief, broken crown repair, and single-sitting urgent RCT in Sector 13 Gurgaon.
              </p>
            </div>
          </div>

          {/* Right Direct Call & Booking CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
            <button
              onClick={() => {
                if (onDemoAction) {
                  onDemoAction('Calling functionality will be available on the official website after launch.');
                }
              }}
              className="px-6 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm shadow-lg hover:shadow-rose-600/30 transition-all flex items-center justify-center gap-2.5 shrink-0"
            >
              <Phone className="w-4 h-4 animate-bounce" />
              <span>Call Emergency: {CLINIC_DATA.phones[0]}</span>
            </button>

            <button
              onClick={() => onOpenBooking('emergency-dental')}
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm transition-colors flex items-center justify-center gap-2 shrink-0"
            >
              <span>Book Urgent Slot</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
