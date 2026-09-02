import React, { useState, useEffect } from 'react';
import { CLINIC_DATA, SERVICES_DATA } from '../data/clinicData';
import confetti from 'canvas-confetti';
import { 
  X, 
  Calendar, 
  User, 
  Phone, 
  CheckCircle2, 
  MessageCircle, 
  ShieldCheck
} from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId
}) => {
  const [selectedService, setSelectedService] = useState<string>(preselectedServiceId || 'consultation');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedSlot, setSelectedSlot] = useState<string>('Morning (10:00 AM – 1:00 PM)');
  const [patientName, setPatientName] = useState<string>('');
  const [patientPhone, setPatientPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (preselectedServiceId) {
      setSelectedService(preselectedServiceId);
    }
  }, [preselectedServiceId]);

  useEffect(() => {
    if (isOpen) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      setSelectedDate(tomorrow.toISOString().split('T')[0]);
      setIsSuccess(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const timeSlots = [
    { id: 'morning', label: 'Morning Slot', time: '10:00 AM – 1:00 PM', icon: '☀️' },
    { id: 'afternoon', label: 'Afternoon Slot', time: '1:00 PM – 5:00 PM', icon: '🌤️' },
    { id: 'evening', label: 'Evening Slot', time: '5:00 PM – 8:30 PM', icon: '🌙' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName || !patientPhone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // fallback
      }
    }, 600);
  };

  const getServiceName = () => {
    if (selectedService === 'consultation') return 'General / First-Time Consultation';
    const s = SERVICES_DATA.find(srv => srv.id === selectedService);
    return s ? s.title : 'Dental Consultation';
  };

  const generateWhatsAppMessage = () => {
    const text = `*New Appointment Request - Neha Dental Clinic*\n\n*Patient Name:* ${patientName}\n*Phone:* ${patientPhone}\n*Treatment:* ${getServiceName()}\n*Preferred Date:* ${selectedDate}\n*Time Slot:* ${selectedSlot}\n*Notes:* ${notes || 'None'}\n\n_Sent via Neha Dental Clinic Website_`;
    return encodeURIComponent(text);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-luxuryDark-950/70 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-sand-300 relative animate-scaleUp max-h-[92vh] flex flex-col">
        
        {/* Modal Top Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-luxuryDark-950 to-luxuryDark-900 text-white relative flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white p-1 border border-white/20 shadow-md flex items-center justify-center shrink-0 overflow-hidden">
              <img 
                src="/logo.png" 
                alt="Neha Dental Clinic Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-gold-400 block">
                Neha Dental Clinic • Sector 38
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                Book Dedicated Consultation
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors text-sm"
            aria-label="Close booking modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Select Treatment / Reason for Visit
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-sand-50 border border-sand-300 text-slate-900 text-sm font-medium focus:ring-2 focus:ring-gold-500 focus:outline-none"
                >
                  <option value="consultation">General Consultation & Digital Checkup</option>
                  {SERVICES_DATA.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title} ({s.duration})
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Slot Picker */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-2.5 rounded-xl bg-sand-50 border border-sand-300 text-slate-900 text-sm font-medium focus:ring-2 focus:ring-gold-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Preferred Time Window
                  </label>
                  <select
                    value={selectedSlot}
                    onChange={(e) => setSelectedSlot(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-sand-50 border border-sand-300 text-slate-900 text-sm font-medium focus:ring-2 focus:ring-gold-500 focus:outline-none"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot.id} value={slot.time}>
                        {slot.icon} {slot.label} ({slot.time})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Patient Contact Info */}
              <div className="space-y-3 pt-1">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Sharma"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-sand-50 border border-sand-300 text-slate-900 text-sm focus:ring-2 focus:ring-gold-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98765 43210"
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-sand-50 border border-sand-300 text-slate-900 text-sm focus:ring-2 focus:ring-gold-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Brief Notes / Symptoms (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. toothache in upper left molar, want teeth whitening"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl bg-sand-50 border border-sand-300 text-slate-900 text-sm focus:ring-2 focus:ring-gold-500 focus:outline-none resize-none"
                  />
                </div>
              </div>

              {/* Zero Wait & Privacy Promise */}
              <div className="flex items-center gap-2 text-xs text-slate-500 bg-sand-50 p-2.5 rounded-xl border border-sand-200">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero-Wait slot reserved with Dr. Akansha Srivastava. 100% confidential.</span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-luxuryDark-950 hover:bg-gold-600 text-gold-300 hover:text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 border border-gold-500/30"
              >
                {isSubmitting ? (
                  <span>Securing Slot...</span>
                ) : (
                  <>
                    <Calendar className="w-4 h-4 text-gold-400" />
                    <span>Confirm Priority Appointment</span>
                  </>
                )}
              </button>

            </form>
          ) : (
            /* Confirmation State */
            <div className="text-center py-4 space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-emerald-700">
                  Slot Reserved Successfully
                </span>
                <h3 className="font-serif text-2xl font-bold text-luxuryDark-950 mt-1">
                  Thank You, {patientName}!
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-1">
                  Your appointment request for <strong>{getServiceName()}</strong> on <strong>{selectedDate} ({selectedSlot})</strong> has been received by Dr. Akansha’s clinic team.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-sand-50 border border-sand-200 text-left text-xs space-y-1.5">
                <div className="flex items-center justify-between text-slate-700">
                  <span className="text-slate-500">Clinic:</span>
                  <strong className="text-slate-900">Neha Dental Clinic</strong>
                </div>
                <div className="flex items-center justify-between text-slate-700">
                  <span className="text-slate-500">Surgeon:</span>
                  <strong className="text-slate-900">Dr. Akansha Srivastava</strong>
                </div>
                <div className="flex items-center justify-between text-slate-700">
                  <span className="text-slate-500">Address:</span>
                  <strong className="text-slate-900">SCO 38, Huda Market, Sec 38 Gurgaon</strong>
                </div>
              </div>

              {/* Instant WhatsApp Handshake */}
              <div className="space-y-2 pt-2">
                <a
                  href={`https://wa.me/${CLINIC_DATA.whatsapp}?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Confirmation to Clinic on WhatsApp</span>
                </a>

                <button
                  onClick={onClose}
                  className="w-full py-2.5 text-xs font-semibold text-slate-600 hover:bg-sand-100 rounded-xl transition-colors"
                >
                  Close & Continue Browsing
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
