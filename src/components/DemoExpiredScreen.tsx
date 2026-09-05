import React from 'react';
import { Lock, Sparkles, Clock, ShieldAlert } from 'lucide-react';
import { DEMO_CONFIG } from '../config/demoAccess';

export const DemoExpiredScreen: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-[#080B10] text-slate-100 flex flex-col justify-between items-center relative overflow-hidden font-sans select-none px-4 py-8 sm:py-12">
      
      {/* Ambient Luxury Background Lights */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-gold-500/10 via-gold-600/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] left-1/4 w-[450px] h-[450px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-[-5%] w-[400px] h-[400px] bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" 
      />

      {/* Top Clinic Branding Badge */}
      <header className="relative z-10 w-full max-w-4xl flex items-center justify-between pt-2 pb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/10 p-1.5 border border-white/15 backdrop-blur-md shadow-lg flex items-center justify-center shrink-0 overflow-hidden">
            <img 
              src="/logo.png" 
              alt="Vrinda Dental Clinic Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-gold-400 block">
              Presentation Concept
            </span>
            <span className="text-xs sm:text-sm font-serif font-bold text-white/90">
              {DEMO_CONFIG.clinicName}
            </span>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-slate-400 backdrop-blur-sm">
          <Clock className="w-3.5 h-3.5 text-gold-400" />
          <span>Access Restricted</span>
        </div>
      </header>

      {/* Main Glass Card */}
      <main className="relative z-10 w-full max-w-xl my-auto animate-fadeIn">
        <div className="relative rounded-3xl p-8 sm:p-11 bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/15 backdrop-blur-2xl shadow-2xl shadow-black/80 text-center overflow-hidden">
          
          {/* Subtle Top Glowing Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />

          {/* Secure Lock Icon Badge */}
          <div className="relative mx-auto mb-6 w-20 h-20 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-900/30 border border-gold-400/40 shadow-inner flex items-center justify-center group">
            <div className="absolute inset-0 rounded-2xl bg-gold-400/10 blur-md animate-pulse" />
            <div className="relative flex items-center justify-center">
              <Lock className="w-9 h-9 text-gold-300 drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)]" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-slate-900 border border-gold-400/50 flex items-center justify-center">
              <ShieldAlert className="w-3.5 h-3.5 text-gold-400" />
            </div>
          </div>

          {/* Security Status Tag */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-400/10 border border-gold-400/25 text-gold-300 text-xs font-semibold tracking-wide uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Demonstration Notice</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
            🔒 Demo Access Expired
          </h1>

          {/* Primary Message */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
            This demo website was created exclusively for presentation purposes, and the access period has now expired.
          </p>

          {/* Secondary Message Box */}
          <div className="rounded-2xl p-4 sm:p-5 bg-black/40 border border-white/10 backdrop-blur-sm text-center mb-7">
            <p className="text-gold-200/90 text-xs sm:text-sm font-medium leading-relaxed">
              To regain access to this demo, please contact the developer to extend the access time.
            </p>
          </div>

          {/* Developer Attribution Card */}
          <div className="flex items-center justify-center gap-3 pt-3 border-t border-white/10 text-xs text-slate-400">
            <span>Demonstration Concept</span>
            <span className="w-1 h-1 rounded-full bg-gold-400/60" />
            <span className="font-bold text-gold-300 tracking-wide">
              {DEMO_CONFIG.developerName}
            </span>
          </div>

        </div>
      </main>

      {/* Footer Notice & Professional Credit */}
      <footer className="relative z-10 w-full max-w-4xl text-center pt-6 pb-2 border-t border-white/5 space-y-2">
        <p className="text-xs sm:text-sm text-slate-400 font-medium">
          Thank you for viewing this website concept.
        </p>
        <p className="text-[11px] sm:text-xs text-slate-500 font-semibold uppercase tracking-widest">
          Demo Website Created by <span className="text-gold-400/90 font-bold">{DEMO_CONFIG.developerName}</span>
        </p>
      </footer>

    </div>
  );
};
