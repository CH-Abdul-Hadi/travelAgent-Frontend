import React, { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  ArrowUpRight,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const headerRef = useRef(null);
  const imageRef = useRef(null);
  const cardsRef = useRef([]);
  const btnsRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Jarina Patel",
      title: "Honeymoon & Luxury",
      review:
        "Veltour made our dream honeymoon to the Maldives absolutely perfect! Every detail was flawlessly arranged, and the experience exceeded all our expectations. We couldn't be happier!",
      rating: 5,
    },
    {
      id: 2,
      name: "Alex Thompson",
      title: "Solo & Adventure",
      review:
        "Booking my solo adventure through Southeast Asia with Veltour was the best decision! Their local guides were incredible, and the itinerary was perfectly balanced between culture and adventure. Highly recommended!",
      rating: 5,
    },
  ];

  const profileImage = ["/profile4.jpeg", "/profile5.jpeg", "/profile3.jpeg"];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // GSAP Animations
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 85%",
      },
    });

    tl.from(headerRef.current, {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out",
    })
      .from(imageRef.current, {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power3.out",
      })
      .from(cardsRef.current, {
        opacity: 0,
        x: 100,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
      })
      .from(btnsRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: "back.out(1.7)",
      });
  }, []);

  return (
    <div
      className="min-h-screen bg-white py-12 px-4 sm:px-6 md:py-16 lg:px-8"
      id="testimonial"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="mb-10 md:mb-12">
          <p className="text-sm text-gray-500 uppercase tracking-wide mb-3 md:mb-4 text-center lg:text-left">
            Travel & Tourism Agency
          </p>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 max-w-2xl mx-auto lg:mx-0 leading-snug">
              From Booking to Boarding
              <br />– Excellence All the Way
            </h1>

            {/* Rating Badge */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <div className="flex gap-1">
                {profileImage.map((item, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-300 rounded-full bg-center bg-cover"
                    style={{ backgroundImage: `url('${item}')` }}
                  ></div>
                ))}
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-teal-700 border-2 border-teal-700 flex items-center justify-center">
                  <ArrowUpRight size={14} className="text-gray-50" />
                </span>
              </div>

              <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                10K+
                <span className="text-sm text-gray-600 ml-1">
                  Satisfied Clients
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {/* Left Side - Image */}
          <div className="lg:col-span-5 order-1 lg:order-none" ref={imageRef}>
            <div
              className="bg-gray-300 rounded-2xl h-64 sm:h-80 md:h-96 lg:h-full bg-center bg-cover"
              style={{ backgroundImage: "url('/beach5.jpg')" }}
              aria-label="Tropical luxury vacation scene"
            ></div>
          </div>

          {/* Right Side - Testimonials Carousel */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Testimonials Container */}
              <div className="flex flex-col md:flex-row gap-6 overflow-hidden">
                {testimonials
                  .slice(currentIndex, currentIndex + 2)
                  .map((testimonial, index) => (
                    <div
                      key={testimonial.id}
                      ref={(el) => (cardsRef.current[index] = el)}
                      className="flex-shrink-0 w-full md:w-[calc(50%-12px)] bg-gray-100 rounded-2xl p-6 sm:p-8 relative"
                    >
                      <Quote className="absolute top-5 right-5 w-10 h-10 sm:w-12 sm:h-12 text-gray-300" />

                      <div className="text-teal-600 font-semibold mb-2">
                        {testimonial.title}
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                        {testimonial.name}
                      </h3>

                      <p className="text-gray-600 mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base">
                        {testimonial.review}
                      </p>

                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 sm:w-5 sm:h-5 text-teal-700 fill-teal-700"
                          />
                        ))}
                      </div>
                    </div>
                  ))}
              </div>

              {/* Navigation Buttons */}
              <div
                ref={btnsRef}
                className="flex gap-3 mt-6 sm:mt-8 justify-center md:justify-start"
              >
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white hover:bg-gray-100 border-2 border-gray-300 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-700 hover:bg-teal-800 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
