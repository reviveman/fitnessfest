// data/events.ts
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
  title: string
  location: string
  date: string
  time: string
  period?: string
  timeRange?: string
  description: string
  fullDescription?: string
  image: string
  speakers?: string[]
  speakerIds?: string[]
  sponsors?: string[]
  sponsorIds?: string[]
  price?: string | number
  featured?: boolean
  startDate?: string
  endDate?: string
}

// Events data
export const events: Event[] = [
  /* -------------------------------------------------------------------------- */
  /*                               DAY 1 EVENTS                                 */
  /* -------------------------------------------------------------------------- */

  {
    id: "17",
    title: "Strength Endurance Circuit – Qualifiers",
    description:
      "A 6-station strength-endurance challenge involving kettlebell swings, goblet squats, battle ropes, push press, and rowing. Top athletes advance.",
    fullDescription: `
<h3>Strength Endurance Circuit – Qualifiers</h3>
<p>The Strength Endurance Circuit – Qualifiers is a high-intensity multi-station challenge designed to evaluate an athlete’s overall fitness across strength, endurance and power. Competitors complete a 6-station circuit (12 minutes total) with points awarded for reps and technique.</p>
<ul>
  <li><strong>Format:</strong> 6 stations, 1 minute per station, 20 seconds transition.</li>
  <li><strong>Stations example:</strong> Kettlebell Swings, Burpee Over Marker, Goblet Squats, Battle Rope Slams, Dumbbell Push Press, Rowing (calories).</li>
  <li><strong>Scoring:</strong> Reps + calories with deductions for no-reps/technical faults.</li>
</ul>
<p>Athletes who perform best advance to the Strength Endurance Circuit – Finals on Day 2.</p>
`,
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
    fullDescription: `
<h3>Calisthenics Amateur Battles – Qualifiers</h3>
<p>Inclusive competition designed for amateur calisthenics athletes. Athletes complete a strength & endurance round and the top performers move to the freestyle finals.</p>
<p><strong>Round 1:</strong> Push-ups, Pull-ups, Dips, Hanging knee raises, Holds (L-sit) — scored by reps and control.</p>
<p><strong>Round 2 (Finals qualification):</strong> Freestyle routines judged on difficulty, control and flow.</p>
`,
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
    fullDescription: `
<h2>Functional Fitness Challenge – Eliminations</h2>
<p>The Functional Fitness Challenge is one of the most exciting and intense competitions at the Bengaluru Fitness Festival, designed to test real-world strength, conditioning, endurance, agility, and overall athletic performance. The elimination round separates the top athletes from the rest through a series of fast-paced, high-intensity tasks inspired by functional training, CrossFit-style movements, and tactical fitness drills.</p>

<h3>Competition Format (Elimination Round)</h3>
<p>The elimination round consists of a timed circuit with standardized movements. Athletes must complete all tasks in the shortest time, maintaining proper form to avoid penalties.</p>
<ul>
  <li>One athlete competes at a time (or two lanes head-to-head based on logistics).</li>
  <li>A certified judge monitors technique, repetitions, and penalties.</li>
  <li>Athletes must complete all stations to qualify. Top scorers advance to the Finals on Day 2.</li>
</ul>

<h3>Typical Station Line-up (Example WOD)</h3>
<ol>
  <li>50m Sprint + Sandbag Carry (20kg Women / 30kg Men)</li>
  <li>Burpee Over Box / Burpee Broad Jumps</li>
  <li>Kettlebell Swings (16kg Women / 24kg Men)</li>
  <li>Wall Balls (6kg Women / 9kg Men)</li>
  <li>Sled Push or Deadball Carry</li>
  <li>Shuttle Run / Finisher Dash</li>
</ol>
<p>Exact workout will be announced 7 days before the event.</p>

<h3>Participation Rules & Regulations</h3>
<ol>
  <li><strong>Registration & Eligibility:</strong> Open to Men and Women aged 18+. Participants must sign waiver & medical declaration. Government ID required during check-in. Entry closes once slots are filled.</li>
  <li><strong>Mandatory Gear:</strong> Sports shoes required. Gloves, knee sleeves optional. No external support gear such as powerlifting suits.</li>
  <li><strong>Movement Standards:</strong> Standard functional fitness guidelines apply. Judges may invalidate reps for improper form.</li>
  <li><strong>Penalties:</strong> +5 seconds for each invalidated rep (max 5 per movement). +10 seconds for skipping a movement standard. Disqualification for skipping a station or unsafe conduct.</li>
  <li><strong>Safety Protocol:</strong> Warm-up area, hydration stalls, and medical team available on site.</li>
</ol>

<h3>Winning & Scoring Criteria – Eliminations</h3>
<p>Time-based scoring: <em>Total Time = Completion Time + Penalties</em>. Top 10 Men & Top 10 Women advance to Finals. Tie-break uses fastest final station, then head-to-head sprint.</p>

<h3>Code of Conduct</h3>
<p>Respect judges, volunteers, and other athletes. Follow event staff instructions. Unsportsmanlike behaviour can lead to removal.</p>

<p><strong>Purpose:</strong> Promote practical fitness, encourage competitive participation, highlight Bangalore’s functional training community.</p>
`,
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
    fullDescription: `
<h3>Powerlifting King/Queen – Heats</h3>
<p>Heats are the qualifying rounds where athletes perform Squat → Bench Press → Deadlift with reduced attempts (2 each). Top performers qualify to the Finals.</p>
<p><strong>Format:</strong> 2 attempts per lift, best lift counts. Wilks or coefficient scoring optional. Standard RAW rules apply unless specified.</p>
`,
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
    fullDescription: `
<h3>Deadlift Championship – Heats</h3>
<p>Rising-bar format; athletes attempt increasing weights. Standard judging applies: smooth lift, full lockout, and control on descent.</p>
<p><strong>Timing:</strong> Athletes must start lift within 60s of being called.</p>
`,
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
    fullDescription: `
<h3>Push-Up & Plank Endurance Battle – Qualifiers</h3>
<p>Dual test: max strict push-ups (one continuous attempt) and max plank hold. Combined score determines advancement. Strict form required.</p>
`,
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
    fullDescription: `
<h3>Battle of Gyms – Team Round</h3>
<p>Teams of 6 (3 men + 3 women) represent gyms in multi-stage team workouts: strength segments, endurance relays, synchronization tests and final relay. The fastest team with least penalties advances.</p>
<p><strong>Rules:</strong> Teams must use members from the same gym; substitutes allowed only if pre-approved.</p>
`,
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
    fullDescription: `
<h2>Functional Fitness Challenge – Finals</h2>
<p>Only the strongest and most well-rounded athletes reach the finals. The final round consists of three stages testing strength, skill, endurance and speed — culminating in a final showdown finisher.</p>
<h3>Stage Examples</h3>
<ul>
  <li><strong>Stage 1 — Strength & Power:</strong> Heavy barbell complexes, sandbag over-shoulder</li>
  <li><strong>Stage 2 — Skill & Conditioning:</strong> Double-unders, wall balls, rowing sprints</li>
  <li><strong>Stage 3 — Final Showdown:</strong> A brutal finisher where fastest completion time wins</li>
</ul>
<p>Athletes must be prepared for surprises — final workout announced 24 hours before the event.</p>
`,
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
    fullDescription: `
<h3>Calisthenics Freestyle Finals</h3>
<p>Finalists perform 90-second freestyle routines on apparatus like pull-up bar and parallel bars. Judged on difficulty, execution, creativity, flow and stage presence.</p>
`,
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
    fullDescription: `
<h3>Strength Endurance Circuit – Finals</h3>
<p>The finals feature a 6-station circuit with higher intensity and stricter standards. Scoring prioritizes completed reps, technical execution and speed.</p>
`,
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
    fullDescription: `
<h3>Deadlift Championship – Finals</h3>
<p>Finals are RAW deadlifts — 3 attempts each. Strict judging, full lockout, and controlled descent required. Winners determined by heaviest successful lift with tie-breakers decided by lower bodyweight or sudden-death lift-off.</p>
`,
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
    id: "25",
    title: "Powerlifting King/Queen – Finals",
    description:
      "Final battle for Squat, Bench Press, and Deadlift to crown the strongest male and female lifters.",
    fullDescription: `
<h2>Powerlifting King/Queen – Finals</h2>
<p>Classic 3-lift powerlifting final. Athletes perform Squat, Bench, Deadlift with 3 attempts per lift. Total of best lifts decides the champion. Strict RAW rules apply.</p>
<p>Tie-breakers: lower bodyweight wins; if still tied, fewer failed attempts; if still tied → head-judge decision or lift-off.</p>
`,
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
    id: "22",
    title: "Push-Up & Plank Endurance – Finals",
    description:
      "Finalists compete in strict push-up and plank endurance challenges to crown the winners.",
    fullDescription: `
<h3>Push-Up & Plank Endurance – Finals</h3>
<p>Finals combine a strict max-push-up test and a maximum plank hold. The combined points determine the champions. Judges enforce strict form; faults end attempts immediately.</p>
`,
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
    id: "26",
    title: "Battle of Gyms – Grand Finale",
    description:
      "Top gym teams compete in relays, synchronized workouts, strength gauntlets, and obstacle courses to crown Bengaluru’s Fittest Gym.",
    fullDescription: `
<h2>Battle of Gyms – Grand Finale</h2>
<p>Grand finale between top gyms featuring 4 rounds (strength gauntlet, functional relay, synchronized team workout, and obstacle course). Points awarded per round. The highest cumulative points wins the Fittest Gym title.</p>
<p>Special awards include Best Team Coordination and Most Energetic Team.</p>
`,
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
]

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
  day?: string
  timing?: string
  dateOfBirth?: string
  mobileNumber?: string
  address?: {
    line1: string
    line2?: string
  }
  socialLinks?: {
    facebook?: string
    twitter?: string
    instagram?: string
  }
  skills?: {
    [key: string]: number
  }
  color?: string
}

// Speakers data
export const speakers: Speaker[] = [
  {
    id: "1",
    name: "John Doe",
    title: "Head Coach",
    bio: "John is a lead coach with 10+ years building functional athletes.",
    image: "/placeholder.svg?height=200&width=200",
    day: "Feb 21",
    timing: "10:00 AM",
    mobileNumber: "123-456-7890",
    address: {
      line1: "123 Main St",
      line2: "Bengaluru, India",
    },
    socialLinks: {
      instagram: "https://www.instagram.com",
    },
    skills: {
      coaching: 95,
      conditioning: 90,
    },
    color: "border-blue-500",
  },
  {
    id: "2",
    name: "Jane Smith",
    title: "Strength Coach",
    bio: "Jane specializes in strength sports and powerlifting coaching.",
    image: "/placeholder.svg?height=200&width=200",
    day: "Feb 21",
    timing: "11:00 AM",
    mobileNumber: "456-789-0123",
    address: {
      line1: "456 Elm St",
      line2: "Bengaluru, India",
    },
    socialLinks: {
      instagram: "https://www.instagram.com",
    },
    skills: {
      powerlifting: 98,
      technique: 92,
    },
    color: "border-red-500",
  },
  {
    id: "3",
    name: "Mike Brown",
    title: "Calisthenics Coach",
    bio: "Mike is a specialist in bodyweight strength and calisthenics progressions.",
    image: "/placeholder.svg?height=200&width=200",
    day: "Feb 21",
    timing: "12:00 PM",
    mobileNumber: "789-012-3456",
    address: {
      line1: "789 Oak St",
      line2: "Bengaluru, India",
    },
    socialLinks: {
      instagram: "https://www.instagram.com",
    },
    skills: {
      calisthenics: 95,
      mobility: 88,
    },
    color: "border-green-500",
  },
  {
    id: "4",
    name: "Sara Lee",
    title: "Conditioning Specialist",
    bio: "Sara focuses on conditioning and athlete preparation for competitions.",
    image: "/placeholder.svg?height=200&width=200",
    day: "Feb 22",
    timing: "10:30 AM",
    mobileNumber: "987-654-3210",
    address: {
      line1: "12 Park Ave",
      line2: "Bengaluru, India",
    },
    socialLinks: {
      instagram: "https://www.instagram.com",
    },
    skills: {
      conditioning: 94,
      programming: 89,
    },
    color: "border-purple-500",
  },
]

// Sponsors data
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
