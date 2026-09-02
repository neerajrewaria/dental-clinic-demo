import React, { useState } from 'react';
import { FAQS_DATA } from '../data/clinicData';
import { ChevronDown, HelpCircle, PhoneCall, MessageCircle } from 'lucide-react';
import { CLINIC_DATA } from '../data/clinicData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 md:py-24 bg-white border-t border-sand-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-gold-700 mb-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-50 border border-gold-200">
            <HelpCircle className="w-3.5 h-3.5 text-gold-600" />
            <span>Common Patient Inquiries</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-luxuryDark-950 mt-2">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Transparent answers to help you prepare for your visit to Neha Dental Clinic.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-3">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-sand-200 overflow-hidden transition-all duration-200 bg-[#FAF8F5]"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-bold text-luxuryDark-950 hover:text-gold-700 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 border border-sand-200 text-gold-600 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-gold-50' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-sand-200/60 bg-white/60 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions prompt */}
        <div className="mt-10 p-6 rounded-3xl bg-sand-50 border border-sand-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-slate-900 text-sm sm:text-base">
              Have a specific question about your dental concern?
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Speak directly with our clinic coordinator or message Dr. Akansha.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${CLINIC_DATA.phones[0].replace(/\s+/g, '')}`}
              className="px-4 py-2.5 rounded-xl bg-white hover:bg-gold-50 border border-sand-300 text-slate-800 text-xs font-bold transition-colors flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-gold-600" />
              <span>Call Clinic</span>
            </a>
            <a
              href={`https://wa.me/${CLINIC_DATA.whatsapp}?text=Hello%20Dr.%20Akansha,%20I%20have%20a%20question%20regarding%20dental%20treatments.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
