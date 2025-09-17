import AboutEvent from "@/components/aboutknowmore"
import CardSection from "@/components/AboutCardSection"
import AboutWorkshop from "@/components/AboutWorkshop"
// import NewsletterForm from "@/components/newsletter-form"

export default function AboutPage() {
  return (
    <main className="">
      {/* Hero Section */}
      <section className="min-h-[75vh] bg-cover bg-center py-20 flex items-center relative" style={{ backgroundImage: "url('/images/eventum-img1.jpg')" }}>
  <div
  className="absolute inset-0 bg-black opacity-80"></div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-3xl mx-auto text-center">
   <h1 className=" mt-25 text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-white">
  About Us
</h1>


<p className="text-lg md:text-xl text-white">
  The Fitness Fest is a premier platform for athletes, trainers, wellness experts, and brands to come together and shape the future of health and fitness. With cutting-edge trends, inspiring sessions, and powerful networking opportunities, this event is tailored for those committed to excellence in body, mind, and performance.
</p>
    </div>
  </div>
</section>


<AboutEvent />

<CardSection />
{/* <AboutWorkshop /> */}

    </main>
  )
}
