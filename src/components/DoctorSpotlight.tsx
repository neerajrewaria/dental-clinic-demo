import React from 'react';
import { DOCTOR_DATA } from '../data/clinicData';
import { 
  Award, 
  CheckCircle, 
  GraduationCap, 
  Calendar, 
  Phone,
  Sparkles,
  Quote
} from 'lucide-react';

interface DoctorSpotlightProps {
  onOpenBooking: () => void;
  onDemoAction?: (msg?: string) => void;
}

export const DoctorSpotlight: React.FC<DoctorSpotlightProps> = ({ onOpenBooking, onDemoAction }) => {
  return (
    <section id="doctor" className="py-16 md:py-24 bg-[#FAF8F5] relative overflow-hidden">
      
      {/* Decorative background element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-gold-700 mb-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-100/60 border border-gold-200">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Meet The Founder & Chief Surgeon</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-luxuryDark-950 mt-3">
            Gentle Hands. Surgical Precision.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Dedicated to ethical, transparent, and pain-free dental healthcare for patients of all ages in Gurugram.
          </p>
        </div>

        {/* Doctor Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Doctor Image & Accreditations (Col 5) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              
              {/* Photo Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 aspect-[4/5] group">
                <img 
                  src={DOCTOR_DATA.image} 
                  alt={`Dr. Manju Sharma - Dental Surgeon at Vrinda Dental Clinic Gurgaon`}
                  loading="lazy"
                  crossOrigin="anonymous"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1000";
                  }}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-luxuryDark-950/90 via-luxuryDark-950/20 to-transparent"></div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-2.5 py-1 rounded-full bg-gold-500 text-luxuryDark-950 text-xs font-bold uppercase tracking-wider inline-block mb-2">
                    {DOCTOR_DATA.experience}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {DOCTOR_DATA.name}
                  </h3>
                  <p className="text-sand-300 text-xs sm:text-sm font-sans">
                    {DOCTOR_DATA.title}
                  </p>
                </div>
              </div>

              {/* Floating Quote Card */}
              <div className="mt-4 p-4 rounded-2xl bg-white border border-sand-200 shadow-luxury flex items-start gap-3">
                <Quote className="w-6 h-6 text-gold-500 shrink-0 mt-1" />
                <p className="text-xs sm:text-sm text-slate-700 italic font-serif leading-relaxed">
                  "{DOCTOR_DATA.philosophy}"
                </p>
              </div>

            </div>
          </div>

          {/* Doctor Bio & Clinical Specialties (Col 7) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold mb-3">
              <GraduationCap className="w-4 h-4 text-emerald-600" />
              <span>Certified BDS Dental Surgeon • Gurugram</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-luxuryDark-950 mb-4">
              Restoring Confidence One Patient at a Time
            </h3>

            {/* Paragraphs */}
            <div className="space-y-3.5 text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              {DOCTOR_DATA.bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Core Clinical Masteries */}
            <div className="w-full mb-8">
              <h4 className="text-xs uppercase font-bold tracking-widest text-slate-900 mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-gold-600" />
                <span>Areas of Clinical Mastery</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {DOCTOR_DATA.specialties.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-sand-200 shadow-sm text-xs sm:text-sm font-medium text-slate-800">
                    <CheckCircle className="w-4 h-4 text-gold-600 shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Doctor CTA Action */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-xl bg-luxuryDark-950 text-gold-300 hover:text-white font-semibold text-sm shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-2 border border-gold-500/30"
              >
                <Calendar className="w-4 h-4 text-gold-400" />
                <span>Schedule Consultation with Dr. Manju Sharma</span>
              </button>

              <button
                onClick={() => {
                  if (onDemoAction) {
                    onDemoAction('Calling functionality will be available on the official website after launch.');
                  }
                }}
                className="px-5 py-3.5 rounded-xl bg-white hover:bg-sand-100 text-slate-800 font-medium text-sm border border-sand-300 transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-slate-600" />
                <span>Call Clinic Directly</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
