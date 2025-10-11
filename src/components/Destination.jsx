import React, { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Destination() {
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  const destinations = [
    {
      id: 1,
      name: "china cherry blossom park",
      rating: 4.8,
      price: 200,
      image: "/cherry.jpg",
    },
    {
      id: 2,
      name: "china great wall",
      rating: 4.5,
      price: 150,
      image: "/great-wall.jpg",
    },
    {
      id: 3,
      name: "lake valley",
      rating: 4.3,
      price: 200,
      image: "/lake.jpg",
    },
  ];

  useEffect(() => {
    // Header animation
    gsap.from(headerRef.current, {
      opacity: 0,
      y: 80,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 85%",
      },
    });

    // Cards animation (stagger)
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 80,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardsRef.current[0],
        start: "top 85%",
      },
    });
  }, []);

  return (
    <div
      className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8"
      id="destination"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12">
          <p className="text-sm text-gray-500 uppercase tracking-wide mb-4">
            Travel & Tourism Agency Website
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-3xl mx-auto">
            Handpicked Places for You to Discover
          </h1>
        </div>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div
                className="bg-gray-300 h-64 w-full bg-center bg-cover"
                style={{ backgroundImage: `url('${destination.image}')` }}
              ></div>

              {/* Content */}
              <div className="bg-teal-700 p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white capitalize">
                    {destination.name}
                  </h3>
                  <div className="flex items-center gap-1 bg-teal-600 px-2 py-1 rounded">
                    <span className="text-white text-sm font-medium">
                      {destination.rating}/5
                    </span>
                    <Star className="w-4 h-4 text-white fill-white" />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Link to="/get-in-touch">
                    <button className="bg-white hover:bg-gray-100 text-teal-700 font-medium px-6 py-2 rounded-full transition-colors">
                      Book Now
                    </button>
                  </Link>
                  <div className="text-white text-2xl font-bold">
                    ${destination.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
