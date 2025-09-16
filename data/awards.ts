import { Trophy, Hash, Zap, Users, Heart, Star, Lightbulb, Crown } from "lucide-react"

export interface Nominee {
  id: string
  name: string
  description: string
  votes: number
  image: string
}

export interface JudgingCriteria {
  criteria: string
  weightage: string
}

export interface AwardCategory {
  id: string
  slug: string
  title: string
  emoji: string
  // icon: any
  image: string
  color: "red" | "teal" | "yellow" | "blue" | "green" | "purple"
  category: string
  shortDescription: string
  description: string
  eligibility: string[]
  judgingCriteria: JudgingCriteria[]
  submissionRequirements: string[]
  benefits: string[]
  nominees: Nominee[]
}

export const createSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
}

export const awardCategories: AwardCategory[] = [
  {
    id: "fitness-trainer-of-the-year",
    slug: "fitness-trainer-of-the-year",
    title: "Fitness Trainer of the Year",
    emoji: "💪",
    image: "/images/awardscategory/fitnesstrainer.png",
    color: "red",
    category: "Professional Excellence",
    shortDescription:
      "Celebrating outstanding fitness professionals who demonstrate excellence in training and client transformation.",
    description:
      "This award celebrates an outstanding fitness professional who has demonstrated excellence in personal training, client transformation, professional development, and positive community influence. The recipient will exemplify passion, expertise, and commitment to improving lives through health and fitness.",
    eligibility: [
      "Minimum 3 years of active fitness training experience",
      "Currently practicing as a certified fitness trainer",
      "Demonstrated client success stories and transformations",
      "Active in the Bengaluru fitness community",
      "Holds relevant fitness certifications from recognized bodies",
    ],
    judgingCriteria: [
      { criteria: "Client Transformation Results", weightage: "30%" },
      { criteria: "Professional Certifications & Education", weightage: "20%" },
      { criteria: "Community Impact & Engagement", weightage: "20%" },
      { criteria: "Innovation in Training Methods", weightage: "15%" },
      { criteria: "Client Testimonials & Retention", weightage: "15%" },
    ],
    submissionRequirements: [
      "Completed Nomination Form",
      "Professional Resume with Training Experience",
      "Client Transformation Case Studies (min. 3)",
      "Professional Certifications",
      "Client Testimonials (min. 5)",
      "Professional Photos and Training Videos",
    ],
    benefits: [
      "Trophy and Certificate of Excellence",
      "Feature Article and Social Media Recognition",
      "Networking Opportunities with Industry Leaders",
      "Speaking Opportunity at Future Events",
      "One Year of Free Professional Development Resources",
    ],
    nominees: [
      {
        id: "sarah-johnson",
        name: "Sarah Johnson",
        description: "Transformed over 200 lives this year with innovative training methods and community programs.",
        votes: 245,
        image: "/images/nominees/sarah-johnson.png",
      },
      {
        id: "michael-patel",
        name: "Michael Patel",
        description: "Specializes in rehabilitation fitness, helping clients recover from injuries and surgeries.",
        votes: 189,
        image: "/images/nominees/michael-patel.png",
      },
      {
        id: "jessica-lee",
        name: "Jessica Lee",
        description: "Pioneer in adaptive fitness, making training accessible for people with disabilities.",
        votes: 217,
        image: "/images/nominees/jessica-lee.png",
      },
    ],
  },
  {
    id: "nutritionist-dietitian-of-the-year",
    slug: "nutritionist-dietitian-of-the-year",
    title: "Nutritionist/Dietitian of the Year",
    emoji: "🥗",
    image: "/images/awardscategory/nutritionist.png",
    color: "teal",
    category: "Health & Nutrition",
    shortDescription:
      "Honoring exceptional nutrition professionals who transform lives through evidence-based dietary strategies.",
    description:
      "This award honors an exceptional nutritionist or dietitian who has made a transformative impact on the health and wellbeing of individuals and communities through evidence-based, personalized nutrition strategies.",
    eligibility: [
      "Licensed nutritionist or dietitian with minimum 2 years experience",
      "Demonstrated expertise in evidence-based nutrition counseling",
      "Active practice in Bengaluru or serving Bengaluru clients",
      "Proven track record of client success and health improvements",
      "Commitment to continuing education and professional development",
    ],
    judgingCriteria: [
      { criteria: "Client Health Outcomes & Success Stories", weightage: "35%" },
      { criteria: "Evidence-Based Practice & Scientific Approach", weightage: "25%" },
      { criteria: "Community Education & Outreach", weightage: "20%" },
      { criteria: "Professional Credentials & Continuing Education", weightage: "15%" },
      { criteria: "Innovation in Nutrition Counseling", weightage: "5%" },
    ],
    submissionRequirements: [
      "Completed Nomination Form",
      "Professional License and Certifications",
      "Client Success Case Studies (min. 3)",
      "Professional Bio and Career Summary",
      "Client Testimonials and References",
      "Evidence of Community Involvement or Education",
    ],
    benefits: [
      "Professional Recognition Trophy",
      "Feature in Health & Wellness Publications",
      "Invitation to Speak at Nutrition Conferences",
      "Networking with Healthcare Professionals",
      "Complimentary Continuing Education Credits",
    ],
    nominees: [
      {
        id: "mark-williams",
        name: "Dr. Mark Williams",
        description: "Creates science-based nutrition content that has inspired thousands to begin their wellness journey.",
        votes: 312,
        image: "/images/nominees/mark-williams.png",
      },
      {
        id: "aisha-rodriguez",
        name: "Aisha Rodriguez",
        description: "Promotes sustainable nutrition and inclusive wellness through her evidence-based practice.",
        votes: 287,
        image: "/images/nominees/aisha-rodriguez.png",
      },
      {
        id: "tyler-chen",
        name: "Tyler Chen",
        description: "Specializes in sports nutrition and debunking harmful diet myths through education.",
        votes: 265,
        image: "/images/nominees/tyler-chen.png",
      },
    ],
  },
  {
    id: "best-group-class-instructor",
    slug: "best-group-class-instructor",
    title: "Best Group Class Instructor",
    emoji: "🕺",
    image: "/images/awardscategory/groupinstructor.png",
    color: "yellow",
    category: "Instruction & Performance",
    shortDescription:
      "Recognizing the most engaging and impactful group class instructor who inspires large audiences.",
    description:
      "This award recognizes the group class instructor who consistently delivers high-energy, impactful sessions that inspire participants and create a sense of community.",
    eligibility: [
      "Minimum 2 years experience teaching group classes",
      "Active instructor in Bengaluru",
      "Demonstrated ability to engage diverse participants",
      "Strong track record of class attendance and retention",
    ],
    judgingCriteria: [
      { criteria: "Class Engagement & Energy", weightage: "40%" },
      { criteria: "Participant Retention & Feedback", weightage: "25%" },
      { criteria: "Innovation in Class Design", weightage: "20%" },
      { criteria: "Community Building & Inclusion", weightage: "15%" },
    ],
    submissionRequirements: [
      "Nomination Form",
      "Instructor Resume",
      "Class Recording Samples",
      "Participant Testimonials",
    ],
    benefits: [
      "Award Trophy",
      "Feature in Festival Highlights",
      "Exclusive Workshop Opportunity",
    ],
    nominees: [
      {
        id: "emma-singh",
        name: "Emma Singh",
        description: "Leads dynamic Zumba and dance classes with infectious energy.",
        votes: 203,
        image: "/images/nominees/emma-singh.png",
      },
      {
        id: "raj-kapoor",
        name: "Raj Kapoor",
        description: "Known for strength-based group workouts with motivating coaching.",
        votes: 175,
        image: "/images/nominees/raj-kapoor.png",
      },
    ],
  },
  {
    id: "physiotherapist-of-the-year",
    slug: "physiotherapist-of-the-year",
    title: "Physiotherapist of the Year",
    emoji: "🩺",
    image: "/images/awardscategory/physiotherapist.png",
    color: "blue",
    category: "Rehabilitation & Recovery",
    shortDescription:
      "Honoring the top physiotherapist who enhances recovery and performance through expertise and care.",
    description:
      "This award honors a physiotherapist who has excelled in injury recovery, sports rehabilitation, and overall physical wellness support.",
    eligibility: [
      "Licensed physiotherapist",
      "Active in Bengaluru",
      "Demonstrated patient recovery success",
      "Commitment to continuous learning",
    ],
    judgingCriteria: [
      { criteria: "Patient Outcomes & Recovery Rates", weightage: "40%" },
      { criteria: "Innovation in Treatment Methods", weightage: "25%" },
      { criteria: "Professional Credentials", weightage: "20%" },
      { criteria: "Community Engagement", weightage: "15%" },
    ],
    submissionRequirements: [
      "Nomination Form",
      "Professional Credentials",
      "Case Studies",
      "Patient Testimonials",
    ],
    benefits: [
      "Award Trophy",
      "Networking with Fitness & Medical Experts",
      "Feature in Wellness Media",
    ],
    nominees: [
      {
        id: "arjun-mehta",
        name: "Dr. Arjun Mehta",
        description: "Specialist in sports physiotherapy for elite athletes.",
        votes: 264,
        image: "/images/nominees/arjun-mehta.png",
      },
      {
        id: "neha-verma",
        name: "Dr. Neha Verma",
        description: "Renowned for holistic physiotherapy and rehab methods.",
        votes: 228,
        image: "/images/nominees/neha-verma.png",
      },
    ],
  },
  {
    id: "rising-star-young-fitness-professional",
    slug: "rising-star-young-fitness-professional",
    title: "Rising Star (Young Fitness Professional)",
    emoji: "🌟",
    image: "/images/awardscategory/young.png",
    color: "green",
    category: "Emerging Talent",
    shortDescription:
      "Spotlighting young professionals under 30 who are shaping the future of fitness.",
    description:
      "This award highlights young fitness professionals under 30 who are already making a major impact in the industry.",
    eligibility: [
      "Age under 30",
      "Active in Bengaluru fitness industry",
      "Proven track record of innovation and results",
    ],
    judgingCriteria: [
      { criteria: "Innovation & Fresh Approach", weightage: "35%" },
      { criteria: "Client Impact", weightage: "30%" },
      { criteria: "Professional Growth", weightage: "20%" },
      { criteria: "Community Contribution", weightage: "15%" },
    ],
    submissionRequirements: [
      "Nomination Form",
      "Professional Resume",
      "Case Studies",
    ],
    benefits: [
      "Rising Star Trophy",
      "Mentorship Opportunities",
      "Featured in Fitness Media",
    ],
    nominees: [
      {
        id: "priya-das",
        name: "Priya Das",
        description: "Young CrossFit coach making waves with innovative workouts.",
        votes: 192,
        image: "/images/nominees/priya-das.png",
      },
      {
        id: "aditya-malik",
        name: "Aditya Malik",
        description: "Trainer and influencer inspiring youth towards fitness.",
        votes: 178,
        image: "/images/nominees/aditya-malik.png",
      },
    ],
  },
  {
    id: "lifetime-achievement-in-fitness",
    slug: "lifetime-achievement-in-fitness",
    title: "Lifetime Achievement in Fitness",
    emoji: "🏆",
    image: "/images/awardscategory/lifetime.png",
    color: "purple",
    category: "Legacy",
    shortDescription:
      "Celebrating an individual with decades of contribution to the fitness industry.",
    description:
      "This award celebrates an individual who has dedicated decades to transforming fitness in Bengaluru and beyond.",
    eligibility: [
      "Minimum 20 years in fitness industry",
      "Major contributions to the growth of the sector",
    ],
    judgingCriteria: [
      { criteria: "Industry Impact", weightage: "50%" },
      { criteria: "Community Legacy", weightage: "30%" },
      { criteria: "Professional Achievements", weightage: "20%" },
    ],
    submissionRequirements: [
      "Nomination Form",
      "Career History",
      "Industry Testimonials",
    ],
    benefits: [
      "Lifetime Achievement Trophy",
      "Permanent Recognition in Festival Records",
    ],
    nominees: [
      {
        id: "rajiv-sharma",
        name: "Rajiv Sharma",
        description: "40 years of pioneering gyms and training institutions in Bengaluru.",
        votes: 321,
        image: "/images/nominees/rajiv-sharma.png",
      },
    ],
  },
  {
    id: "community-fitness-hero",
    slug: "community-fitness-hero",
    title: "Community Fitness Hero",
    emoji: "🤝",
    image: "/images/awardscategory/communityhero.png",
    color: "red",
    category: "Community Impact",
    shortDescription:
      "Recognizing individuals who use fitness as a tool for social good and community empowerment.",
    description:
      "This award honors someone who uses fitness to drive positive change in underserved communities.",
    eligibility: [
      "Active in Bengaluru community",
      "Proven community projects using fitness",
    ],
    judgingCriteria: [
      { criteria: "Community Impact", weightage: "50%" },
      { criteria: "Sustainability of Efforts", weightage: "30%" },
      { criteria: "Innovation in Outreach", weightage: "20%" },
    ],
    submissionRequirements: [
      "Nomination Form",
      "Community Project Details",
      "Impact Evidence",
    ],
    benefits: [
      "Hero Recognition Trophy",
      "Feature in Social Media",
    ],
    nominees: [
      {
        id: "fatima-noor",
        name: "Fatima Noor",
        description: "Runs free community fitness camps for women in rural Bengaluru.",
        votes: 267,
        image: "/images/nominees/fatima-noor.png",
      },
    ],
  },
  {
    id: "innovator-in-fitness-tech",
    slug: "innovator-in-fitness-tech",
    title: "Innovator in Fitness Tech",
    emoji: "💡",
    image: "/images/awardscategory/innovator.png",
    color: "blue",
    category: "Innovation",
    shortDescription:
      "Highlighting startups and innovators redefining fitness through technology.",
    description:
      "This award honors individuals or startups pushing the boundaries of fitness with technology innovations.",
    eligibility: [
      "Startup or individual innovator",
      "Bengaluru-based or operating in Bengaluru",
    ],
    judgingCriteria: [
      { criteria: "Innovation & Creativity", weightage: "40%" },
      { criteria: "Impact on Users", weightage: "30%" },
      { criteria: "Scalability", weightage: "20%" },
      { criteria: "Sustainability", weightage: "10%" },
    ],
    submissionRequirements: [
      "Nomination Form",
      "Tech/Product Demo",
      "Impact Evidence",
    ],
    benefits: [
      "Innovation Trophy",
      "Media Coverage",
      "Investor Networking",
    ],
    nominees: [
      {
        id: "fitbyte",
        name: "FitByte",
        description: "AI-powered app for personalized workout and nutrition.",
        votes: 245,
        image: "/images/nominees/fitbyte.png",
      },
      {
        id: "trainx",
        name: "TrainX",
        description: "Virtual reality-based group fitness experience.",
        votes: 211,
        image: "/images/nominees/trainx.png",
      },
    ],
  },
]

export const getAwardBySlug = (slug: string): AwardCategory | undefined => {
  return awardCategories.find((award) => award.slug === slug)
}

export const getAwardById = (id: string): AwardCategory | undefined => {
  return awardCategories.find((award) => award.id === id)
}

export const getAllAwardSlugs = (): string[] => {
  return awardCategories.map((award) => award.slug)
}
