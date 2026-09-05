import React from 'react';
import { Sparkles, Info, X, CheckCircle } from 'lucide-react';

interface DemoNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

export const DemoNoticeModal: React.FC<DemoNoticeModalProps> = ({
  isOpen,
  onClose,
  title = "Demo Presentation Mode",
  message = "This feature will be available on the official website after launch."
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-sand-300 relative animate-scaleUp text-center">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-sand-100 hover:bg-sand-200 text-slate-700 flex items-center justify-center transition-colors"
          aria-label="Close Notice"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Icon Badge */}
        <div className="w-14 h-14 rounded-2xl bg-gold-50 border border-gold-200 text-gold-600 flex items-center justify-center mx-auto mb-4 shadow-sm">
          <Sparkles className="w-7 h-7" />
        </div>

        {/* Title */}
        <span className="text-[10px] uppercase font-bold tracking-widest text-gold-700 px-3 py-1 rounded-full bg-gold-50 border border-gold-200 inline-block mb-2">
          Website Concept Demo
        </span>
        <h3 className="font-serif text-xl font-bold text-luxuryDark-950 mb-2">
          {title}
        </h3>

        {/* Message */}
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {message}
        </p>

        {/* Informative Note */}
        <div className="p-3.5 rounded-2xl bg-sand-50 border border-sand-200 text-xs text-slate-500 mb-5 flex items-start gap-2 text-left">
          <Info className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
          <span>
            This website is a high-fidelity demonstration concept created by <strong>Neeraj</strong> for presentation purposes.
          </span>
        </div>

        {/* Primary Dismiss Button */}
        <button
          onClick={onClose}
          className="w-full py-3 px-5 rounded-xl bg-luxuryDark-950 text-gold-300 hover:text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 border border-gold-500/30"
        >
          <CheckCircle className="w-4 h-4 text-gold-400" />
          <span>Understood / Continue Exploring</span>
        </button>

      </div>
    </div>
  );
};
