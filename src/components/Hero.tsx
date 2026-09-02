import React from 'react';
import { CLINIC_DATA, DOCTOR_DATA } from '../data/clinicData';
import { 
  Sparkles, 
  Calendar, 
  Star, 
  ShieldCheck, 
  Heart, 
  ArrowRight, 
  CheckCircle2, 
  PhoneCall, 
  Award,
  Clock
} from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 md:pt-12 md:pb-24 subtle-mesh">
      {/* Decorative ambient background glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-gold-400/10 via-emeraldTeal-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mobile-first editorial structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Hero Storytelling Column (Col 7) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Trust Pill Badges */}
            <div className="inline-flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-luxuryDark-900 border border-sand-300 text-xs font-semibold shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-gold-500" />
                <span>Sector 38, Gurgaon’s Premier Dental Practice</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-50 text-rose-800 border border-rose-200/80 text-xs font-semibold">
                <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
                <span>Woman-Owned Clinic</span>
              </span>
            </div>

            {/* Core Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-luxuryDark-950 leading-[1.12] mb-5">
              A Healthier Smile. <br />
              <span className="gold-gradient-text italic font-normal">A More Confident You.</span>
            </h1>

            {/* Concise, Human Philosophy */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-6">
              Welcome to <strong className="text-slate-900 font-semibold">{CLINIC_DATA.name}</strong>, led by <strong className="text-slate-900 font-semibold">{DOCTOR_DATA.name}</strong>. We blend gentle, pain-free artistry with precision dental science—delivering personalized cosmetic makeovers, single-sitting RCTs, and Swiss-grade implants in a serene, anxiety-free setting.
            </p>

            {/* Key Clinical Pillars Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full max-w-xl mb-8 text-xs sm:text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Painless Rotary Endodontics (RCT)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Custom Clear Aligners & Smile Design</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero-Wait Dedicated Consultations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Hospital-Grade Class-B Autoclave Safety</span>
              </div>
            </div>

            {/* Primary & Secondary Action Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8">
              <button
                onClick={onOpenBooking}
                className="group relative px-7 py-4 rounded-2xl bg-luxuryDark-950 text-white font-semibold text-sm sm:text-base shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 border border-gold-500/30 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gold-600 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Calendar className="w-5 h-5 text-gold-400 group-hover:text-white relative z-10 transition-colors" />
                <span className="relative z-10 text-gold-200 group-hover:text-white tracking-wide">Book Priority Consultation</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#treatments"
                className="px-6 py-4 rounded-2xl bg-white hover:bg-sand-100 text-slate-800 font-semibold text-sm sm:text-base border border-sand-300 shadow-sm hover:shadow transition-all flex items-center justify-center gap-2"
              >
                <span>Explore Treatments</span>
              </a>
            </div>

            {/* Social Proof & Google Review Metric */}
            <div className="flex items-center gap-4 pt-4 border-t border-sand-200/80 w-full max-w-xl">
              <div className="flex -space-x-2">
                {['bg-amber-600', 'bg-emerald-600', 'bg-teal-600', 'bg-blue-600'].map((bg, idx) => (
                  <div key={idx} className={`w-8 h-8 rounded-full ${bg} border-2 border-white flex items-center justify-center text-white text-[10px] font-bold shadow-sm`}>
                    {['PS', 'RK', 'AM', 'SV'][idx]}
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-gold-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
                  ))}
                  <span className="font-bold text-slate-900 text-xs ml-1">4.9 / 5.0</span>
                </div>
                <span className="text-xs text-slate-500">
                  Trusted by <strong>1,200+ Gurugram Families</strong> • Google Verified Reviews
                </span>
              </div>
            </div>

          </div>

          {/* Right Visual Composition (Col 5) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-sand-100 aspect-[4/5] group">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000" 
                  alt="Neha Dental Clinic - Dr. Akansha Srivastava Consulting Room"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Soft gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxuryDark-950/80 via-luxuryDark-950/20 to-transparent"></div>

                {/* Overlaid Doctor Badge in Photo */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl glass-dark text-white border border-white/10 shadow-lg">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-1 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-0.5">
                        <Award className="w-3.5 h-3.5" />
                        <span>Chief Dental Surgeon</span>
                      </div>
                      <h3 className="font-serif text-lg font-bold text-white leading-tight">
                        {DOCTOR_DATA.name}
                      </h3>
                      <p className="text-sand-300 text-xs mt-0.5 font-sans">
                        BDS • Aesthetic & Rotary Endodontics Specialist
                      </p>
                    </div>

                    <a
                      href={`tel:${CLINIC_DATA.phones[0].replace(/\s+/g, '')}`}
                      className="w-10 h-10 rounded-xl bg-gold-500 hover:bg-gold-400 text-luxuryDark-950 flex items-center justify-center shrink-0 shadow-md transition-colors"
                      title="Direct Call to Doctor's Clinic"
                    >
                      <PhoneCall className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Next Slot */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-luxury border border-sand-200 flex items-center gap-3 animate-float-slow">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase font-semibold tracking-wider">Next Available</div>
                  <div className="text-xs font-bold text-slate-900">Today • Zero Wait</div>
                </div>
              </div>

              {/* Floating Badge 2: Painless Protocol */}
              <div className="absolute -bottom-5 -left-2 sm:-left-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-luxury border border-sand-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold-50 text-gold-600 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">100% Gentle Protocol</div>
                  <div className="text-[11px] text-slate-500">Painless Local Numbing</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
