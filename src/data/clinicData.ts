import { ClinicMeta, DoctorInfo, ServiceItem, Testimonial, BeforeAfterCase, FAQItem } from '../types';

export const CLINIC_DATA: ClinicMeta = {
  name: "Neha Dental Clinic",
  tagline: "Best Dentist in Gurgaon",
  doctor: "Dr. Akansha Srivastava",
  address: {
    line1: "SCO Shop No. 38, First Floor",
    line2: "Huda Market, Islampur Colony",
    area: "Sector 38",
    city: "Gurugram, Haryana",
    pincode: "122001",
    full: "SCO Shop No. 38, First Floor, Huda Market, Islampur Colony, Sector 38, Gurugram, Haryana – 122001",
    landmark: "Above Huda Market Commercial Complex, Next to Central Park Sector 38"
  },
  phones: ["070072 28830", "9450482005"],
  whatsapp: "917007228830",
  email: "care@nehadentalclinic.com",
  timings: {
    days: "Monday – Saturday: 10:00 AM – 8:30 PM",
    hours: "10:00 AM – 8:30 PM",
    sunday: "Sunday: 10:30 AM – 2:00 PM (By Prior Appointment)",
    emergency: "24/7 Dental Emergency On-Call Assistance"
  },
  amenities: [
    {
      title: "Woman-Owned Practice",
      desc: "Compassionate, gentle touch and meticulous aesthetic precision spearheaded by Dr. Akansha Srivastava.",
      icon: "HeartHandshake"
    },
    {
      title: "On-Site Private Parking",
      desc: "Hassle-free parking directly in front of the market complex with wheelchair ramp accessibility.",
      icon: "Car"
    },
    {
      title: "Wheelchair Accessible",
      desc: "Barrier-free access with lift/ramp assistance and wide clinic passageways for comfortable mobility.",
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
      title: "Hygienic Modern Restrooms",
      desc: "Immaculately maintained private sanitation and refreshment amenities for patient comfort.",
      icon: "Sparkles"
    }
  ]
};

export const DOCTOR_DATA: DoctorInfo = {
  name: "Dr. Akansha Srivastava",
  title: "BDS | Dental Surgeon & Aesthetic Specialist",
  clinicRole: "Founder & Chief Dental Surgeon",
  experience: "10+ Years of Clinical Excellence",
  qualifications: [
    "Bachelor of Dental Surgery (BDS)",
    "Advanced Certificate in Cosmetic Dentistry & Veneers",
    "Certified Rotary Endodontics & Single-Sitting RCT Specialist",
    "Fellowship in Modern Implantology & Digital Smile Design"
  ],
  philosophy: "We believe dentistry should never feel intimidating. True dental excellence is a harmony between precision clinical science, artistic beauty, and a gentle, compassionate human touch that preserves your natural teeth first.",
  specialties: [
    "Painless Rotary Root Canal Treatments",
    "Micro-Aesthetic Smile Makeovers & Porcelain Veneers",
    "Precision Dental Implant Restorations",
    "Clear Invisible Aligners & Orthodontic Correction",
    "Pediatric & Child-Friendly Dental Care"
  ],
  bio: [
    "Dr. Akansha Srivastava is a distinguished Dental Surgeon recognized across Gurugram for her meticulous clinical standards, gentle demeanor, and artistic precision in restorative dentistry.",
    "With over a decade of hands-on surgical and cosmetic experience, Dr. Akansha has transformed thousands of smiles—championing conservative dentistry where saving the natural tooth structure is always prioritized over aggressive interventions.",
    "As the visionary leader of Neha Dental Clinic, she has curated an atmosphere where dental anxiety dissolves, replacing sterile clinical coldness with warm, attentive patient care supported by state-of-the-art diagnostic technology."
  ],
  image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1000"
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "cosmetic-dentistry",
    title: "Cosmetic Dentistry & Smile Design",
    subtitle: "Artisan smile makeovers tailored to your facial harmony",
    category: "cosmetic",
    description: "Re-sculpt and brighten your smile with bespoke porcelain veneers, composite bonding, and in-office LED laser teeth whitening. Engineered to mirror the natural translucency and luminescence of healthy enamel.",
    benefits: [
      "Custom Digital Smile Designing (DSD) preview",
      "Ultra-thin durable E-max porcelain veneers",
      "Up to 8 shades lighter in a single 45-minute laser session",
      "Non-invasive enamel preservation technique"
    ],
    duration: "1 - 2 Visits",
    painLevel: "Painless / Zero Discomfort",
    idealFor: "Stained, chipped, misaligned, or unevenly spaced teeth",
    iconName: "Sparkles",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=900",
    featured: true
  },
  {
    id: "dental-implants",
    title: "Precision Dental Implants",
    subtitle: "Permanent, bio-compatible replacements for missing teeth",
    category: "implants",
    description: "Restore 100% natural chewing strength and jawbone integrity with premium grade titanium implants. Look, feel, and function just like your natural teeth for a lifetime of confidence.",
    benefits: [
      "Computer-guided surgical placement for supreme accuracy",
      "Lifetime durability with Swiss & German implant systems",
      "Prevents bone recession & preserves youthful facial structure",
      "Natural shade matching with CAD/CAM zirconia crowns"
    ],
    duration: "2 - 3 Planned Phases",
    painLevel: "Minimal (Local Anesthesia)",
    idealFor: "Single or multiple missing teeth, loose dentures",
    iconName: "Anchor",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=900",
    featured: true
  },
  {
    id: "root-canal-treatment",
    title: "Single-Sitting Rotary RCT",
    subtitle: "Painless infected pulp therapy to save your natural tooth",
    category: "rct",
    description: "Experience modern painless endodontics. Utilizing computer-controlled rotary files and apex locators, Dr. Akansha eradicates deep nerve infections in a quiet, relaxed single appointment.",
    benefits: [
      "99% completed in a single comfortable 40-minute sitting",
      "Advanced localized numbing ensures zero pain during procedure",
      "Hermetic 3D root canal sealing prevents re-infection",
      "Protected with high-strength monolithic zirconia ceramic crowns"
    ],
    duration: "40 - 50 Minutes",
    painLevel: "Painless / Zero Discomfort",
    idealFor: "Severe toothache, deep cavities, sensitivity to hot/cold, pulp trauma",
    iconName: "ShieldAlert",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=900",
    featured: true
  },
  {
    id: "invisible-aligners",
    title: "Clear Invisible Aligners",
    subtitle: "Discreet orthodontic tooth straightening without metal wires",
    category: "aligners",
    description: "Achieve the straight, symmetrical smile you've always desired with custom transparent thermoplastic aligners. Removable for effortless dining and flawless oral hygiene.",
    benefits: [
      "Virtually 100% invisible in daily social & work interactions",
      "No food restrictions — easily take them out to eat and brush",
      "3D digital treatment progression simulation before you start",
      "Gentle gradual forces with zero wire cuts or bracket irritation"
    ],
    duration: "6 - 14 Months",
    painLevel: "Painless / Zero Discomfort",
    idealFor: "Crowding, gaps, overbites, underbites, professional adults & teens",
    iconName: "Layers",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=900",
    featured: true
  },
  {
    id: "orthodontic-braces",
    title: "Advanced Orthodontic Treatment",
    subtitle: "Comprehensive bite alignment and jaw harmonization",
    category: "aligners",
    description: "Specialized orthodontic care featuring modern ceramic tooth-colored self-ligating brackets and customized archwires for faster, friction-free tooth movement.",
    benefits: [
      "Subtle tooth-colored ceramic brackets for aesthetic discretion",
      "Corrects complex malocclusions and severe skeletal crowding",
      "Improves long-term chewing function and jaw joint (TMJ) comfort",
      "Regular gentle adjustments with minimal soreness"
    ],
    duration: "12 - 18 Months",
    painLevel: "Gentle Care",
    idealFor: "Complex bites, severe misalignments, growing children & teenagers",
    iconName: "Smile",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=900"
  },
  {
    id: "pediatric-dentistry",
    title: "Pediatric Dental Care",
    subtitle: "Gentle, fear-free dentistry crafted specially for little smiles",
    category: "pediatric",
    description: "We turn dental visits into positive adventures! From cavity prevention sealants and fluoride varnishes to painless fillings, Dr. Akansha creates a warm, tear-free environment for kids.",
    benefits: [
      "Tear-free, patient, and playful child-first approach",
      "Painless fluoride applications & cavity-preventing fissure sealants",
      "Early orthodontic screening for proper jaw development",
      "Child-friendly oral hygiene education"
    ],
    duration: "30 Minutes",
    painLevel: "Painless / Zero Discomfort",
    idealFor: "Infants, toddlers, school-age kids, and teens",
    iconName: "Baby",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=900"
  },
  {
    id: "emergency-dental",
    title: "Emergency Dental Services",
    subtitle: "Priority same-day relief for acute toothache and trauma",
    category: "emergency",
    description: "Dental emergencies cannot wait. We offer priority same-day emergency slots for unbearable tooth pain, broken teeth, knocked-out teeth, or sudden facial swelling.",
    benefits: [
      "Immediate triage and pain-numbing within 15 minutes of arrival",
      "Same-day repair of chipped, broken, or dislodged teeth",
      "Direct on-call doctor coordination for urgent care",
      "Comprehensive digital X-ray diagnosis on the spot"
    ],
    duration: "Immediate Priority",
    painLevel: "Immediate Pain Relief",
    idealFor: "Acute throbbing pain, fractured crowns, bleeding, dental trauma",
    iconName: "Zap",
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=900",
    featured: true
  },
  {
    id: "sedation-dentistry",
    title: "Comfort & Sedation Dentistry",
    subtitle: "Total relaxation for patients with dental anxiety or phobia",
    category: "general",
    description: "Never let fear hold you back from a healthy smile. We provide calming mild sedation options, topical numbing gels, noise-canceling headsets, and gentle pacing so you feel completely at ease.",
    benefits: [
      "100% relaxed, worry-free dental experience",
      "Zero memory of uncomfortable sounds or sensations",
      "Allows multiple treatments to be completed in one sitting",
      "Monitored under strict clinical safety protocols"
    ],
    duration: "Customized to Procedure",
    painLevel: "Painless / Zero Discomfort",
    idealFor: "High dental anxiety, sensitive gag reflex, lengthy procedures",
    iconName: "HeartHandshake",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=900"
  }
];

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: "case-1",
    title: "Complete Smile Makeover & Porcelain Veneers",
    treatment: "Cosmetic Dentistry",
    description: "Correction of discolored enamel, fluorosis staining, and midline diastema (gap) with 8 custom ultra-thin E-max ceramic veneers.",
    duration: "Completed in 5 Days (2 Sittings)",
    beforeImage: "/cases/veneer_before.jpg",
    afterImage: "/cases/veneer_after.jpg",
    highlights: ["Natural translucency matched to complexion", "Zero gum irritation", "Permanent stain-resistant luster"]
  },
  {
    id: "case-2",
    title: "Invisible Aligners Crowding Correction",
    treatment: "Clear Aligners",
    description: "Severe upper and lower anterior dental crowding and rotated incisors resolved comfortably using 3D clear invisible aligners.",
    duration: "8 Months Treatment Time",
    beforeImage: "/cases/aligner_before.jpg",
    afterImage: "/cases/aligner_after.jpg",
    highlights: ["100% wireless & discreet", "Perfect arch alignment", "Significantly easier flossing & hygiene"]
  },
  {
    id: "case-3",
    title: "Upper Premolar Swiss Dental Implant",
    treatment: "Dental Implants",
    description: "Permanent replacement of missing premolar gap with Swiss titanium implant placement and monolithic CAD/CAM Zirconia crown.",
    duration: "Painless Same-Day Placement",
    beforeImage: "/cases/implant_before.jpg",
    afterImage: "/cases/implant_after.jpg",
    highlights: ["Restored full biting force", "Indistinguishable from natural teeth", "Lifetime structural warranty"]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "rev-1",
    author: "Pooja Malhotra",
    location: "Sector 38, Gurugram",
    treatment: "Single-Sitting RCT & Zirconia Crown",
    rating: 5,
    comment: "I had extreme dental anxiety due to past bad experiences. Dr. Akansha at Neha Dental Clinic made my Root Canal completely painless! She explained every single step calmly. The clinic in Huda Market is spotless, beautiful, and so calming. Sector 38 is lucky to have her!",
    date: "2 weeks ago",
    verified: true,
    avatarBg: "bg-emerald-700"
  },
  {
    id: "rev-2",
    author: "Rohit Khanna",
    location: "Sohna Road / South City II",
    treatment: "Clear Aligners Treatment",
    rating: 5,
    comment: "Finished my clear aligner treatment here. Dr. Akansha’s precision is remarkable. Every monthly checkup was prompt with zero waiting. Highly recommend Neha Dental Clinic to anyone looking for genuine, ethical, and world-class dental care in Gurgaon.",
    date: "1 month ago",
    verified: true,
    avatarBg: "bg-amber-700"
  },
  {
    id: "rev-3",
    author: "Dr. Sunita Varma",
    location: "Sector 46, Gurgaon",
    treatment: "Full Ceramic Veneers & Whitening",
    rating: 5,
    comment: "As a physician myself, I am very particular about sterile protocols. Neha Dental Clinic follows hospital-grade sterilization. Dr. Akansha designed my smile makeover with incredible artistic sensibility. It looks completely natural, not fake white. Simply exceptional!",
    date: "3 weeks ago",
    verified: true,
    avatarBg: "bg-teal-700"
  },
  {
    id: "rev-4",
    author: "Vikas Aggarwal",
    location: "Cyber City Commuter, Gurgaon",
    treatment: "Emergency Tooth Extraction & Implant",
    rating: 5,
    comment: "Had severe sudden tooth pain on a Saturday evening. The clinic accommodated me immediately. Dr. Akansha gave instant relief, followed by an implant procedure that was totally smooth. Transparent pricing and no unnecessary treatments pushed.",
    date: "2 months ago",
    verified: true,
    avatarBg: "bg-blue-800"
  },
  {
    id: "rev-5",
    author: "Meenakshi Joshi",
    location: "Islampur Colony / Sector 38",
    treatment: "Pediatric Dental Care for 6yo Daughter",
    rating: 5,
    comment: "Finding a gentle dentist for kids is so hard. Dr. Akansha is a magician with children! My 6-year-old daughter came out smiling and laughing after her cavity filling. The woman-owned warmth and gentle touch makes all the difference.",
    date: "1 month ago",
    verified: true,
    avatarBg: "bg-rose-700"
  },
  {
    id: "rev-6",
    author: "Ananya Deshmukh",
    location: "Golf Course Ext. Road, Gurgaon",
    treatment: "Cosmetic Smile Designing & Laser Whitening",
    rating: 5,
    comment: "Got my smile prepped right before my wedding in Gurgaon. Dr. Akansha recommended laser whitening and minimal composite shaping. The results were stunning and totally natural! Zero tooth sensitivity afterwards. The best dental experience ever.",
    date: "3 weeks ago",
    verified: true,
    avatarBg: "bg-purple-700"
  },
  {
    id: "rev-7",
    author: "Col. Sanjeev Bakshi (Retd.)",
    location: "Sector 31, Gurugram",
    treatment: "Full Arch Swiss Implant Rehabilitation",
    rating: 5,
    comment: "I can chew properly after almost 4 years. Dr. Akansha’s surgical precision with implants is commendable. Honest clinic, zero inflated bills, dedicated parking in Huda Market, and very caring staff. Highest recommendation.",
    date: "1 month ago",
    verified: true,
    avatarBg: "bg-stone-700"
  },
  {
    id: "rev-8",
    author: "Shreya Singhal",
    location: "Nirvana Country, Sector 50",
    treatment: "Clear Aligners & Aesthetic Contouring",
    rating: 5,
    comment: "Transparent aligners done with perfection! I was worried about speech issues during client meetings, but these aligners were totally invisible and comfortable. Sector 38 clinic is spotless and modern.",
    date: "2 weeks ago",
    verified: true,
    avatarBg: "bg-emerald-800"
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    category: "General & Appointments",
    question: "Do I need to book an appointment beforehand?",
    answer: "To ensure every patient receives dedicated, unhurried time with Dr. Akansha and zero waiting time in the clinic, prior appointment booking is strongly recommended. However, for acute dental emergencies, walk-in urgent cases are attended to with immediate priority."
  },
  {
    category: "Treatments & Pain",
    question: "Are root canal treatments really painless at Neha Dental Clinic?",
    answer: "Yes, 100%. We utilize advanced computer-assisted local anesthesia, painless computerized rotary endodontics, and digital apex locators. Over 95% of our patients report feeling no discomfort throughout the single-sitting procedure."
  },
  {
    category: "Cosmetics & Aligners",
    question: "How do Clear Aligners compare to traditional metal braces?",
    answer: "Clear Aligners are virtually invisible, custom-molded from medical-grade transparent polymer, and completely removable. You can enjoy your regular meals and brush/floss effortlessly. Treatment is previewed in 3D digital simulation before we begin."
  },
  {
    category: "Location & Amenities",
    question: "Is there parking available at Neha Dental Clinic in Sector 38?",
    answer: "Yes, abundant dedicated on-site parking is available right in front of SCO Shop No. 38 at Huda Market, Islampur Colony, Sector 38. The clinic is equipped with wheelchair-accessible parking and smooth ramp access."
  },
  {
    category: "Cost & Transparency",
    question: "How transparent is the pricing and payment options?",
    answer: "We practice 100% transparent, ethical dentistry. After your comprehensive oral examination and digital X-ray evaluation, Dr. Akansha provides a clear written treatment plan with fixed pricing and zero hidden costs. We accept all major UPI, Cards, NetBanking, and interest-free EMI options."
  }
];
