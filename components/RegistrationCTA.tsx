"use client"

import { useState } from "react"
import FiveKRunForm from "./FiveKRunForm"
import {Button} from "@/components/ui/button";


export default function RegistrationCTA() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <section className="...">
        {/* All your CTA content remains same */}

        <Button
          size="lg"
          className="bg-[#EA4A3E] ..."
          onClick={() => setOpen(true)}
        >
          Register for 5K Run - ₹1,298
        </Button>
      </section>

      <FiveKRunForm open={open} setOpen={setOpen} />
    </>
  )
}
