import React from 'react';
import { CLINIC_DATA } from '../data/clinicData';
import { Phone, MessageCircle, Calendar, MapPin } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenBooking: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenBooking }) => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Neha Dental Clinic SCO Shop No 38 First Floor Huda Market Islampur Colony Sector 38 Gurugram Haryana 122001")}`;

  return (
    <aside aria-label="Quick Mobile Actions" className="fixed bottom-0 inset-x-0 z-40 lg:hidden p-3 bg-white/95 backdrop-blur-xl border-t border-sand-200/90 shadow-[0_-10px_25px_rgba(0,0,0,0.08)]">
      <div className="max-w-md mx-auto grid grid-cols-4 gap-2">
        
        {/* Quick Call */}
        <a
          href={`tel:${CLINIC_DATA.phones[0].replace(/\s+/g, '')}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-sand-100 hover:bg-sand-200 text-slate-800 transition-colors border border-sand-200 active:scale-95"
          aria-label="Call Neha Dental Clinic"
        >
          <Phone className="w-4 h-4 text-gold-700" />
          <span className="text-[10px] font-bold mt-1 tracking-tight">Call</span>
        </a>

        {/* WhatsApp Direct */}
        <a
          href={`https://wa.me/${CLINIC_DATA.whatsapp}?text=Hello%20Dr.%20Akansha,%20I%20would%20like%20to%20inquire%20about%20a%20consultation%20at%20Neha%20Dental%20Clinic.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 transition-colors border border-emerald-200 active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600" />
          <span className="text-[10px] font-bold mt-1 tracking-tight">WhatsApp</span>
        </a>

        {/* Directions */}
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-sand-100 hover:bg-sand-200 text-slate-800 transition-colors border border-sand-200 active:scale-95"
          aria-label="Get Directions to Sector 38 Clinic"
        >
          <MapPin className="w-4 h-4 text-slate-700" />
          <span className="text-[10px] font-bold mt-1 tracking-tight">Directions</span>
        </a>

        {/* Main Priority Action: Book */}
        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-luxuryDark-950 text-gold-300 font-bold transition-transform active:scale-95 border border-gold-500/30 shadow-md"
          aria-label="Book Dental Consultation"
        >
          <Calendar className="w-4 h-4 text-gold-400" />
          <span className="text-[10px] font-bold mt-1 tracking-tight text-gold-300">Book Slot</span>
        </button>

      </div>
    </aside>
  );
};
