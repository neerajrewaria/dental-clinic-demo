import React from 'react';
import { Sparkles, Stethoscope, ShieldCheck, HeartHandshake, Smile, CheckCircle } from 'lucide-react';

export const PatientExperienceJourney: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Warm Welcome & Digital Diagnostics',
      subtitle: 'Zero-wait arrival & high-definition digital X-rays',
      desc: 'You are greeted into our tranquil clinic in Huda Market Sector 38. We start with comfortable digital imaging and a relaxed conversation to understand your goals with zero rush.',
      icon: <Stethoscope className="w-6 h-6 text-gold-600" />
    },
    {
      number: '02',
      title: 'Transparent Treatment Plan',
      subtitle: 'Clear options, fixed pricing, zero hidden surprises',
      desc: 'Dr. Akansha walks you through your 3D digital scans on screen, explaining every option with complete transparency so you are 100% in control of your dental decisions.',
      icon: <ShieldCheck className="w-6 h-6 text-gold-600" />
    },
    {
      number: '03',
      title: 'Gentle & Painless Care',
      subtitle: 'Advanced rotary tools & computer-assisted numbing',
      desc: 'Lie back in our ergonomic dental suite with soothing ambient music. Utilizing computer-controlled numbing, rotary files, and gentle hands, discomfort is eliminated.',
      icon: <HeartHandshake className="w-6 h-6 text-gold-600" />
    },
    {
      number: '04',
      title: 'Confident Smile & Post-Care',
      subtitle: 'Follow-up check-ins & lifelong oral health support',
      desc: 'Leave with immediate comfort and renewed confidence. Our clinic team checks in personally post-procedure to ensure your healing is completely effortless.',
      icon: <Smile className="w-6 h-6 text-gold-600" />
    }
  ];

  return (
    <section id="journey" className="py-16 md:py-24 bg-white border-t border-sand-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-gold-700 mb-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-50 border border-gold-200">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>The Neha Dental Experience</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-luxuryDark-950 mt-3">
            Designed for Your Peace of Mind
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            From the moment you walk through our doors to your final smile reveal, experience what compassionate modern dentistry feels like.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-3xl bg-[#FAF8F5] border border-sand-200 hover:border-gold-300 hover:shadow-luxury transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-sand-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <span className="font-serif text-3xl font-bold text-sand-300 group-hover:text-gold-500 transition-colors">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-luxuryDark-950 mb-1">
                  {step.title}
                </h3>
                <p className="text-xs font-semibold text-gold-700 mb-3">
                  {step.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-sand-200/60 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Zero-Anxiety Guarantee</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
