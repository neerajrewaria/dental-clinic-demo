import React, { useState } from 'react';
import { BEFORE_AFTER_CASES } from '../data/clinicData';
import { Sparkles, Calendar, CheckCircle2, Clock } from 'lucide-react';

interface SmileTransformationSliderProps {
  onOpenBooking: () => void;
}

export const SmileTransformationSlider: React.FC<SmileTransformationSliderProps> = ({ onOpenBooking }) => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);

  const currentCase = BEFORE_AFTER_CASES[activeCaseIndex];

  return (
    <section id="transformations" className="py-16 md:py-24 bg-luxuryDark-950 text-white relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emeraldTeal-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-gold-400 mb-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-gold-500/20">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Real Patient Smile Transformations</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            See The Artistry in Every Smile
          </h2>
          <p className="text-sand-300 text-sm sm:text-base mt-3">
            Drag the interactive slider below to reveal the transformative power of Dr. Akansha’s precision cosmetic and restorative dentistry.
          </p>
        </div>

        {/* Case Selector Tabs */}
        <div className="flex justify-center gap-2 mb-8 overflow-x-auto pb-2 no-scrollbar">
          {BEFORE_AFTER_CASES.map((c, idx) => (
            <button
              key={c.id}
              onClick={() => {
                setActiveCaseIndex(idx);
                setSliderPos(50);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                activeCaseIndex === idx
                  ? 'bg-gold-500 text-luxuryDark-950 shadow-glow-gold'
                  : 'bg-white/10 text-sand-300 hover:bg-white/20 border border-white/5'
              }`}
            >
              {c.treatment}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Slider Canvas (Col 7) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10 select-none bg-slate-900">
              
              {/* "After" Image (Underneath, full view) */}
              <img
                src={currentCase.afterImage}
                alt="After Dental Treatment"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
              <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-emerald-600/90 backdrop-blur-md text-white text-xs font-bold shadow-md">
                AFTER TREATMENT
              </div>

              {/* "Before" Image (Clipped with polygon) */}
              <div 
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
              >
                <img
                  src={currentCase.beforeImage}
                  alt="Before Dental Treatment"
                  className="absolute inset-0 w-full h-full object-cover filter contrast-90 brightness-95 pointer-events-none"
                />
                <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-white text-xs font-bold shadow-md">
                  BEFORE TREATMENT
                </div>
              </div>

              {/* Vertical Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] pointer-events-none z-30"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-gold-500 border-2 border-white shadow-xl flex items-center justify-center text-luxuryDark-950">
                  <div className="flex items-center gap-0.5 text-[10px] font-bold">
                    <span>‹</span>
                    <span>›</span>
                  </div>
                </div>
              </div>

              {/* Range Input Overlay for Dragging */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                className="absolute inset-0 opacity-0 w-full h-full cursor-ew-resize z-40"
                aria-label="Drag to compare before and after dental treatment"
              />

              {/* Helper instruction */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-sand-300 text-[11px] font-medium z-20 pointer-events-none flex items-center gap-1.5">
                <span>⇄ Drag left/right to compare</span>
              </div>
            </div>
          </div>

          {/* Case Narrative (Col 5) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="px-3 py-1 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/20 text-xs font-bold uppercase tracking-wider mb-3">
              Case Breakdown
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
              {currentCase.title}
            </h3>
            
            <div className="flex items-center gap-2 text-xs font-semibold text-sand-300 mb-4 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
              <Clock className="w-3.5 h-3.5 text-gold-400" />
              <span>{currentCase.duration}</span>
            </div>

            <p className="text-sand-300 text-sm leading-relaxed mb-6">
              {currentCase.description}
            </p>

            {/* Highlights Checklist */}
            <div className="space-y-2.5 w-full mb-8">
              {currentCase.highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-sand-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Consultation Action */}
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-luxuryDark-950 font-bold text-sm shadow-glow-gold transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Plan Your Smile Transformation</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
