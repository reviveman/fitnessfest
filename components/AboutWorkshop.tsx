"use client";
import Image from "next/image";
import { useState } from "react";
import { FiChevronsDown, FiChevronsUp } from "react-icons/fi";
import { FaChalkboardTeacher, FaUsers, FaChartLine } from "react-icons/fa";

const data = [
  {
    title: "LEARN FROM THE BEST IN INDUSTRY!",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    icon: <FaChalkboardTeacher className="text-pink-600 text-xl" />,
  },
  {
    title: "OUR SPEAKER EXPERIENCE IN THIS EVENT",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
    icon: <FaUsers className="text-pink-600 text-xl" />,
  },
  {
    title: "IMPROVE YOUR BUSINESS KNOWLEDGE",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quam felis, ultricies nec, pellentesque eu.",
    icon: <FaChartLine className="text-pink-600 text-xl" />,
  },
];

const AboutWorkshop = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
      {/* Left Image */}
      <div className="relative w-full h-[500px] flex justify-center items-center">
        <div className="absolute w-72 h-72 bg-pink-200 rounded-full -z-10" />
        <Image
          src="/workshop-guy.png"
          alt="Workshop Speaker"
          width={400}
          height={500}
          className="object-cover"
        />
      </div>

      {/* Right Content */}
      <div>
        <h5 className="text-pink-600 font-semibold uppercase mb-2">
          Mission and Aim
        </h5>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          About Our Workshop
        </h2>
        <p className="text-gray-600 mb-6">
          Consequat sociosqu sem officiis aute ridiculus repellat in aliquip at,
          metus sociosqu veritatis cubilia ac soluta? Faucibus ipsam, incidunt
          cras.
        </p>

        {/* Accordion */}
        <div className="space-y-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow-md"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex justify-between items-center cursor-pointer">
                <div className="flex items-center gap-3">
                  {item.icon}
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>
                </div>
                {activeIndex === index ? (
                  <FiChevronsUp className="text-gray-600" />
                ) : (
                  <FiChevronsDown className="text-gray-600" />
                )}
              </div>
              {activeIndex === index && (
                <p className="text-sm text-gray-600 mt-3">{item.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutWorkshop;
