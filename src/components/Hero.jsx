import React, { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Hero = () => {
  const brandTag = {
    name: "HH Travels",
    subtitle: "Your Global Journey Start Here",
  };

  const heroContent = {
    title: "Where Every Journey Feels Like Home",
    description:
      "At Veltour, we craft unforgettable journeys with expert planning, personalized service, and a passion for exploration — making every trip seamless and memorable.",
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
    let handleMainEnter, handleMainLeave;
    let handleGetEnter, handleGetLeave;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // --- 1. Intro Animation ---
      tl.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1, duration: 0.7 })
        .fromTo(
          titleRef.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: "power4.out" },
          "-=0.3"
        )
        .fromTo(
          descRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          [buttonRef.current, mainButtonRef.current],
          { scale: 0.6, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.7, ease: "back.out(1.8)" },
          "-=0.5"
        );

      // --- 2. Widgets In ---
      tl.addLabel("widgetsIn", "-=0.7")
        .fromTo(
          rightWidgetsRef.current,
          { x: 80, opacity: 0 },
          { x: 0, opacity: 1, duration: 1.2, ease: "power4.out" },
          "widgetsIn"
        )
        .fromTo(
          [cardRef.current, bottomCardRef.current],
          { opacity: 0 },
          { opacity: 1, duration: 0.6, stagger: 0.1 },
          "widgetsIn+=0.2"
        );

      // --- 3. Scale Pop ---
      tl.addLabel("scalePopEffect", "+=0.2").to(
        [
          buttonRef.current,
          rightWidgetsRef.current,
          cardRef.current,
          bottomCardRef.current,
          mainButtonRef.current,
        ],
        {
          scale: 1.02,
          duration: 0.3,
          ease: "sine.out",
          yoyo: true,
          repeat: 1,
          stagger: 0.03,
        },
        "scalePopEffect"
      );

      // === Hover Animations with GSAP ===
      // Main round button
      handleMainEnter = () => {
        gsap.to(mainButtonRef.current, {
          scale: 1.12,
          rotation: 45,
          duration: 0.4,
          ease: "power2.out",
        });
      };
      handleMainLeave = () => {
        gsap.to(mainButtonRef.current, {
          scale: 1,
          rotation: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      };

      // Get Started button
      handleGetEnter = () => {
        gsap.to(buttonRef.current, {
          scale: 1.08,
          boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
          duration: 0.3,
          ease: "power2.out",
        });
      };
      handleGetLeave = () => {
        gsap.to(buttonRef.current, {
          scale: 1,
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          duration: 0.2,
          ease: "power2.out",
        });
      };

      // Attach listeners
      if (mainButtonRef.current) {
        mainButtonRef.current.addEventListener("pointerenter", handleMainEnter);
        mainButtonRef.current.addEventListener("pointerleave", handleMainLeave);
      }
      if (buttonRef.current) {
        buttonRef.current.addEventListener("pointerenter", handleGetEnter);
        buttonRef.current.addEventListener("pointerleave", handleGetLeave);
      }
    });

    // Cleanup
    return () => {
      if (mainButtonRef.current) {
        mainButtonRef.current.removeEventListener(
          "pointerenter",
          handleMainEnter
        );
        mainButtonRef.current.removeEventListener(
          "pointerleave",
          handleMainLeave
        );
      }
      if (buttonRef.current) {
        buttonRef.current.removeEventListener("pointerenter", handleGetEnter);
        buttonRef.current.removeEventListener("pointerleave", handleGetLeave);
      }
      ctx.revert();
    };
  }, []);

  return (
    <section
      className="relative w-full bg-gray-100 px-4 py-6 sm:px-6 sm:py-8 md:px-16 md:py-12"
      id="home"
    >
      <div
        ref={heroRef}
        className="bg-gray-300 h-full min-h-[500px] rounded-2xl bg-cover bg-center bg-opacity-70"
        style={{ backgroundImage: "url('/beach1.jpeg')" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 h-full">
          {/* Left Content */}
          <div className="col-span-1 md:col-span-2 bg-transparent rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 relative overflow-hidden h-full bg-opacity-70">
            <div className="flex items-center gap-2 text-white text-sm mb-4 sm:mb-6">
              <span className="bg-white text-gray-800 px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold shadow">
                {brandTag.name}
              </span>
              <span className="opacity-90 text-xs sm:text-sm">
                {brandTag.subtitle}
              </span>
            </div>

            <h1
              ref={titleRef}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-teal-700 leading-tight mb-4 sm:mb-6"
            >
              {heroContent.title}
            </h1>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
              <p
                ref={descRef}
                className="text-teal-900 opacity-90 max-w-lg mb-4 md:mb-8 text-sm sm:text-base"
              >
                {heroContent.description}
              </p>
              <Link to="/get-in-touch">
                <button
                  ref={buttonRef}
                  className="bg-white text-gray-700 font-medium px-6 sm:px-8 py-[8px] outline-none rounded-full shadow-lg transition-all duration-300 self-start md:self-auto"
                >
                  {heroContent.buttonText}
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side Widgets */}
          <div
            ref={rightWidgetsRef}
            className="flex flex-col gap-4 sm:gap-6 h-full justify-between"
          >
            <div className="bg-gray-100 rounded-2xl rounded-br-none rounded-tl-none flex flex-col p-4 sm:p-6 gap-4">
              {/* Top Card */}
              <div
                ref={cardRef}
                className="bg-teal-700 text-white rounded-3xl p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 shadow-lg justify-between h-32 sm:h-36 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <h3 className="text-base sm:text-lg font-semibold leading-snug">
                  {globalCard.title}
                </h3>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex -space-x-2">
                    <span
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-cover bg-center border-2 border-white"
                      style={{ backgroundImage: "url('/profile1.jpeg')" }}
                    ></span>
                    <span
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-cover bg-center border-2 border-white"
                      style={{ backgroundImage: "url('/profile2.jpeg')" }}
                    ></span>
                    <span
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-cover bg-center border-2 border-white"
                      style={{ backgroundImage: "url('/profile3.jpeg')" }}
                    ></span>
                    <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border-2 border-white flex items-center justify-center">
                      <ArrowUpRight size={16} className="text-teal-700" />
                    </span>
                  </div>
                  <p className="text-xl sm:text-2xl font-bold">
                    {globalCard.count}
                  </p>
                </div>
              </div>

              {/* Bottom Card */}
              <div
                ref={bottomCardRef}
                className="bg-gray-400 rounded-3xl h-32 sm:h-36 hover:bg-gray-500 transition-all duration-300 cursor-pointer bg-cover bg-center"
                style={{ backgroundImage: "url('/beach2.jpeg')" }}
              ></div>
            </div>
          </div>

          {/* Main Button */}
          <div className="hidden lg:flex w-20 relative bg-gray-100 items-center p-3 rounded-2xl rounded-tl-none rounded-br-none justify-center h-full">
            <div
              ref={mainButtonRef}
              className="bg-teal-700 text-white p-4 sm:p-5 rounded-full shadow-xl transition-all duration-300 cursor-pointer"
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
