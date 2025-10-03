import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TravelStory() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const stories = [
    {
      id: 1,
      title: "The Story Behind Veltour",
      description: "Lorem ipsum dolor sit amet, cectetur adipiscing elit, sed do eiusm tempor incididunt ut labore"
    },
    {
      id: 2,
      title: "The Story Behind Veltour",
      description: "Lorem ipsum dolor sit amet, cectetur adipiscing elit, sed do eiusm tempor incididunt ut labore"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm text-gray-500 uppercase tracking-wide mb-4">
            Travel & Tourism Agency Website
          </p>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-md">
              Years of Crafting Dream Holidays
            </h1>
            
            {/* Stats */}
            <div className="flex gap-8 lg:gap-12">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">20+</div>
                <div className="text-sm text-gray-600">Lorem Ipsum Dolot</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">910+</div>
                <div className="text-sm text-gray-600">Lorem Ipsum Dolot</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">45K+</div>
                <div className="text-sm text-gray-600">Lorem Ipsum Dolot</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Side - Image and CTA */}
          <div className="space-y-6">
            <div className="bg-gray-300 rounded-lg h-64"></div>
            
            <div className="bg-white">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Making Every Trip<br />Special Since Day One
              </h2>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, cectetur adipiscing elit, sed do eiusm tempor incididunt ut labore
              </p>
              <button className="bg-teal-700 hover:bg-teal-800 text-white font-medium px-6 py-3 rounded-full transition-colors">
                Get in touch
              </button>
            </div>
          </div>

          {/* Right Side - Large Image with Navigation */}
          <div className="relative">
            <div className="bg-gray-300 rounded-lg h-full min-h-96"></div>
            
            {/* Navigation Buttons */}
            <div className="absolute bottom-6 right-6 flex gap-3">
              <button 
                onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                className="w-12 h-12 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center shadow-lg transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button 
                onClick={() => setCurrentSlide(Math.min(stories.length - 1, currentSlide + 1))}
                className="w-12 h-12 bg-teal-700 hover:bg-teal-800 rounded-full flex items-center justify-center shadow-lg transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Story Cards */}
        <div className="bg-teal-700 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Background Text */}
          <div className="absolute right-0 bottom-0 text-gray-300 opacity-10 font-bold text-[12rem] md:text-[16rem] leading-none pointer-events-none">
            Trav
          </div>

          <div className="relative z-10 space-y-8">
            {/* Story Card 1 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pb-8 border-b border-teal-600">
              <div className="md:col-span-3">
                <div className="bg-gray-300 rounded-lg h-32 w-full"></div>
              </div>
              <div className="md:col-span-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  The Story Behind Veltour
                </h3>
                <p className="text-teal-100">
                  Lorem ipsum dolor sit amet, cectetur adipiscing elit, sed do eiusm tempor incididunt ut labore
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
                  Lorem ipsum dolor sit amet, cectetur adipiscing elit, sed do eiusm tempor incididunt ut labore
                </p>
                <button className="text-white hover:text-teal-200 transition-colors flex items-center gap-2 mt-4">
                  <span className="font-medium">Read More</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="md:col-span-3 order-1 md:order-3">
                <div className="bg-gray-300 rounded-lg h-32 w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}