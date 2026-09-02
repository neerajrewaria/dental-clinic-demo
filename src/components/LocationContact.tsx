import React from 'react';
import { CLINIC_DATA, DOCTOR_DATA } from '../data/clinicData';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Navigation, 
  Car, 
  Accessibility, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface LocationContactProps {
  onOpenBooking?: () => void;
}

export const LocationContact: React.FC<LocationContactProps> = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Neha Dental Clinic SCO Shop No 38 First Floor Huda Market Islampur Colony Sector 38 Gurugram Haryana 122001")}`;

  return (
    <section id="location" className="py-16 md:py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-gold-700 mb-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-100/60 border border-gold-200">
            <MapPin className="w-3.5 h-3.5 text-gold-600" />
            <span>Visit Us in Sector 38, Gurugram</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-luxuryDark-950 mt-2">
            Prime Location & Hours
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Centrally situated at Huda Market with dedicated on-site parking and wheelchair accessibility.
          </p>
        </div>

        {/* 2-Column Location & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Details Card (Col 6) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 shadow-luxury border border-sand-200 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Address Header */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gold-50 border border-gold-200 text-gold-600 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-luxuryDark-950">
                    {CLINIC_DATA.name}
                  </h3>
                  <p className="text-xs text-gold-700 font-bold uppercase tracking-wider mb-1">
                    {DOCTOR_DATA.name} • Dental Surgeon
                  </p>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {CLINIC_DATA.address.full}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    📍 Landmark: {CLINIC_DATA.address.landmark}
                  </p>
                </div>
              </div>

              {/* Direct Phone Lines */}
              <div className="p-4 rounded-2xl bg-sand-50 border border-sand-200">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Direct Phone & Emergency Lines
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {CLINIC_DATA.phones.map((phone, i) => (
                    <a
                      key={i}
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="p-3 rounded-xl bg-white hover:bg-gold-50 border border-sand-200 hover:border-gold-300 text-slate-900 font-bold text-sm flex items-center justify-between transition-all group"
                    >
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-gold-600 group-hover:scale-110 transition-transform" />
                        <span>{phone}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 group-hover:text-gold-700 font-normal">Call</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Operating Hours */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Clinic Consultation Hours
                </span>
                <div className="space-y-1.5 text-xs sm:text-sm">
                  <div className="flex items-center justify-between py-1.5 border-b border-sand-100 text-slate-800">
                    <span className="font-medium">Monday – Saturday:</span>
                    <strong className="text-slate-900 font-semibold">{CLINIC_DATA.timings.hours}</strong>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-sand-100 text-slate-800">
                    <span className="font-medium">Sunday:</span>
                    <span className="text-gold-700 font-semibold">{CLINIC_DATA.timings.sunday}</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 text-slate-800">
                    <span className="font-medium">Emergency Dental Care:</span>
                    <span className="text-emerald-700 font-semibold">24/7 On-Call Assistance</span>
                  </div>
                </div>
              </div>

              {/* Parking & Accessibility Amenities */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand-100 text-slate-700 text-xs font-semibold">
                  <Car className="w-3.5 h-3.5 text-gold-600" />
                  On-Site Parking Available
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand-100 text-slate-700 text-xs font-semibold">
                  <Accessibility className="w-3.5 h-3.5 text-emerald-600" />
                  Wheelchair Accessible
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-800 text-xs font-semibold border border-rose-200/60">
                  <Sparkles className="w-3.5 h-3.5 text-rose-500" />
                  Woman-Led Clinic
                </span>
              </div>

            </div>

            {/* Direction CTAs */}
            <div className="pt-6 mt-6 border-t border-sand-200 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-luxuryDark-950 hover:bg-gold-600 text-gold-300 hover:text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 border border-gold-500/30"
              >
                <Navigation className="w-4 h-4 text-gold-400" />
                <span>Get Google Maps Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={`https://wa.me/${CLINIC_DATA.whatsapp}?text=Hello%20Dr.%20Akansha,%20I%20need%20assistance%20finding%20Neha%20Dental%20Clinic%20in%20Sector%2038.`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Clinic</span>
              </a>
            </div>
          </div>

          {/* Right Interactive Map / Visual Preview (Col 6) */}
          <div className="lg:col-span-6 bg-slate-900 rounded-3xl overflow-hidden shadow-luxury border-4 border-white relative flex flex-col min-h-[380px]">
            
            {/* Embedded Live Google Maps Iframe */}
            <iframe
              title="Neha Dental Clinic Sector 38 Gurugram Map Location"
              src="https://maps.google.com/maps?q=SCO+Shop+No+38+First+Floor+Huda+Market+Islampur+Colony+Sector+38+Gurugram+Haryana+122001&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[360px] border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Overlaid Location Badge */}
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl glass-dark text-white border border-white/10 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-gold-400 uppercase tracking-wider">
                  Gurugram Prime Location
                </p>
                <p className="font-serif text-sm font-bold text-white">
                  SCO 38, Huda Market, Sector 38
                </p>
                <p className="text-[11px] text-sand-300">
                  Easy connectivity from Medanta, Sohna Road & Subhash Chowk
                </p>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-gold-500 hover:bg-gold-400 text-luxuryDark-950 font-bold text-xs shrink-0 transition-colors"
              >
                Open Map
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
