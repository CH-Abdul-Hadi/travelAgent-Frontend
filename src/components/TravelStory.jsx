import React, { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

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
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm text-gray-900 uppercase tracking-wide mb-4 pl-4">
            Travel & Tourism Agency Website
          </p>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-around gap-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-md">
              Years of Crafting Dream Holidays
            </h1>

            {/* Stats */}
            <div className="flex gap-8 lg:gap-12">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  20+
                </div>
                <div className="text-sm text-gray-600">Lorem Ipsum Dolot</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  910+
                </div>
                <div className="text-sm text-gray-600">Lorem Ipsum Dolot</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  45K+
                </div>
                <div className="text-sm text-gray-600">Lorem Ipsum Dolot</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Side - Image and CTA */}
          <div className="space-y-6">
            <div
              className="bg-gray-300 rounded-lg h-64 bg-center bg-cover"
              style={{ backgroundImage: "url('/mount2.jpeg')" }}
            ></div>
          </div>
          {/* middle */}
          <div className="space-y-3">
            <div className="bg-white ">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Making Every Trip
                <br />
                Special Since Day One
              </h2>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, cectetur adipiscing elit, sed do
                eiusm tempor incididunt ut labore
              </p>
              <button className="bg-teal-700 hover:bg-teal-800 text-white font-medium px-6 py-3 rounded-full transition-colors">
                Get in touch
              </button>
            </div>
          </div>

          {/* Right Side - Large Image with Navigation */}
          <div className="space-y-3">
            <div className="relative">
              <div
                className="bg-gray-300 rounded-lg h-full min-h-96 bg-center bg-cover transition-all duration-700 ease-in-out"
                style={{
                  backgroundImage: `url(${stories[currentSlide].image})`,
                }}
              ></div>

              {/* Navigation Buttons */}
              <div className="absolute bottom-6 right-6 flex gap-3">
                <button
                  onClick={() =>
                    setCurrentSlide(
                      currentSlide === 0 ? stories.length - 1 : currentSlide - 1
                    )
                  }
                  className="w-12 h-12 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center shadow-lg transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                <button
                  onClick={() =>
                    setCurrentSlide(
                      currentSlide === stories.length - 1 ? 0 : currentSlide + 1
                    )
                  }
                  className="w-12 h-12 bg-teal-700 hover:bg-teal-800 rounded-full flex items-center justify-center shadow-lg transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Story Cards */}
        <div className="bg-teal-700 rounded-2xl w-[53rem] bottom-30 p-8 md:p-12 relative overflow-hidden">
          <div className="relative z-10 space-y-8">
            {/* Story Card 1 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pb-8 border-b border-teal-600">
              <div className="md:col-span-3">
                <div
                  className="bg-gray-300 rounded-lg h-32 w-full bg-center bg-cover"
                  style={{ backgroundImage: "url('/eiffiel.jpg')" }}
                ></div>
              </div>
              <div className="md:col-span-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  The Story Behind Veltour
                </h3>
                <p className="text-teal-100">
                  Lorem ipsum dolor sit amet, cectetur adipiscing elit, sed do
                  eiusm tempor incididunt ut labore
                </p>
              </div>
              <div className="md:col-span-3 flex justify-between items-center md:justify-end md:gap-8">
                <div className="text-6xl font-bold text-white">01</div>
                <button className="text-white hover:text-teal-200 transition-colors flex items-center gap-2">
                  <span className="font-medium">Read More</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Story Card 2 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-3 order-2 md:order-1">
                <div className="text-6xl font-bold text-white">02</div>
              </div>
              <div className="md:col-span-6 order-3 md:order-2">
                <h3 className="text-2xl font-bold text-white mb-3">
                  The Story Behind Veltour
                </h3>
                <p className="text-teal-100">
                  Lorem ipsum dolor sit amet, cectetur adipiscing elit, sed do
                  eiusm tempor incididunt ut labore
                </p>
                <button className="text-white hover:text-teal-200 transition-colors flex items-center gap-2 mt-4">
                  <span className="font-medium">Read More</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="md:col-span-3 order-1 md:order-3">
                <div
                  className="bg-gray-300 rounded-lg h-32 w-full bg-center bg-cover"
                  style={{ backgroundImage: "url('/beach2.jpeg')" }}
                ></div>
              </div>
            </div>
          </div>
          {/* Background Text */}
        </div>
        <div className="absolute right-0 top-550 text-gray-800 opacity-10 font-bold text-[12rem] md:text-[16rem] leading-none pointer-events-none">
          Trav
        </div>
      </div>
    </div>
  );
}
