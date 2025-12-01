"use client";

export default function HomeRegistration() {
  const items = [
    {
      title: "Book Your Tickets",
      image: "/images/ticket.jpg",
      link: "/register",
    },
    {
      title: "Exhibitor Enquiry",
      image: "/images/exhibitor.jpg",
      link: "/register?type=exhibitor",
    },
    {
      title: "Sponsor Enquiry",
      image: "/images/sponsor.jpg",
      link: "/register?type=sponsor",
    },
    {
      title: "Register For Fitness Fest Awards",
      image: "/images/awards.jpeg",
      link: "/awards/vote",
    },
  ];

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10 px-4">
      {items.map((item, idx) => (
        <a
          key={idx}
          href={item.link}
          className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer"
        >
          {/* Background Image */}
          <div
            className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${item.image})` }}
          />

          {/* Gradient overlay with your brand color */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#EA4A3E]/90 via-[#EA4A3E]/40 to-transparent"></div>

          {/* Text */}
          <div className="absolute bottom-6 left-6 text-white font-semibold text-xl leading-snug">
            {item.title.split(" ").slice(0, 2).join(" ")}
            <br />
            {item.title.split(" ").slice(2).join(" ")}
          </div>
        </a>
      ))}
    </div>
  );
}
