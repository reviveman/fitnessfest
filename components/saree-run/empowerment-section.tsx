"use client"
import { Heart, Users, Sparkles, Shield } from "lucide-react"
import Image from "next/image"

export default function SareeEmpowermentSection() {
  const pillars = [
    {
      icon: Heart,
      title: "Cultural Pride",
      description:
        "Celebrate the timeless beauty and strength of traditional Indian sarees while breaking fitness boundaries.",
      image: "/images/sareerun/sareejog.png",
    },
    {
      icon: Users,
      title: "Sisterhood",
      description: "Join thousands of women in a supportive, judgment-free community united by passion and culture.",
      image: "/images/culturepride.png",
    },
    {
      icon: Sparkles,
      title: "Empowerment",
      description: "Prove that tradition and modernity can coexist, inspiring the next generation of active women.",
      image: "/images/sareerun/sareewalk.jpg",
    },
    {
      icon: Shield,
      title: "Safety & Support",
      description:
        "All-women's event with medical support, water stations, and trained volunteers every step of the way.",
      image: "/images/sareerun/support.png",
    },
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#0f172a] to-[#1a1f3a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why This Run Matters</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            More than just a 5K—it's a movement celebrating women, culture, and the limitless potential within every
            stride.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 hover:border-[#EA4A3E] transition-all duration-300 group hover:shadow-[0_0_20px_rgba(234,74,62,0.2)]"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={pillar.image || "/placeholder.svg"}
                    alt={pillar.title}
                    fill
                    className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-300"

                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent"></div>
                </div>

                <div className="p-8">
                  {/* <div className="bg-gradient-to-r from-[#EA4A3E] to-[#ff7b54] p-4 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div> */}
                  <h3 className="text-xl font-bold text-white mb-2">{pillar.title}</h3>
                  <p className="text-gray-300">{pillar.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Highlight Box */}
        <div className="relative rounded-xl overflow-hidden border border-[#EA4A3E]/40 bg-gradient-to-r from-[#EA4A3E]/15 to-[#d4a574]/15 backdrop-blur-md">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/images/saree.png"
              alt="Saree pattern background"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative p-10 text-center">
            <p className="text-2xl md:text-3xl font-bold text-white mb-4">A Saree is Mandatory</p>
            <p className="text-gray-200 text-lg max-w-2xl mx-auto">
              Not just attire—a symbol. Wear your saree with pride. Whether it's silk, cotton, printed, or traditional,
              your saree represents generations of strength and grace. Come as you are. Celebrate who you are.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
