import { Suspense } from "react"
import ContactPage from "./ContactPage"

export default function ContactPageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactPage />
    </Suspense>
  )
}
