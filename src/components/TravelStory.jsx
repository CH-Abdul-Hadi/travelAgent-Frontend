import React, { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function TravelStory() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const stories = [
    {
      id: 1,
      image: "/cherry.jpg",
      title: "Tropical Escape",
    },
    {
      id: 2,
      image: "/lake.jpg",
      title: "Mountain Adventure",
    },
    {
      id: 3,
      image: "/mount4.jpeg",
      title: "Seaside Journey",
    },
    {
      id: 4,
      image: "/great-wall.jpg",
      title: "Seaside Journey",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8" id="stories">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <p className="text-xs sm:text-sm text-gray-900 uppercase tracking-wide mb-3 sm:mb-4 pl-2 sm:pl-4">
            Travel & Tourism Agency Website
          </p>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-around gap-4 sm:gap-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 max-w-md px-2 sm:px-0">
              Years of Crafting Dream Holidays
            </h1>

            {/* Stats */}
            <div className="flex gap-6 sm:gap-8 lg:gap-12 px-2 sm:px-0">
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-1 sm:mb-2">
                  20+
                </div>
                <div className="text-xs sm:text-sm text-gray-600">Years of Experience</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-1 sm:mb-2">
                  910+
                </div>
                <div className="text-xs sm:text-sm text-gray-600">Exotic Destinations</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-1 sm:mb-2">
                  45K+
                </div>
                <div className="text-xs sm:text-sm text-gray-600">Happy Travelers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
          {/* Left Side - Image and CTA */}
          <div className="space-y-4 sm:space-y-6">
            <div
              className="bg-gray-300 rounded-lg h-48 sm:h-56 md:h-full bg-center bg-cover"
              style={{ backgroundImage: "url('/mount2.jpeg')" }}
            ></div>
          </div>
          {/* middle */}
          <div className="space-y-3">
            <div className="bg-white">
              <h2 className="text-xl sm:text-2xl font-bold lg:pt-8 text-gray-900 mb-2 sm:mb-3">
                Making Every Trip
                <br />
                Special Since Day One
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                From serene mountain getaways to vibrant city escapes, we craft
                personalized travel experiences that leave lasting memories. Our
                team ensures every journey is comfortable, safe, and filled with
                unforgettable moments.
              </p>
              <Link to="/get-in-touch">
              <button className="bg-teal-700 hover:bg-teal-800 text-white font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-colors text-sm sm:text-base">
                Get in touch
              </button>
              </Link>
            </div>
          </div>

          {/* Right Side - Large Image with Navigation */}
          <div className="space-y-3 md:col-span-2 lg:col-span-1">
            <div className="relative">
              <div
                className="bg-gray-300 rounded-lg h-64 sm:h-80 md:h-96 bg-center bg-cover transition-all duration-700 ease-in-out"
                style={{
                  backgroundImage: `url(${stories[currentSlide].image})`,
                }}
              ></div>

              {/* Navigation Buttons */}
              <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 flex gap-2 sm:gap-3">
                <button
                  onClick={() =>
                    setCurrentSlide(
                      currentSlide === 0 ? stories.length - 1 : currentSlide - 1
                    )
                  }
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center shadow-lg transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                </button>
                <button
                  onClick={() =>
                    setCurrentSlide(
                      currentSlide === stories.length - 1 ? 0 : currentSlide + 1
                    )
                  }
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-700 hover:bg-teal-800 rounded-full flex items-center justify-center shadow-lg transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Story Cards */}
        <div className="bg-teal-700 rounded-2xl w-full max-w-full lg:max-w-[53rem] p-6 sm:p-8 md:p-12 relative overflow-hidden">
          <div className="relative z-10 space-y-6 sm:space-y-8">
            {/* Story Card 1 - updated structure */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-center pb-6 sm:pb-8 border-b border-teal-600">
              <div className="md:col-span-3 order-2 md:order-1">
                <div
                  className="bg-gray-300 rounded-lg h-24 sm:h-28 md:h-32 w-full bg-center bg-cover"
                  style={{ backgroundImage: "url('/eiffiel.jpg')" }}
                ></div>
              </div>
              <div className="md:col-span-6 order-3 md:order-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                  The Story Behind Veltour
                </h3>
                <p className="text-sm sm:text-base text-teal-100">
                  Discover how Veltour began its journey of turning wanderlust
                  into reality. We started with one mission — to make global
                  travel simple, joyful, and accessible to everyone.
                </p>
                <button className="text-white hover:text-teal-200 transition-colors flex items-center gap-2 mt-3 sm:mt-4 text-sm sm:text-base">
                  <span className="font-medium">Read More</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
              <div className="md:col-span-3 order-1 md:order-3">
                <div className="text-5xl sm:text-6xl font-bold text-white">01</div>
              </div>
            </div>

            {/* Story Card 2 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-center">
              <div className="md:col-span-3 order-2 md:order-1">
                <div className="text-5xl sm:text-6xl font-bold text-white">02</div>
              </div>
              <div className="md:col-span-6 order-3 md:order-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                  The Story Behind Veltour
                </h3>
                <p className="text-sm sm:text-base text-teal-100">
                  Over the years, we've connected thousands of travelers to the
                  world's most stunning destinations. Join us as we continue to
                  explore, inspire, and redefine the way you travel.
                </p>
                <button className="text-white hover:text-teal-200 transition-colors flex items-center gap-2 mt-3 sm:mt-4 text-sm sm:text-base">
                  <span className="font-medium">Read More</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
              <div className="md:col-span-3 order-1 md:order-3">
                <div
                  className="bg-gray-300 rounded-lg h-24 sm:h-28 md:h-32 w-full bg-center bg-cover"
                  style={{ backgroundImage: "url('/beach2.jpeg')" }}
                ></div>
              </div>
            </div>
          </div>
          {/* Background Text */}
        </div>
        <div className="absolute right-0 top-550 text-gray-800 opacity-10 font-bold text-[8rem] sm:text-[10rem] md:text-[12rem] lg:text-[16rem] leading-none pointer-events-none hidden sm:block ">
          Trav
        </div>
      </div>
    </div>
  );
}