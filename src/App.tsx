import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { DoctorSpotlight } from './components/DoctorSpotlight';
import { ServicesGrid } from './components/ServicesGrid';
import { SmileTransformationSlider } from './components/SmileTransformationSlider';
import { SmileAssessmentQuiz } from './components/SmileAssessmentQuiz';
import { PatientExperienceJourney } from './components/PatientExperienceJourney';
import { EmergencyCareBanner } from './components/EmergencyCareBanner';
import { ClinicGallery } from './components/ClinicGallery';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationContact } from './components/LocationContact';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { AppointmentModal } from './components/AppointmentModal';
import { DemoNoticeModal } from './components/DemoNoticeModal';

export const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | undefined>(undefined);
  const [demoNoticeOpen, setDemoNoticeOpen] = useState<boolean>(false);
  const [demoNoticeMsg, setDemoNoticeMsg] = useState<string>('This feature will be available on the official website after launch.');

  const handleOpenBooking = (serviceId?: string) => {
    setPreselectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setPreselectedServiceId(undefined);
  };

  const handleDemoAction = (msg?: string) => {
    if (msg) {
      setDemoNoticeMsg(msg);
    } else {
      setDemoNoticeMsg('This feature will be available on the official website after launch.');
    }
    setDemoNoticeOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-slate-900 selection:bg-gold-500 selection:text-white flex flex-col">
      {/* Top Header */}
      <Header 
        onOpenBooking={handleOpenBooking} 
        onDemoAction={handleDemoAction}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section - Wow First Impression */}
        <Hero 
          onOpenBooking={() => handleOpenBooking()} 
          onDemoAction={handleDemoAction}
        />

        {/* 2. Trust Stats & Amenities */}
        <TrustStats />

        {/* 3. Meet Dr. Manju Sharma */}
        <DoctorSpotlight 
          onOpenBooking={() => handleOpenBooking()} 
          onDemoAction={handleDemoAction}
        />

        {/* 4. Treatments & Procedures Grid */}
        <ServicesGrid onOpenBooking={handleOpenBooking} />

        {/* 5. Before & After Interactive Transformations */}
        <SmileTransformationSlider onOpenBooking={() => handleOpenBooking()} />

        {/* 6. Interactive Smile Assessment Quiz */}
        <SmileAssessmentQuiz 
          onOpenBooking={handleOpenBooking} 
          onDemoAction={handleDemoAction}
        />

        {/* 7. Patient Experience Journey */}
        <PatientExperienceJourney />

        {/* 8. Emergency Dental Care Banner */}
        <EmergencyCareBanner 
          onOpenBooking={handleOpenBooking} 
          onDemoAction={handleDemoAction}
        />

        {/* 9. Inside the Clinic Gallery */}
        <ClinicGallery />

        {/* 10. Patient Reviews & Google Ratings */}
        <ReviewsSection />

        {/* 11. Location, Map & Timings */}
        <LocationContact 
          onOpenBooking={() => handleOpenBooking()} 
          onDemoAction={handleDemoAction}
        />

        {/* 12. FAQ Section */}
        <FAQSection onDemoAction={handleDemoAction} />
      </main>

      {/* Footer */}
      <Footer 
        onOpenBooking={handleOpenBooking} 
        onDemoAction={handleDemoAction}
      />

      {/* Mobile Sticky Action Bar */}
      <MobileStickyBar 
        onOpenBooking={() => handleOpenBooking()} 
        onDemoAction={handleDemoAction}
      />

      {/* Interactive Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedServiceId={preselectedServiceId}
        onDemoAction={handleDemoAction}
      />

      {/* Demo Mode Notification Modal */}
      <DemoNoticeModal
        isOpen={demoNoticeOpen}
        onClose={() => setDemoNoticeOpen(false)}
        message={demoNoticeMsg}
      />
    </div>
  );
};

export default App;
