import React, { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";

const Hero = () => {
  const brandTag = {
    name: "Veltour",
    subtitle: "Travel & Tourism Agency Website",
  };

  const heroContent = {
    title: "Where Every Journey Feels Like Home",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab",
    buttonText: "Get Started",
    buttonUrl: "#",
  };

  const globalCard = {
    title: "Your Gateway to Global Adventures",
    count: "10K+",
  };

  // Refs
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);
  const cardRef = useRef(null);
  const bottomCardRef = useRef(null);
  const mainButtonRef = useRef(null);
  const rightWidgetsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6 })
        .fromTo(
          titleRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.2"
        )
        .fromTo(
          descRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.4"
        )
        .fromTo(
          buttonRef.current,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
          "-=0.3"
        )

        // Right widgets — smoother entrance with slight slide + stagger
        .fromTo(
          rightWidgetsRef.current,
          { x: 60, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power4.out" },
          "-=0.5"
        )
        .fromTo(
          cardRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power4.out" },
          "-=0.7"
        )
        .fromTo(
          bottomCardRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power4.out" },
          "-=0.6"
        )

        // Bottom arrow button — scale + bounce + rotation
        .fromTo(
          mainButtonRef.current,
          { scale: 0.3, opacity: 0 },
          {
            scale: 1,
            rotation: 0,
            opacity: 1,
            duration: 0.5,
            ease: "elastic.out(1,0.5)",
          },
          "-=0.5"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full bg-gray-100 px-6 py-8 md:px-16 md:py-12">
      <div
        ref={heroRef}
        className="bg-gray-300 h-full min-h-[500px] rounded-2xl"
      >
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
            <h1
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              {heroContent.title}
            </h1>

            <div className="flex">
              {/* Description */}
              <p ref={descRef} className="text-white opacity-90 max-w-lg mb-8">
                {heroContent.description}
              </p>

              {/* CTA Button */}
              <a href={heroContent.buttonUrl}>
                <button
                  ref={buttonRef}
                  className="bg-white text-gray-700 font-medium px-8 py-3 rounded-full shadow-lg hover:bg-gray-50 hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  {heroContent.buttonText}
                </button>
              </a>
            </div>
          </div>

          {/* Right Side Widgets */}
          <div
            ref={rightWidgetsRef}
            className="flex flex-col gap-6 h-full justify-between"
          >
            <div className="bg-gray-200 rounded-2xl rounded-br-none rounded-tl-none flex flex-col p-6 gap-4">
              {/* Top Card */}
              <div
                ref={cardRef}
                className="bg-teal-700 text-white rounded-3xl p-6 flex flex-col gap-4 shadow-lg justify-between h-36 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <h3 className="text-lg font-semibold leading-snug">
                  {globalCard.title}
                </h3>
                <div className="flex items-center gap-3">
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

              {/* Bottom Card */}
              <div
                ref={bottomCardRef}
                className="bg-gray-400 text-transparent rounded-3xl h-36 hover:bg-gray-500 transition-all duration-300 cursor-pointer"
              >
                hh
              </div>
            </div>
          </div>

          {/* Main Button */}
          <div className="w-22 relative bg-gray-200 flex items-center p-3 rounded-2xl rounded-tl-none rounded-br-none justify-center h-full">
            <div
              ref={mainButtonRef}
              className="bg-teal-700 text-white p-5 rounded-full shadow-xl hover:scale-110 hover:rotate-45 hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <ArrowUpRight size={32} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
