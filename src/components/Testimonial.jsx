import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Your Name",
      title: "Jarket Modern",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      rating: 5
    },
    {
      id: 2,
      name: "Your Name",
      title: "Jarket Modern",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      rating: 5
    },
    {
      id: 3,
      name: "Your Name",
      title: "Jarket Modern",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm text-gray-500 uppercase tracking-wide mb-4">
            Travel & Tourism Agency Website
          </p>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-2xl">
              From Booking to Boarding<br />– Excellence All the Way
            </h1>
            
            {/* Rating Badge */}
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-10 h-10 bg-gray-300 rounded-full"></div>
                ))}
              </div>
              <div className="text-3xl font-bold text-gray-900">10K+</div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Side - Large Image */}
          <div className="lg:col-span-5">
            <div className="bg-gray-300 rounded-2xl h-96 lg:h-full"></div>
          </div>

          {/* Right Side - Testimonials Carousel */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Testimonials Container */}
              <div className="flex gap-6 overflow-hidden">
                {testimonials.slice(currentIndex, currentIndex + 2).map((testimonial, idx) => (
                  <div 
                    key={testimonial.id}
                    className="flex-shrink-0 w-full lg:w-[calc(50%-12px)] bg-gray-100 rounded-2xl p-8 relative"
                  >
                    {/* Quote Icon */}
                    <Quote className="absolute top-6 right-6 w-12 h-12 text-gray-300" />
                    
                    {/* Title */}
                    <div className="text-teal-600 font-semibold mb-2">
                      {testimonial.title}
                    </div>
                    
                    {/* Name */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {testimonial.name}
                    </h3>
                    
                    {/* Review Text */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {testimonial.review}
                    </p>
                    
                    {/* Star Rating */}
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-5 h-5 text-teal-700 fill-teal-700" 
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-3 mt-8">
                <button 
                  onClick={prevSlide}
                  className="w-12 h-12 bg-white hover:bg-gray-100 border-2 border-gray-300 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="w-12 h-12 bg-teal-700 hover:bg-teal-800 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}