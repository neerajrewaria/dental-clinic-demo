import React, { useState, useEffect } from 'react';
import { CLINIC_DATA } from '../data/clinicData';
import { 
  Phone, 
  MapPin, 
  Calendar, 
  Menu, 
  X, 
  Clock, 
  MessageCircle,
  User,
  Sparkles,
  Layers,
  HelpCircle,
  HeartHandshake,
  Star,
  ChevronRight
} from 'lucide-react';

interface HeaderProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { 
      name: 'About Doctor', 
      subtitle: 'Dr. Manju Sharma & Philosophy', 
      href: '#doctor',
      icon: <User className="w-5 h-5 text-gold-600" />
    },
    { 
      name: 'Treatments & Procedures', 
      subtitle: 'Rotary RCT, Implants, Aligners & Veneers', 
      href: '#treatments',
      icon: <Sparkles className="w-5 h-5 text-gold-600" />
    },
    { 
      name: 'Smile Transformations', 
      subtitle: 'Interactive Before & After Case Studies', 
      href: '#transformations',
      icon: <Layers className="w-5 h-5 text-gold-600" />
    },
    { 
      name: 'Interactive Smile Quiz', 
      subtitle: '3-Step AI Self-Assessment Tool', 
      href: '#smile-quiz',
      icon: <HelpCircle className="w-5 h-5 text-gold-600" />
    },
    { 
      name: 'Patient Experience', 
      subtitle: 'Zero-Wait, Painless Care Journey', 
      href: '#journey',
      icon: <HeartHandshake className="w-5 h-5 text-gold-600" />
    },
    { 
      name: 'Patient Reviews', 
      subtitle: '4.9★ Google Ratings from Gurgaon', 
      href: '#reviews',
      icon: <Star className="w-5 h-5 text-gold-600" />
    },
    { 
      name: 'Location & Hours', 
      subtitle: 'Mata Rd, Opp. Mamta Hospital, Sector 13', 
      href: '#location',
      icon: <MapPin className="w-5 h-5 text-gold-600" />
    },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Luxury Announcement Ribbon */}
      <div className="bg-luxuryDark-950 text-sand-300 text-xs py-2 px-4 border-b border-white/5 relative z-40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-medium border border-emerald-500/20 text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Clinic Open Today
            </span>
            <span className="hidden md:inline-block text-sand-400">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-sand-300">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              Mata Rd, Opp. Mamta Hospital, Sector 13, Gurugram
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <a 
              href={`tel:${CLINIC_DATA.phones[0].replace(/\s+/g, '')}`} 
              className="flex items-center gap-1.5 text-sand-200 hover:text-gold-300 transition-colors"
            >
              <Phone className="w-3 h-3 text-gold-400" />
              <span>Call: <strong className="text-white font-semibold">{CLINIC_DATA.phones[0]}</strong></span>
            </a>
            <span className="text-white/20">|</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-sand-300">
              <Clock className="w-3 h-3 text-gold-400" />
              10:00 AM – 8:00 PM
            </span>
          </div>
        </div>
      </div>

      {/* Main Luxury Header */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/98 backdrop-blur-md shadow-luxury py-3 border-b border-sand-200/80' 
            : 'bg-[#FAF8F5]/95 backdrop-blur-sm py-4 border-b border-sand-200/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Clinic Brand Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white p-1.5 shadow-md border border-sand-200/90 group-hover:scale-105 transition-transform flex items-center justify-center shrink-0 overflow-hidden">
              <img 
                src="/logo.png" 
                alt="Vrinda Dental Clinic Official Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-luxuryDark-950 leading-tight">
                VRINDA DENTAL CLINIC
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-gold-700 font-semibold flex items-center gap-1">
                Dr. Manju Sharma <span className="text-sand-400">•</span> Gurugram
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-700 hover:text-gold-600 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${CLINIC_DATA.whatsapp}?text=Hello%20Dr.%20Manju,%20I%20would%20like%20to%20inquire%20about%20a%20dental%20consultation%20at%20Vrinda%20Dental%20Clinic.`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-sand-300/80 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300 transition-all flex items-center justify-center"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-5 h-5 text-emerald-600" />
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="relative group overflow-hidden rounded-xl bg-luxuryDark-950 text-white px-5 py-2.5 text-sm font-semibold shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-2 border border-gold-500/20"
            >
              <span className="relative z-10 flex items-center gap-2 text-gold-300 group-hover:text-white transition-colors">
                <Calendar className="w-4 h-4 text-gold-400" />
                Book Appointment
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-600 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile Action & Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="px-3.5 py-2 rounded-xl bg-luxuryDark-950 text-gold-300 text-xs font-bold flex items-center gap-1.5 border border-gold-500/30 shadow-sm active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5 text-gold-400" />
              <span>Book</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-xl bg-white border border-sand-200 text-slate-800 hover:bg-sand-100 transition-colors focus:outline-none shadow-sm active:scale-95"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-6 h-6 text-slate-900" />
            </button>
          </div>

        </div>
      </header>

      {/* FULL SCREEN LUXURY MOBILE NAVIGATION DRAWER (100% Opaque & Solid) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="fixed inset-y-0 right-0 w-full max-w-md bg-[#FAF8F5] shadow-2xl flex flex-col justify-between overflow-hidden animate-slideLeft border-l border-sand-300">
            
            {/* Drawer Top Header */}
            <div className="p-5 bg-white border-b border-sand-200 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sand-50 p-1 border border-sand-200 shadow-sm flex items-center justify-center overflow-hidden shrink-0">
                  <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-luxuryDark-950 leading-tight">
                    VRINDA DENTAL CLINIC
                  </h3>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-gold-700">
                    Dr. Manju Sharma • Sector 13
                  </span>
                </div>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-9 h-9 rounded-xl bg-sand-100 hover:bg-sand-200 text-slate-700 flex items-center justify-center transition-colors border border-sand-200 shadow-sm"
                aria-label="Close Navigation Menu"
              >
                <X className="w-5 h-5 text-slate-900" />
              </button>
            </div>

            {/* Navigation Cards Scroll Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
              <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500 px-1 mb-2">
                Explore Clinic & Care
              </div>

              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  onClick={handleNavClick}
                  className="p-3.5 rounded-2xl bg-white hover:bg-gold-50/80 active:bg-gold-100 border border-sand-200/90 shadow-sm flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-sand-50 group-hover:bg-white border border-sand-200 flex items-center justify-center shrink-0 shadow-sm transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm group-hover:text-gold-800 transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 group-hover:text-slate-700 transition-colors">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <ChevronRight className="w-4 h-4 text-sand-400 group-hover:text-gold-600 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                </a>
              ))}
            </div>

            {/* Drawer Bottom Quick Action Footer */}
            <div className="p-4 bg-white border-t border-sand-200 space-y-2.5 shadow-[0_-10px_20px_rgba(0,0,0,0.03)]">
              
              {/* Primary Consultation Trigger */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 px-4 rounded-2xl bg-luxuryDark-950 text-gold-300 font-bold text-sm flex items-center justify-center gap-2 shadow-md border border-gold-500/30 active:scale-98"
              >
                <Calendar className="w-4 h-4 text-gold-400" />
                <span>Book Priority Consultation</span>
              </button>

              {/* Call & WhatsApp Dual Buttons */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${CLINIC_DATA.phones[0].replace(/\s+/g, '')}`}
                  className="py-2.5 px-3 rounded-xl bg-sand-100 hover:bg-sand-200 text-slate-900 font-bold text-xs flex items-center justify-center gap-1.5 border border-sand-300 active:scale-95"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-800" />
                  <span>Call Doctor</span>
                </a>
                <a
                  href={`https://wa.me/${CLINIC_DATA.whatsapp}?text=Hello%20Dr.%20Manju,%20I%20would%20like%20to%20book%20an%20appointment%20at%20Vrinda%20Dental%20Clinic.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Address Indicator */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-sand-50 border border-sand-200 text-[11px] text-slate-600">
                <MapPin className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                <span className="truncate">Mata Rd, Opp. Mamta Hospital, Sector 13, Gurugram</span>
              </div>

            </div>

          </div>
        </div>
      )}
    </>
  );
};
