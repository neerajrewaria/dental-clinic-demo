import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/clinicData';
import { Testimonial } from '../types';
import { 
  Star, 
  CheckCircle, 
  Sparkles, 
  Pause, 
  Play, 
  MapPin,
  Heart
} from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [speed, setSpeed] = useState<'normal' | 'slow'>('normal');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterCategories = [
    { id: 'all', label: 'All Reviews (8)' },
    { id: 'rct', label: 'Rotary RCT' },
    { id: 'aligners', label: 'Clear Aligners' },
    { id: 'implants', label: 'Dental Implants' },
    { id: 'cosmetic', label: 'Smile Makeovers' },
    { id: 'pediatric', label: 'Pediatric Care' },
  ];

  const filteredList = TESTIMONIALS_DATA.filter((t) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'rct') return t.treatment.toLowerCase().includes('rct');
    if (selectedFilter === 'aligners') return t.treatment.toLowerCase().includes('aligner');
    if (selectedFilter === 'implants') return t.treatment.toLowerCase().includes('implant');
    if (selectedFilter === 'cosmetic') return t.treatment.toLowerCase().includes('veneers') || t.treatment.toLowerCase().includes('whitening') || t.treatment.toLowerCase().includes('cosmetic');
    if (selectedFilter === 'pediatric') return t.treatment.toLowerCase().includes('pediatric');
    return true;
  });

  // Duplicate items to ensure uninterrupted, seamless right-to-left infinite scrolling
  const marqueeItems = [...filteredList, ...filteredList, ...filteredList];

  const renderReviewCard = (rev: Testimonial, keyIdx: number) => (
    <div
      key={`${rev.id}-${keyIdx}`}
      className="w-[300px] sm:w-[360px] md:w-[400px] shrink-0 p-6 rounded-3xl bg-[#FAF8F5] border border-sand-200/90 hover:border-gold-400 hover:shadow-luxury-hover transition-all duration-300 flex flex-col justify-between select-none group/card"
    >
      <div>
        {/* Top Header with Stars & Treatment Tag */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-0.5 text-gold-500">
            {[...Array(rev.rating)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
            ))}
          </div>
          <span className="text-[10px] font-bold text-gold-700 uppercase tracking-wider bg-gold-100/70 px-2.5 py-0.5 rounded-full border border-gold-200/60 max-w-[170px] truncate">
            {rev.treatment.split('&')[0]}
          </span>
        </div>

        {/* Review Body */}
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-5 line-clamp-4 group-hover/card:text-slate-900 transition-colors">
          "{rev.comment}"
        </p>
      </div>

      {/* Patient Avatar & Verified Stamp */}
      <div className="pt-4 border-t border-sand-200/80 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-full ${rev.avatarBg} text-white text-xs font-bold flex items-center justify-center shadow-sm shrink-0 ring-2 ring-white`}>
            {rev.author.split(' ').map(n => n[0]).slice(0, 2).join('')}
          </div>
          <div className="overflow-hidden">
            <h4 className="font-bold text-slate-900 text-xs sm:text-sm leading-tight truncate">
              {rev.author}
            </h4>
            <span className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5 truncate">
              <MapPin className="w-3 h-3 text-gold-600 shrink-0" />
              {rev.location}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-end shrink-0 pl-2">
          <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
            <CheckCircle className="w-3 h-3 text-emerald-600" />
            <span>Verified</span>
          </div>
          <span className="text-[10px] text-slate-400 mt-0.5">{rev.date}</span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="reviews" className="py-16 md:py-24 bg-white border-t border-sand-200 relative overflow-hidden">
      
      {/* Decorative background aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gold-400/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-gold-700 mb-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-50 border border-gold-200">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>Real Gurugram Patient Experiences</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-luxuryDark-950 mt-2">
              Loved & Trusted Across Gurgaon
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-xl">
              Patients from Sector 38, Sohna Road, Sector 46, DLF, and Golf Course Road share their genuine smile transformation journeys with Dr. Akansha Srivastava.
            </p>
          </div>

          {/* Google Score Pill */}
          <div className="flex items-center gap-4 p-4 rounded-3xl bg-[#FAF8F5] border border-sand-200 shadow-sm self-start lg:self-auto">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center font-serif text-2xl font-bold text-gold-600 border border-sand-200">
              4.9
            </div>
            <div>
              <div className="flex items-center gap-1 text-gold-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-800 block mt-0.5">
                Google Rating • 100% Positive Care
              </span>
              <span className="text-[11px] text-slate-500">
                Verified reviews from Sector 38 patients
              </span>
            </div>
          </div>
        </div>

        {/* Filter Pills & Interactive Controls Bar */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-sand-100">
          
          {/* Treatment Category Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedFilter(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
                  selectedFilter === cat.id
                    ? 'bg-luxuryDark-950 text-gold-300 shadow-sm border border-gold-500/30'
                    : 'bg-sand-100 hover:bg-sand-200 text-slate-700 border border-sand-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Play/Pause & Speed Controller */}
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sand-100 hover:bg-sand-200 text-slate-700 text-xs font-medium border border-sand-200 transition-colors"
              title={isPaused ? 'Resume Smooth Scroll' : 'Pause Scroll'}
            >
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
                  <span>Resume Scroll</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 text-slate-600 fill-slate-600" />
                  <span>Pause Scroll</span>
                </>
              )}
            </button>

            <button
              onClick={() => setSpeed(speed === 'normal' ? 'slow' : 'normal')}
              className="px-2.5 py-1.5 rounded-xl bg-sand-100 hover:bg-sand-200 text-slate-600 text-xs font-medium border border-sand-200 transition-colors"
            >
              Speed: <strong className="text-slate-800 uppercase">{speed}</strong>
            </button>
          </div>

        </div>

      </div>

      {/* Marquee Container with Right-to-Left Smooth Movement & Responsive Edge Fades */}
      <div 
        className="w-full relative marquee-mask overflow-hidden py-2"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div 
          className={`animate-marquee-track flex gap-5 sm:gap-6 ${isPaused ? 'marquee-paused' : ''}`}
          style={{
            animationDuration: speed === 'normal' ? '45s' : '75s'
          }}
        >
          {marqueeItems.map((rev, idx) => renderReviewCard(rev, idx))}
        </div>
      </div>

      {/* Bottom Clinic Promise Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="p-4 rounded-2xl bg-sand-50/80 border border-sand-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500 shrink-0" />
            <span><strong>100% Transparent Care:</strong> Every patient receives compassionate, pain-free attention with unhurried clinical time.</span>
          </div>
          <span className="text-[11px] text-slate-500">
            Hover or tap any card to pause reading
          </span>
        </div>
      </div>

    </section>
  );
};
