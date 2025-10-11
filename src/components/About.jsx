import React from "react";
import { MapPin, Target, Eye } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 overflow-x-hidden px-4 sm:px-6 lg:px-8 relative" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
            Travel & Tourism Agency
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Years of Crafting Dream Holidays
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700">
            Making Every Trip Special Since Day One
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left - Large Image */}
          <div className="relative">
            <div
              className="bg-gray-300 rounded-lg h-96 w-full bg-cover bg-center"
              style={{ backgroundImage: "url('/mount1.jpeg')" }}
              aria-label="Misty majestic mountain peak"
            ></div>
          </div>

          {/* Middle - Small Image */}
          <div className="space-y-8">
            <div
              className="bg-gray-300 rounded-lg h-44 w-full bg-center bg-cover"
              style={{ backgroundImage: "url('/cherry.jpg')" }}
              aria-label="Ancient pagoda with cherry blossoms and Mount Fuji"
            ></div>
          </div>

          {/* Right - Text Section */}
          <div className="bg-transparent p-8 h-44 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Making Every Trip Special Since Day One
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              At Veltour, we believe travel should be more than just a trip;
              it's an experience. From the moment you dream of a destination to
              the day you return, we meticulously plan every detail to create
              extraordinary memories.
            </p>
              <Link to="/get-in-touch">

            <button className="bg-teal-700 hover:bg-teal-800 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors w-fit">
              Get in touch
            </button>
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="absolute bottom-0 left-2/3 -translate-x-1/2 w-full max-w-7xl px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* 20+ Years Experience */}
            <div className="bg-teal-700 text-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-6 h-6" />
                <span className="text-sm font-medium">Years Experience</span>
              </div>
              <h3 className="text-5xl font-bold mb-4">20+</h3>
              <p className="text-teal-100">
                Years of experience crafting exceptional travel adventures.
              </p>
            </div>

            {/* 910+ Trips Arranged */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-700 rounded-lg mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                910+ Happy Travelers
              </h3>
              <p className="text-gray-600">
                Successfully arranged trips across the globe with complete
                satisfaction.
              </p>
            </div>

            {/* 45K+ Destinations Explored */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-700 rounded-lg mb-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                45K+ Amazing Destinations
              </h3>
              <p className="text-gray-600">
                From tropical beaches to mountain peaks, explore the world with
                Veltour.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
