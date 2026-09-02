export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'cosmetic' | 'implants' | 'rct' | 'aligners' | 'pediatric' | 'general' | 'emergency';
  description: string;
  benefits: string[];
  duration: string;
  painLevel: 'Painless / Zero Discomfort' | 'Minimal (Local Anesthesia)' | 'Gentle Care' | 'Immediate Pain Relief';
  idealFor: string;
  iconName: string;
  image: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  treatment: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  avatarBg: string;
}

export interface BeforeAfterCase {
  id: string;
  title: string;
  treatment: string;
  description: string;
  duration: string;
  beforeImage: string;
  afterImage: string;
  highlights: string[];
}

export interface DoctorInfo {
  name: string;
  title: string;
  clinicRole: string;
  experience: string;
  qualifications: string[];
  philosophy: string;
  specialties: string[];
  bio: string[];
  image: string;
}

export interface ClinicMeta {
  name: string;
  tagline: string;
  doctor: string;
  address: {
    line1: string;
    line2: string;
    area: string;
    city: string;
    pincode: string;
    full: string;
    landmark: string;
  };
  phones: string[];
  whatsapp: string;
  email: string;
  timings: {
    days: string;
    hours: string;
    sunday: string;
    emergency: string;
  };
  amenities: {
    title: string;
    desc: string;
    icon: string;
  }[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
