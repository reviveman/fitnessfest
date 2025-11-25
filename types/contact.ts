export type Contact = {
  id: string
  name: string
  email: string
  phone: string | null
  subject: string | null
  message: string
  type: string

  // Exhibitor fields
  fitnessLevel: string | null
  competitionInterest: string | null
  experience: string | null

  // Sponsor fields
  company: string | null
  website: string | null
  sponsorshipLevel: string | null

  createdAt: Date
  updatedAt: Date
}
