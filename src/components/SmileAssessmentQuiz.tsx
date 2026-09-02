import React, { useState } from 'react';
import { CLINIC_DATA } from '../data/clinicData';
import { 
  Sparkles, 
  ArrowRight, 
  RotateCcw, 
  Calendar, 
  MessageCircle, 
  ShieldCheck, 
  Award 
} from 'lucide-react';

interface SmileAssessmentQuizProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const SmileAssessmentQuiz: React.FC<SmileAssessmentQuizProps> = ({ onOpenBooking }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [answers, setAnswers] = useState<{
    goal: string;
    symptom: string;
    timeline: string;
  }>({
    goal: '',
    symptom: '',
    timeline: ''
  });

  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const goalOptions = [
    { id: 'aligners', label: 'Teeth Straightening (Clear Aligners)', desc: 'Invisible orthodontic correction without wires', icon: '✨' },
    { id: 'cosmetic', label: 'Smile Makeover / Whitening', desc: 'Veneers, staining removal & symmetry design', icon: '💎' },
    { id: 'rct', label: 'Pain Relief / Root Canal (RCT)', desc: 'Severe toothache, deep cavities, pain-free relief', icon: '🩺' },
    { id: 'implants', label: 'Missing Tooth Replacement (Implants)', desc: 'Permanent Swiss titanium implant restorations', icon: '🦷' },
    { id: 'pediatric', label: 'Kids or Family Dental Checkup', desc: 'Gentle, tear-free child and routine family wellness', icon: '🧸' },
  ];

  const symptomOptions = [
    { id: 'sensitivity', label: 'Sensitivity to Hot/Cold liquids' },
    { id: 'throbbing', label: 'Sharp throbbing toothache or pain while chewing' },
    { id: 'aesthetic', label: 'No pain, purely want to enhance smile aesthetics' },
    { id: 'gums', label: 'Occasional bleeding gums or bad breath' },
    { id: 'missing', label: 'Difficulty chewing due to gap/missing tooth' },
  ];

  const timelineOptions = [
    { id: 'immediate', label: 'Immediate / Next 24–48 Hours (Urgent Care)' },
    { id: 'weekend', label: 'This Weekend (Saturday / Sunday Consultation)' },
    { id: 'convenient', label: 'Within the next 1–2 weeks (Flexible slot)' },
  ];

  const handleSelectGoal = (id: string) => {
    setAnswers(prev => ({ ...prev, goal: id }));
    setCurrentStep(2);
  };

  const handleSelectSymptom = (id: string) => {
    setAnswers(prev => ({ ...prev, symptom: id }));
    setCurrentStep(3);
  };

  const handleSelectTimeline = (id: string) => {
    setAnswers(prev => ({ ...prev, timeline: id }));
    setIsCompleted(true);
  };

  const resetQuiz = () => {
    setCurrentStep(1);
    setAnswers({ goal: '', symptom: '', timeline: '' });
    setIsCompleted(false);
  };

  const getRecommendation = () => {
    if (answers.goal === 'rct' || answers.symptom === 'throbbing') {
      return {
        title: "Painless Single-Sitting Rotary RCT & Emergency Evaluation",
        serviceId: "root-canal-treatment",
        desc: "Based on your symptoms, our urgent priority is eradicating nerve inflammation and relieving discomfort in a single 40-minute comfortable session using computerized apex locators.",
        doctorTip: "Avoid hot fluids and do not place aspirin on the gum. Dr. Akansha will perform a digital radiograph upon arrival.",
        badge: "Priority Care Recommended"
      };
    } else if (answers.goal === 'aligners') {
      return {
        title: "3D Digital Clear Aligner Smile Consultation",
        serviceId: "invisible-aligners",
        desc: "You are an excellent candidate for customized Invisible Aligners. You will receive an instant 3D scan and a computerized simulation of your future smile before starting.",
        doctorTip: "Aligners are 100% removable for dining with zero wire cuts.",
        badge: "Aesthetic Alignment Recommended"
      };
    } else if (answers.goal === 'implants' || answers.symptom === 'missing') {
      return {
        title: "Precision Swiss Titanium Dental Implant Planning",
        serviceId: "dental-implants",
        desc: "Replacing missing teeth restores chewing strength and prevents facial bone recession. Dr. Akansha provides computer-guided implant planning with life-long durability.",
        doctorTip: "Restores 100% natural chewing force with zero damage to adjacent teeth.",
        badge: "Permanent Restorative Care"
      };
    } else if (answers.goal === 'pediatric') {
      return {
        title: "Gentle Pediatric Smile Wellness & Fluoride Protection",
        serviceId: "pediatric-dentistry",
        desc: "Our fear-free pediatric protocol includes gentle cavity checks, enamel-strengthening fluoride coatings, and a playful positive experience.",
        doctorTip: "Early checkups build lifelong dental confidence for your child.",
        badge: "Family & Child Friendly"
      };
    } else {
      return {
        title: "Artisan Smile Design & Laser Whitening Assessment",
        serviceId: "cosmetic-dentistry",
        desc: "We will evaluate your enamel translucency, tooth proportions, and shade to formulate a tailored smile makeover using E-max veneers or in-office LED laser whitening.",
        doctorTip: "Designed specifically to match your facial anatomy and skin tone.",
        badge: "Cosmetic Makeover Recommended"
      };
    }
  };

  const rec = getRecommendation();

  return (
    <section id="smile-quiz" className="py-16 md:py-24 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-xs uppercase font-bold tracking-widest text-gold-700 mb-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-100/70 border border-gold-200">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Interactive Smile Assessment</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-luxuryDark-950 mt-2">
            Find Your Ideal Treatment Plan
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Answer 3 quick questions to receive an instant personalized recommendation from Dr. Akansha Srivastava.
          </p>
        </div>

        {/* Quiz Container Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-luxury border border-sand-200 relative">
          
          {!isCompleted ? (
            <div>
              {/* Progress Steps Header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-sand-200">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-luxuryDark-950 text-gold-300 font-bold text-xs flex items-center justify-center">
                    {currentStep}
                  </span>
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Step {currentStep} of 3
                  </span>
                </div>
                <div className="flex gap-1.5">
                  {[1, 2, 3].map((step) => (
                    <div
                      key={step}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        step <= currentStep ? 'w-8 bg-gold-500' : 'w-4 bg-sand-200'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Step 1: Goal */}
              {currentStep === 1 && (
                <div className="animate-fadeIn">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                    What is your primary dental or smile goal?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mb-6">
                    Select the option that best describes what you are looking for.
                  </p>

                  <div className="space-y-3">
                    {goalOptions.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => handleSelectGoal(opt.id)}
                        className="w-full text-left p-4 rounded-2xl bg-sand-50/60 hover:bg-gold-50 hover:border-gold-300 border border-sand-200 transition-all duration-200 flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-3.5">
                          <span className="text-2xl">{opt.icon}</span>
                          <div>
                            <span className="font-bold text-slate-900 text-sm sm:text-base block group-hover:text-gold-800 transition-colors">
                              {opt.label}
                            </span>
                            <span className="text-xs text-slate-500">
                              {opt.desc}
                            </span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-sand-400 group-hover:text-gold-600 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Symptoms */}
              {currentStep === 2 && (
                <div className="animate-fadeIn">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                    Have you experienced any of these symptoms recently?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mb-6">
                    This helps Dr. Akansha prepare relevant diagnostic tools for your visit.
                  </p>

                  <div className="space-y-3">
                    {symptomOptions.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => handleSelectSymptom(opt.id)}
                        className="w-full text-left p-4 rounded-2xl bg-sand-50/60 hover:bg-gold-50 hover:border-gold-300 border border-sand-200 transition-all duration-200 flex items-center justify-between group"
                      >
                        <span className="font-medium text-slate-800 text-sm sm:text-base group-hover:text-gold-900">
                          {opt.label}
                        </span>
                        <ArrowRight className="w-4 h-4 text-sand-400 group-hover:text-gold-600 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between pt-4 border-t border-sand-200">
                    <button
                      onClick={() => setCurrentStep(1)}
                      className="text-xs font-semibold text-slate-500 hover:text-slate-800"
                    >
                      ← Back to Step 1
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Timeline */}
              {currentStep === 3 && (
                <div className="animate-fadeIn">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                    When would you prefer to visit Sector 38 Gurgaon?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mb-6">
                    We reserve dedicated zero-wait consultation slots.
                  </p>

                  <div className="space-y-3">
                    {timelineOptions.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => handleSelectTimeline(opt.id)}
                        className="w-full text-left p-4 rounded-2xl bg-sand-50/60 hover:bg-gold-50 hover:border-gold-300 border border-sand-200 transition-all duration-200 flex items-center justify-between group"
                      >
                        <span className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-gold-800">
                          {opt.label}
                        </span>
                        <ArrowRight className="w-4 h-4 text-sand-400 group-hover:text-gold-600 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between pt-4 border-t border-sand-200">
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="text-xs font-semibold text-slate-500 hover:text-slate-800"
                    >
                      ← Back to Step 2
                    </button>
                  </div>
                </div>
              )}

            </div>
          ) : (
            /* Result Screen */
            <div className="animate-fadeIn">
              <div className="text-center pb-6 border-b border-sand-200">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold mb-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  {rec.badge}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-luxuryDark-950">
                  {rec.title}
                </h3>
              </div>

              <div className="py-6 space-y-4">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {rec.desc}
                </p>

                <div className="p-4 rounded-2xl bg-sand-50 border border-sand-200 text-xs sm:text-sm text-slate-800 flex items-start gap-3">
                  <Award className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold mb-0.5">Doctor's Clinical Insight:</strong>
                    <span>{rec.doctorTip}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => onOpenBooking(rec.serviceId)}
                  className="flex-1 py-3.5 px-5 rounded-xl bg-luxuryDark-950 hover:bg-gold-600 text-gold-300 hover:text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 border border-gold-500/30"
                >
                  <Calendar className="w-4 h-4 text-gold-400" />
                  <span>Confirm Priority Consultation Slot</span>
                </button>

                <a
                  href={`https://wa.me/${CLINIC_DATA.whatsapp}?text=Hi%20Dr.%20Akansha,%20I%20completed%20the%20Smile%20Assessment%20on%20your%20website.%20My%20recommended%20treatment%20is:%20${encodeURIComponent(rec.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </a>
              </div>

              <div className="mt-4 text-center">
                <button
                  onClick={resetQuiz}
                  className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-slate-700 transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Retake Assessment</span>
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
