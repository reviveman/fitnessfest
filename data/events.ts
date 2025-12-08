


export type Sponsor = {
  id: string
  name: string
  logo: string
  tier: string // Gold, Silver, Bronze, etc.
  description: string
  website: string
  location: string
  industry: string[]
  yearsFunding?: number
  employeeCount?: number
  sponsorshipAmount?: string
  benefits?: string[]
  color: string
}

export type Event = {
  id: string
  name: string
  location: string
  date: string
  time: string
  description: string
  image: string
  speakers: string[]
    sponsors: string[]
  sponsorIds: string[]
}

// Events data
export const events = [

  /* -------------------------------------------------------------------------- */
  /*                               NEW DAY 1 EVENTS                             */
  /* -------------------------------------------------------------------------- */

  {
    id: "17",
    title: "Strength Endurance Circuit – Qualifiers",
    description:
      "A 6-station strength-endurance challenge involving kettlebell swings, goblet squats, battle ropes, push press, and rowing. Top athletes advance.",
    date: "February 21, 2026",
    time: "11",
    period: "AM",
    timeRange: "11:30 AM - 1:00 PM",
    location: "Functional Arena",
    price: "Free Entry",
    image: "/images/21/four.jpg",
    featured: false,
    startDate: "February 21, 2026",
    endDate: "February 21, 2026",
    speakerIds: ["1", "2"],
    sponsors: ["PowerGear", "FitLife Nutrition"],
    sponsorIds: ["1", "2"],
  },

  {
    id: "16",
    title: "Calisthenics Amateur Battles – Qualifiers",
    description:
      "Beginner & intermediate athletes compete in calisthenics endurance and strength tasks. Winners qualify for Freestyle Finals.",
    date: "February 21, 2026",
    time: "1",
    period: "PM",
    timeRange: "1:00 PM - 3:00 PM",
    location: "Calisthenics Arena",
    price: "Free",
    image: "/images/21/nine.jpg",
    featured: false,
    startDate: "February 21, 2026",
    endDate: "February 21, 2026",
    speakerIds: ["3", "4"],
    sponsors: ["ActiveWear", "VitaBoost"],
    sponsorIds: ["3", "5"],
  },

  {
    id: "13",
    title: "Functional Fitness Challenge – Eliminations",
    description:
      "High-intensity elimination round testing speed, endurance, agility, and strength. Top athletes advance to Day 2 Finals.",
    date: "February 21, 2026",
    time: "2",
    period: "PM",
    timeRange: "2:00 PM - 4:00 PM",
    location: "Challenge Arena",
    price: "Free",
    image: "/images/21/eight.jpg",
    featured: true,
    startDate: "February 21, 2026",
    endDate: "February 21, 2026",
    speakerIds: ["1", "2"],
    sponsors: ["FitLife Nutrition", "PowerGear"],
    sponsorIds: ["1", "2"],
  },

  {
    id: "18",
    title: "Powerlifting King/Queen – Heats",
    description:
      "Qualifying round for Squat, Bench Press, and Deadlift. Athletes compete for a spot in the Finals.",
    date: "February 21, 2026",
    time: "3",
    period: "PM",
    timeRange: "3:00 PM - 5:00 PM",
    location: "Strength Zone",
    price: "Free",
    image: "/images/21/deadlift.jpg",
    featured: false,
    startDate: "February 21, 2026",
    endDate: "February 21, 2026",
    speakerIds: ["2", "4"],
    sponsors: ["PowerGear", "ActiveWear"],
    sponsorIds: ["2", "3"],
  },

  {
    id: "14",
    title: "Deadlift Championship – Heats",
    description:
      "Rising-bar deadlift challenge where athletes compete to lift maximum weight with strict technique. Top performers advance to Finals.",
    date: "February 21, 2026",
    time: "4",
    period: "PM",
    timeRange: "4:15 PM - 6:00 PM",
    location: "Strength Zone",
    price: "Free Entry",
    image: "/images/21/two.jpg",
    featured: false,
    startDate: "February 21, 2026",
    endDate: "February 21, 2026",
    speakerIds: ["2", "4"],
    sponsors: ["PowerGear", "HealthTech"],
    sponsorIds: ["2", "4"],
  },

  {
    id: "15",
    title: "Push-Up & Plank Endurance Battle – Qualifiers",
    description:
      "Qualifying round testing strict push-up endurance and maximum plank time. Top athletes advance to Finals.",
    date: "February 21, 2026",
    time: "6",
    period: "PM",
    timeRange: "6:15 PM - 7:15 PM",
    location: "Challenge Arena",
    price: "Free",
    image: "/images/21/ten.jpg",
    featured: false,
    startDate: "February 21, 2026",
    endDate: "February 21, 2026",
    speakerIds: ["2", "3"],
    sponsors: ["FitLife Nutrition", "PowerGear"],
    sponsorIds: ["1", "2"],
  },

  {
    id: "19",
    title: "Battle of Gyms – Team Round",
    description:
      "Teams of 6 athletes compete in synchronized workouts, strength segments, and relays. Top gyms advance to the Grand Finale.",
    date: "February 21, 2026",
    time: "6",
    period: "PM",
    timeRange: "6:30 PM - 8:00 PM",
    location: "Main Arena",
    price: "Free",
    image: "/images/21/seven.jpg",
    featured: true,
    startDate: "February 21, 2026",
    endDate: "February 21, 2026",
    speakerIds: ["1", "3"],
    sponsors: ["FitLife Nutrition", "PowerGear", "HealthTech"],
    sponsorIds: ["1", "2", "4"],
  },

  /* -------------------------------------------------------------------------- */
  /*                               DAY 2 - FINALS                               */
  /* -------------------------------------------------------------------------- */

  {
    id: "20",
    title: "Functional Fitness Challenge – Finals",
    description:
      "Top athletes battle across strength, skill, and endurance stages to crown the Festival’s Fittest Athlete.",
    date: "February 22, 2026",
    time: "9",
    period: "AM",
    timeRange: "9:00 AM - 12:00 PM",
    location: "Challenge Arena",
    price: "Free",
    image: "/images/21/eight.jpg",
    featured: true,
    startDate: "February 22, 2026",
    endDate: "February 22, 2026",
    speakerIds: ["1", "2", "3"],
    sponsors: ["FitLife Nutrition", "ActiveWear"],
    sponsorIds: ["1", "3"],
  },

  {
    id: "23",
    title: "Calisthenics Freestyle Finals",
    description:
      "Top athletes perform 90-second freestyle calisthenics routines showcasing advanced control, power, and creativity.",
    date: "February 22, 2026",
    time: "11",
    period: "AM",
    timeRange: "11:00 AM - 12:30 PM",
    location: "Calisthenics Arena",
    price: "Free",
    image: "/images/21/nine.jpg",
    featured: false,
    startDate: "February 22, 2026",
    endDate: "February 22, 2026",
    speakerIds: ["3", "4"],
    sponsors: ["ActiveWear", "VitaBoost"],
    sponsorIds: ["3", "5"],
  },

  {
    id: "24",
    title: "Strength Endurance Circuit – Finals",
    description:
      "The final round of the multi-station strength endurance challenge testing power, stamina, and grit.",
    date: "February 22, 2026",
    time: "12",
    period: "PM",
    timeRange: "12:45 PM - 2:15 PM",
    location: "Functional Arena",
    price: "Free",
    image: "/images/21/eleven.jpg",
    featured: false,
    startDate: "February 22, 2026",
    endDate: "February 22, 2026",
    speakerIds: ["1", "2"],
    sponsors: ["FitLife Nutrition", "PowerGear"],
    sponsorIds: ["1", "2"],
  },

  {
    id: "21",
    title: "Deadlift Championship – Finals",
    description:
      "The strongest athletes compete in strict RAW deadlifts to win the Deadlift Champion title.",
    date: "February 22, 2026",
    time: "1",
    period: "PM",
    timeRange: "1:00 PM - 3:00 PM",
    location: "Strength Zone",
    price: "Free Entry",
    image: "/images/21/two.jpg",
    featured: true,
    startDate: "February 22, 2026",
    endDate: "February 22, 2026",
    speakerIds: ["2", "4"],
    sponsors: ["PowerGear", "HealthTech"],
    sponsorIds: ["2", "4"],
  },

  {
    id: "22",
    title: "Push-Up & Plank Endurance – Finals",
    description:
      "Finalists compete in strict push-up and plank endurance challenges to crown the winners.",
    date: "February 22, 2026",
    time: "3",
    period: "PM",
    timeRange: "3:30 PM - 5:00 PM",
    location: "Challenge Arena",
    price: "Free",
    image: "/images/21/ten.jpg",
    featured: false,
    startDate: "February 22, 2026",
    endDate: "February 22, 2026",
    speakerIds: ["2", "3"],
    sponsors: ["FitLife Nutrition", "PowerGear"],
    sponsorIds: ["1", "2"],
  },

  {
    id: "25",
    title: "Powerlifting King/Queen – Finals",
    description:
      "Final battle for Squat, Bench Press, and Deadlift to crown the strongest male and female lifters.",
    date: "February 22, 2026",
    time: "2",
    period: "PM",
    timeRange: "2:30 PM - 4:30 PM",
    location: "Strength Zone",
    price: "Free Entry",
    image: "/images/21/deadlift.jpg",
    featured: true,
    startDate: "February 22, 2026",
    endDate: "February 22, 2026",
    speakerIds: ["2", "4"],
    sponsors: ["PowerGear", "ActiveWear"],
    sponsorIds: ["2", "3"],
  },

  {
    id: "26",
    title: "Battle of Gyms – Grand Finale",
    description:
      "Top gym teams compete in relays, synchronized workouts, strength gauntlets, and obstacle courses to crown Bengaluru’s Fittest Gym.",
    date: "February 22, 2026",
    time: "5",
    period: "PM",
    timeRange: "5:00 PM - 7:00 PM",
    location: "Main Arena",
    price: "Free",
    image: "/images/21/seven.jpg",
    featured: true,
    startDate: "February 22, 2026",
    endDate: "February 22, 2026",
    speakerIds: ["1", "3"],
    sponsors: ["FitLife Nutrition", "PowerGear", "HealthTech"],
    sponsorIds: ["1", "2", "4"],
  },

];



  
  
  // Function to get event by ID
  export function getEventById(id: string) {
    return events.find((event) => event.id === id)
  }
  
  // Speaker type definition
  export type Speaker = {
    id: string
    name: string
    title: string
    bio: string
    image: string
    day: string
    timing: string
    dateOfBirth?: string
    mobileNumber?: string
    address?: {
      line1: string
      line2: string
    }
    socialLinks?: {
      facebook?: string
      twitter?: string
      pinterest?: string
    }
    skills?: {
      [key: string]: number
    }
    color: string
  }
  
  // Speakers data
  export const speakers: Speaker[] = [
    {
      id: "1",
      name: "John Doe",
      title: "Lead Developer",
      bio: "John is a lead developer with over 10 years of experience in web development.",
      image: "/placeholder.svg?height=200&width=200",
      day: "Monday",
      timing: "10:00 AM",
      dateOfBirth: "01/01/1980",
      mobileNumber: "123-456-7890",
      address: {
        line1: "123 Main St",
        line2: "Anytown, USA",
      },
      socialLinks: {
        facebook: "https://www.facebook.com",
        twitter: "https://www.twitter.com",
        pinterest: "https://www.instagram.com",
      },
      skills: {
        javascript: 90,
        react: 80,
        node: 70,
      },
      color: "border-blue-500",
    },
    {
      id: "2",
      name: "Jane Smith",
      title: "Founder & CEO",
      bio: "Jane is the founder and CEO of a successful tech startup.",
      image: "/placeholder.svg?height=200&width=200",
      day: "Tuesday",
      timing: "11:00 AM",
      dateOfBirth: "02/02/1985",
      mobileNumber: "456-789-0123",
      address: {
        line1: "456 Elm St",
        line2: "Anytown, USA",
      },
      socialLinks: {
        facebook: "https://www.facebook.com",
        twitter: "https://www.twitter.com",
        pinterest: "https://www.instagram.com",
      },
      skills: {
        leadership: 95,
        management: 90,
        strategy: 85,
      },
      color: "border-red-500",
    },
    {
      id: "3",
      name: "Mike Brown",
      title: "Senior Trainer",
      bio: "Mike is a senior trainer with over 15 years of experience in education.",
      image: "/placeholder.svg?height=200&width=200",
      day: "Wednesday",
      timing: "12:00 PM",
      dateOfBirth: "03/03/1975",
      mobileNumber: "789-012-3456",
      address: {
        line1: "789 Oak St",
        line2: "Anytown, USA",
      },
      socialLinks: {
        facebook: "https://www.facebook.com",
        twitter: "https://www.twitter.com",
        pinterest: "https://www.instagram.com",
      },
      skills: {
        teaching: 100,
        communication: 95,
        presentation: 90,
      },
      color: "border-green-500",
    },
    {
        id: "6",
        name: "Mike Brown",
        title: "Senior Trainer",
        bio: "Mike is a senior trainer with over 15 years of experience in education.",
        image: "/placeholder.svg?height=200&width=200",
        day: "Wednesday",
        timing: "12:00 PM",
        dateOfBirth: "03/03/1975",
        mobileNumber: "789-012-3456",
        address: {
          line1: "789 Oak St",
          line2: "Anytown, USA",
        },
        socialLinks: {
          facebook: "https://www.facebook.com",
          twitter: "https://www.twitter.com",
          pinterest: "https://www.instagram.com",
        },
        skills: {
          teaching: 100,
          communication: 95,
          presentation: 90,
        },
        color: "border-green-500",
      },
      {
        id: "5",
        name: "Mike Brown",
        title: "Senior Trainer",
        bio: "Mike is a senior trainer with over 15 years of experience in education.",
        image: "/placeholder.svg?height=200&width=200",
        day: "Wednesday",
        timing: "12:00 PM",
        dateOfBirth: "03/03/1975",
        mobileNumber: "789-012-3456",
        address: {
          line1: "789 Oak St",
          line2: "Anytown, USA",
        },
        socialLinks: {
          facebook: "https://www.facebook.com",
          twitter: "https://www.twitter.com",
          pinterest: "https://www.instagram.com",
        },
        skills: {
          teaching: 100,
          communication: 95,
          presentation: 90,
        },
        color: "border-green-500",
      },
  ]
  

  

  export const sponsors: Sponsor[] = [
    {
      id: "1",
      name: "FitLife Nutrition",
      logo: "/placeholder.svg?height=200&width=200",
      tier: "Gold",
      description:
        "FitLife Nutrition provides premium supplements and nutrition advice for fitness enthusiasts and athletes.",
      website: "https://www.fitlifenutrition.com",
      location: "New York, NY",
      industry: ["Nutrition", "Supplements", "Health"],
      yearsFunding: 5,
      employeeCount: 120,
      sponsorshipAmount: "$25,000",
      benefits: ["Main Stage Branding", "VIP Access", "Product Showcase"],
      color: "border-yellow-500",
    },
    {
      id: "2",
      name: "PowerGear",
      logo: "/placeholder.svg?height=200&width=200",
      tier: "Silver",
      description: "PowerGear manufactures high-quality fitness equipment for home and commercial gyms.",
      website: "https://www.powergear.com",
      location: "Los Angeles, CA",
      industry: ["Equipment", "Fitness", "Manufacturing"],
      yearsFunding: 3,
      employeeCount: 85,
      sponsorshipAmount: "$15,000",
      benefits: ["Exhibition Space", "Logo on Materials"],
      color: "border-gray-400",
    },
    {
      id: "3",
      name: "ActiveWear",
      logo: "/placeholder.svg?height=200&width=200",
      tier: "Gold",
      description: "ActiveWear designs and produces premium athletic clothing for all types of fitness activities.",
      website: "https://www.activewear.com",
      location: "Chicago, IL",
      industry: ["Apparel", "Fashion", "Retail"],
      yearsFunding: 7,
      employeeCount: 200,
      sponsorshipAmount: "$30,000",
      benefits: ["Main Stage Branding", "VIP Access", "Fashion Show"],
      color: "border-yellow-500",
    },
    {
      id: "4",
      name: "HealthTech",
      logo: "/placeholder.svg?height=200&width=200",
      tier: "Bronze",
      description: "HealthTech develops innovative wearable technology for fitness tracking and health monitoring.",
      website: "https://www.healthtech.com",
      location: "San Francisco, CA",
      industry: ["Technology", "Wearables", "Health"],
      yearsFunding: 2,
      employeeCount: 45,
      sponsorshipAmount: "$8,000",
      benefits: ["Exhibition Space"],
      color: "border-orange-700",
    },
    {
      id: "5",
      name: "VitaBoost",
      logo: "/placeholder.svg?height=200&width=200",
      tier: "Silver",
      description: "VitaBoost creates natural energy drinks and recovery beverages for fitness enthusiasts.",
      website: "https://www.vitaboost.com",
      location: "Miami, FL",
      industry: ["Beverages", "Nutrition", "Health"],
      yearsFunding: 4,
      employeeCount: 60,
      sponsorshipAmount: "$12,000",
      benefits: ["Product Sampling", "Logo on Materials"],
      color: "border-gray-400",
    },
  ]
  
  export function getSponsorById(id: string) {
    return sponsors.find((sponsor) => sponsor.id === id)
  }
  