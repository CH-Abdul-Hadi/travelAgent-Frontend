import React from "react";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  // ========== EASY EDIT SECTION - CUSTOMIZE HERE ==========

  // Brand Tag
  const brandTag = {
    name: "Veltour",
    subtitle: "Travel & Tourism Agency Website",
  };

  // Hero Content
  const heroContent = {
    title: "Where Every Journey Feels Like Home",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab",
    buttonText: "Get Started",
    buttonUrl: "#",
  };

  // Right Side Card
  const globalCard = {
    title: "Your Gateway to Global Adventures",
    count: "10K+",
  };

  // ========== END EASY EDIT SECTION ==========

  return (
    <section className="relative w-full bg-gray-100 px-6 py-8 md:px-16 md:py-12">
      <div className="bg-gray-300 h-full min-h-[500px] rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
          {/* Left Content */}
          <div className="col-span-1 md:col-span-2 bg-gray-300 rounded-3xl p-10 md:p-12 relative overflow-hidden h-full">
            {/* Top Tag */}
            <div className="flex items-center gap-2 text-white text-sm mb-6">
              <span className="bg-white text-gray-800 px-4 py-1.5 rounded-full text-xs font-semibold shadow">
                {brandTag.name}
              </span>
              <span className="opacity-90">{brandTag.subtitle}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {heroContent.title}
            </h1>

            {/* Description */}
            <p className="text-white opacity-90 max-w-lg mb-8">
              {heroContent.description}
            </p>

            {/* CTA Button */}
            <a href={heroContent.buttonUrl}>
              <button className="bg-white text-gray-700 font-medium px-8 py-3 rounded-full shadow-lg hover:bg-gray-50 transition">
                {heroContent.buttonText}
              </button>
            </a>
          </div>

          {/* Right Side Widgets */}
          <div className="flex flex-col gap-6 h-full justify-between">
            {/* Top Card */}
            <div className="bg-gray-200 rounded-2xl flex p-6 flex-col flex-1">
              <div className="bg-teal-700 text-white rounded-3xl p-6 h-52 flex flex-col gap-4 shadow-lg flex-1">
                <h3 className="text-lg font-semibold leading-snug">
                  {globalCard.title}
                </h3>
                <div className="flex items-center gap-3">
                  {/* Avatar Circles */}
                  <div className="flex -space-x-2">
                    <span className="w-9 h-9 rounded-full bg-gray-200 border-2 border-white"></span>
                    <span className="w-9 h-9 rounded-full bg-gray-300 border-2 border-white"></span>
                    <span className="w-9 h-9 rounded-full bg-gray-400 border-2 border-white"></span>
                    <span className="w-9 h-9 rounded-full bg-white border-2 border-white flex items-center justify-center">
                      <ArrowUpRight size={16} className="text-teal-700" />
                    </span>
                  </div>
                  <p className="text-2xl font-bold">{globalCard.count}</p>
                </div>
              </div>
              <div className="bg-gray-400 rounded-3xl h-28 mt-4"></div>
            </div>
          </div>

          {/* btn */}
          <div className="w-18 relative bg-gray-200 flex items-center justify-center h-full">
            <div className="bg-teal-700 text-white p-5 rounded-full shadow-xl hover:scale-110 transition-transform cursor-pointer">
              <ArrowUpRight size={32} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
