import Image from "next/image";

export default function KnowMoreSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side Image with overlay */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative max-w-sm w-full">
              {/* Main Image */}
              <div className="overflow-hidden rounded-3xl shadow-lg">
                <Image
                  src="/fitness-trainer-man.png"
                  alt="Main Event"
                  width={500}
                  height={350}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Overlay Image (Desktop only, positioned inside container) */}
              <div className="absolute -bottom-8 -right-8 w-[150px] rounded-2xl shadow-lg overflow-hidden border-4 border-white bg-white hidden lg:block">
                <Image
                  src="/adaptive-fitness-trainer.png"
                  alt="Overlay Event"
                  width={250}
                  height={250}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 leading-snug">
              <span className="bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
                Discover the Energy of
              </span>{" "}
              Bengaluru Fitness Festival 2026
            </h2>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
              Get ready to experience Bengaluru’s most dynamic celebration of
              health, fitness, and holistic well-being. The Bengaluru Fitness
              Festival 2026, happening on{" "}
              <strong>28–29 March</strong> at{" "}
              <strong>KTPO Convention Centre</strong>, brings together fitness
              enthusiasts, industry experts, and wellness brands for an
              electrifying two-day event.
            </p>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
              From high-intensity workouts and inspirational speaker sessions to
              wellness workshops, fitness competitions, and a vibrant healthy
              living expo - this festival is designed to energize, educate, and
              empower. Whether you're a seasoned athlete, a weekend warrior, or
              just beginning your wellness journey, there’s something here for
              everyone. Join us in redefining fitness - not just as a routine,
              but as a lifestyle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
