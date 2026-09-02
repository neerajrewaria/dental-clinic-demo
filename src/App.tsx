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

export const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceId?: string) => {
    setPreselectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setPreselectedServiceId(undefined);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-slate-900 selection:bg-gold-500 selection:text-white flex flex-col">
      {/* Top Header */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section - Wow First Impression */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Trust Stats & Amenities */}
        <TrustStats />

        {/* 3. Meet Dr. Akansha Srivastava */}
        <DoctorSpotlight onOpenBooking={() => handleOpenBooking()} />

        {/* 4. Treatments & Procedures Grid */}
        <ServicesGrid onOpenBooking={handleOpenBooking} />

        {/* 5. Before & After Interactive Transformations */}
        <SmileTransformationSlider onOpenBooking={() => handleOpenBooking()} />

        {/* 6. Interactive Smile Assessment Quiz */}
        <SmileAssessmentQuiz onOpenBooking={handleOpenBooking} />

        {/* 7. Patient Experience Journey */}
        <PatientExperienceJourney />

        {/* 8. Emergency Dental Care Banner */}
        <EmergencyCareBanner onOpenBooking={handleOpenBooking} />

        {/* 9. Inside the Clinic Gallery */}
        <ClinicGallery />

        {/* 10. Patient Reviews & Google Ratings */}
        <ReviewsSection />

        {/* 11. Location, Map & Timings */}
        <LocationContact onOpenBooking={() => handleOpenBooking()} />

        {/* 12. FAQ Section */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Mobile Sticky Action Bar */}
      <MobileStickyBar onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedServiceId={preselectedServiceId}
      />
    </div>
  );
};

export default App;
