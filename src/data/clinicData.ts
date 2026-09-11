import { ClinicMeta, DoctorInfo, ServiceItem, Testimonial, BeforeAfterCase, FAQItem } from '../types';

export const CLINIC_DATA: ClinicMeta = {
  name: "Dr Kiruthika Asokan's Dental Clinic",
  tagline: "Orthodontics, Root Canal Treatment (RCT) & Dental Implants • Porur, Chennai",
  doctor: "Dr. Kiruthika Asokan",
  address: {
    line1: "71-A, 1st St, behind Grand Residence",
    line2: "Karambakkam, Rajeswari Nagar",
    area: "Porur",
    city: "Chennai, Tamil Nadu",
    pincode: "600116",
    full: "71-A, 1st St, behind Grand Residence, Karambakkam, Rajeswari Nagar, Porur, Chennai, Tamil Nadu 600116",
    landmark: "Behind Grand Residence, 1st Street, Karambakkam, Porur"
  },
  phones: ["091713 33368"],
  whatsapp: "91917133368",
  email: "care@drkiruthikadental.com",
  timings: {
    days: "Monday – Saturday: 10:00 AM – 8:30 PM",
    hours: "10:00 AM – 8:30 PM",
    sunday: "Sunday: By Prior Appointment",
    emergency: "24/7 Urgent Dental Consultation"
  },
  amenities: [
    {
      title: "Women-Led Practice",
      desc: "Compassionate, gentle care and meticulous dental precision spearheaded by Dr. Kiruthika Asokan.",
      icon: "HeartHandshake"
    },
    {
      title: "Easy Parking & Access",
      desc: "Convenient location behind Grand Residence in Karambakkam, Porur with hassle-free parking.",
      icon: "Car"
    },
    {
      title: "Wheelchair Accessible",
      desc: "Barrier-free ground access with dedicated patient assistance for smooth mobility.",
      icon: "Accessibility"
    },
    {
      title: "Class-B Autoclave Sterilization",
      desc: "Hospital-grade multi-tier sterilization protocols ensuring 100% infection-free safety standards.",
      icon: "ShieldCheck"
    },
    {
      title: "Zero-Wait Appointments",
      desc: "Dedicated time slots reserved exclusively for you with minimal waiting in our calming lounge.",
      icon: "Clock"
    },
    {
      title: "Modern Hygienic Clinic",
      desc: "Immaculately maintained private sanitation and comfortable patient care amenities.",
      icon: "Sparkles"
    }
  ]
};

export const DOCTOR_DATA: DoctorInfo = {
  name: "Dr. Kiruthika Asokan",
  title: "BDS | Dental Surgeon, Orthodontics, RCT & Implant Specialist",
  clinicRole: "Founder & Chief Dental Surgeon",
  experience: "5.0 ★ Google Rated Specialist (139 Reviews)",
  qualifications: [
    "Bachelor of Dental Surgery (BDS)",
    "Specialist Training in Orthodontics & Clear Aligners",
    "Certified Rotary Endodontics & Single-Sitting RCT Specialist",
    "Advanced Certificate in Implantology & Restorative Dentistry"
  ],
  philosophy: "We believe dentistry should be compassionate, gentle, and transparent. Our priority is to preserve natural teeth while delivering world-class orthodontic alignment, painless root canal treatments, and long-lasting dental implants in Porur, Chennai.",
  specialties: [
    "Orthodontics & Clear Aligners",
    "Painless Rotary Root Canal Treatment (RCT)",
    "Precision Dental Implants & Crowns",
    "Cosmetic Smile Design & Whitening",
    "Preventive & Pediatric Dental Care"
  ],
  bio: [
    "Dr. Kiruthika Asokan is a highly respected Dental Surgeon in Porur, Chennai, renowned for her gentle clinical demeanor, ethical practice, and exceptional success in orthodontics, root canal treatments, and implants.",
    "With a 5.0 ★ Google rating backed by 139+ verified patient reviews, Dr. Kiruthika Asokan prioritizes conservative dentistry—focusing on saving natural tooth structures and providing pain-free treatments.",
    "At Dr Kiruthika Asokan's Dental Clinic behind Grand Residence in Karambakkam, Porur, she has curated a warm, sterile, and patient-first environment where every dental procedure is conducted with complete clarity and care."
  ],
  image: "/doctor-image.png"
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "orthodontics",
    title: "Orthodontics & Clear Aligners",
    subtitle: "Teeth alignment, metal/ceramic braces & invisible aligners",
    category: "aligners",
    description: "Expert orthodontic solutions for children and adults. Correct misaligned teeth, gaps, and bite issues with modern braces and transparent clear aligners.",
    benefits: [
      "Specialized orthodontic treatment planning",
      "Tooth-colored ceramic & discreet metal braces",
      "Custom 3D transparent invisible aligners",
      "Improves long-term biting & facial symmetry"
    ],
    duration: "6 - 14 Months",
    painLevel: "Gentle Care",
    idealFor: "Crooked teeth, gaps, crowding, overbites & underbites",
    iconName: "Smile",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=900",
    featured: true
  },
  {
    id: "root-canal-treatment",
    title: "Root Canal Treatment (RCT)",
    subtitle: "Painless rotary RCT preserving your natural tooth",
    category: "rct",
    description: "Experience modern painless rotary endodontics. Eradicate deep tooth infections, relieve severe pain, and protect your natural tooth structure.",
    benefits: [
      "Painless procedure under localized anesthesia",
      "Single-sitting rotary endodontics",
      "Hermetic 3D sealing preventing re-infection",
      "Protected with high-strength ceramic crown"
    ],
    duration: "40 - 50 Minutes",
    painLevel: "Painless / Zero Discomfort",
    idealFor: "Severe toothache, deep decay, nerve infection, thermal sensitivity",
    iconName: "ShieldAlert",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=900",
    featured: true
  },
  {
    id: "dental-implants",
    title: "Dental Implants & Tooth Replacement",
    subtitle: "Permanent, bio-compatible replacements for missing teeth",
    category: "implants",
    description: "Restore 100% natural chewing strength and jawbone health with premium dental implants. Look, feel, and function just like natural teeth.",
    benefits: [
      "Computer-guided precision implant placement",
      "Bio-compatible titanium root replacement",
      "Prevents facial bone recession",
      "Natural shade-matched CAD/CAM crowns"
    ],
    duration: "Planned Phases",
    painLevel: "Minimal (Local Anesthesia)",
    idealFor: "Single or multiple missing teeth, loose dentures",
    iconName: "Anchor",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=900",
    featured: true
  },
  {
    id: "cosmetic-dentistry",
    title: "Cosmetic Dentistry & Smile Design",
    subtitle: "Bespoke smile makeovers tailored to your features",
    category: "cosmetic",
    description: "Enhance your smile with teeth whitening, composite bonding, and ceramic veneers. Designed to reflect natural translucency and luminescence.",
    benefits: [
      "Digital smile designing preview",
      "In-office teeth whitening laser treatment",
      "Stain-resistant porcelain veneers",
      "Non-invasive enamel preservation"
    ],
    duration: "1 - 2 Visits",
    painLevel: "Painless / Zero Discomfort",
    idealFor: "Discolored, chipped, uneven, or spaced teeth",
    iconName: "Sparkles",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=900",
    featured: true
  },
  {
    id: "teeth-cleaning",
    title: "Teeth Cleaning & Scaling",
    subtitle: "Ultrasonic tartar removal & gum care maintenance",
    category: "general",
    description: "Professional scaling and polishing to eliminate tartar, plaque, and surface stains while boosting gum health and breath freshness.",
    benefits: [
      "Gentle ultrasonic plaque & calculus removal",
      "Polishing for smooth, stain-free enamel",
      "Gum inflammation prevention",
      "Quick 30-minute procedure"
    ],
    duration: "30 Minutes",
    painLevel: "Painless / Zero Discomfort",
    idealFor: "Bleeding gums, plaque buildup, routine 6-month checkups",
    iconName: "Zap",
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=900"
  },
  {
    id: "pediatric-dentistry",
    title: "Pediatric & Family Dental Care",
    subtitle: "Gentle, fear-free dentistry for kids and families",
    category: "pediatric",
    description: "We turn dental visits into positive experiences for children with gentle fillings, preventive sealants, and friendly oral care guidance.",
    benefits: [
      "Child-first playful & patient approach",
      "Painless fluoride application & sealants",
      "Early orthodontic growth evaluation",
      "Family-friendly consultation environment"
    ],
    duration: "30 Minutes",
    painLevel: "Gentle Care",
    idealFor: "Children, teenagers, and family dental checkups",
    iconName: "Baby",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=900"
  }
];

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: "case-1",
    title: "Orthodontic Alignment & Diastema Closure",
    treatment: "Orthodontics",
    description: "Correction of anterior gap and tooth crowding using clear aligners under Dr. Kiruthika Asokan's specialized care.",
    duration: "Completed in 7 Months",
    beforeImage: "/cases/aligner_before.jpg",
    afterImage: "/cases/aligner_after.jpg",
    highlights: ["100% wireless aligners", "Perfect arch symmetry", "Discreet & comfortable"]
  },
  {
    id: "case-2",
    title: "Single-Sitting RCT & Zirconia Crown",
    treatment: "Root Canal Treatment",
    description: "Preservation of severely infected molar with rotary root canal therapy and CAD/CAM ceramic crown restoration.",
    duration: "Completed in 2 Sittings",
    beforeImage: "/cases/veneer_before.jpg",
    afterImage: "/cases/veneer_after.jpg",
    highlights: ["Complete pain relief", "Natural shade matching", "Full masticatory strength"]
  },
  {
    id: "case-3",
    title: "Dental Implant Premolar Restoration",
    treatment: "Dental Implants",
    description: "Replacement of missing tooth with precision titanium implant and porcelain crown.",
    duration: "Planned Implant Rehabilitation",
    beforeImage: "/cases/implant_before.jpg",
    afterImage: "/cases/implant_after.jpg",
    highlights: ["Restored biting power", "Identical to natural teeth", "Long-lasting durability"]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "rev-1",
    author: "Kavitha Sundaram",
    location: "Porur, Chennai",
    treatment: "Root Canal Treatment & Crown",
    rating: 5,
    comment: "Dr. Kiruthika Asokan is an amazing dentist in Porur! I was terrified of getting a Root Canal, but she made the entire procedure 100% painless. Her clinic behind Grand Residence is spotless and so comforting. Highly recommend!",
    date: "2 weeks ago",
    verified: true,
    avatarBg: "bg-emerald-700"
  },
  {
    id: "rev-2",
    author: "Rajesh Kumar",
    location: "Karambakkam, Porur",
    treatment: "Orthodontic Braces",
    rating: 5,
    comment: "Got my teeth alignment treatment done here. Dr. Kiruthika Asokan explains everything clearly and patiently. 5.0 star treatment quality and prompt appointments with zero waiting time!",
    date: "1 month ago",
    verified: true,
    avatarBg: "bg-amber-700"
  },
  {
    id: "rev-3",
    author: "Deepa Ramachandran",
    location: "Ramapuram, Chennai",
    treatment: "Dental Implant Procedure",
    rating: 5,
    comment: "Extremely satisfied with the dental implant done by Dr. Kiruthika Asokan. Very gentle surgeon, ethical pricing, and superior sterilization standards. Best dental clinic in Porur!",
    date: "3 weeks ago",
    verified: true,
    avatarBg: "bg-teal-700"
  },
  {
    id: "rev-4",
    author: "Senthil Nathan",
    location: "Valasaravakkam, Chennai",
    treatment: "Painless RCT & Dental Scaling",
    rating: 5,
    comment: "Visited for severe toothache. Dr. Kiruthika Asokan provided immediate relief on the same day. Transparent pricing with no unnecessary treatments pushed. 5.0 Google rating is genuinely deserved.",
    date: "2 months ago",
    verified: true,
    avatarBg: "bg-blue-800"
  },
  {
    id: "rev-5",
    author: "Priya Venkatesh",
    location: "Rajeswari Nagar, Porur",
    treatment: "Pediatric Dental Checkup",
    rating: 5,
    comment: "Took my 7-year-old son for cavity treatment. Dr. Kiruthika Asokan was so soft-spoken and friendly that my child didn't cry at all! Wonderful experience for kids and families.",
    date: "1 month ago",
    verified: true,
    avatarBg: "bg-rose-700"
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    category: "General & Appointments",
    question: "Do I need to book an appointment beforehand at Dr Kiruthika Asokan's Dental Clinic?",
    answer: "Prior appointment booking is recommended to ensure zero waiting time and dedicated unhurried attention with Dr. Kiruthika Asokan. Urgent dental emergencies are attended to with immediate priority."
  },
  {
    category: "Treatments & Pain",
    question: "Are Root Canal Treatments (RCT) painless?",
    answer: "Yes, absolutely. We utilize modern rotary endodontics and local numbing techniques so that RCT procedures are comfortable and painless."
  },
  {
    category: "Orthodontics & Implants",
    question: "What orthodontic and implant services are available?",
    answer: "Dr. Kiruthika Asokan provides comprehensive Orthodontic care (braces and clear aligners) as well as computer-guided Dental Implants for missing teeth replacement."
  },
  {
    category: "Location & Access",
    question: "Where is Dr Kiruthika Asokan's Dental Clinic located in Porur?",
    answer: "We are located at 71-A, 1st St, behind Grand Residence, Karambakkam, Rajeswari Nagar, Porur, Chennai, Tamil Nadu 600116. On-site parking and ground-level wheelchair access are available."
  },
  {
    category: "Cost & Transparency",
    question: "Is the treatment pricing transparent?",
    answer: "Yes, we practice 100% ethical and transparent dentistry. After evaluation, Dr. Kiruthika Asokan provides a clear treatment plan with fixed pricing and zero hidden fees."
  }
];
