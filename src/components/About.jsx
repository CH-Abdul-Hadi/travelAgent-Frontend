import React from 'react';
import { MapPin, Target, Eye } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
            Travel & Tourism Agency Website
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            More Than a Travel Agency
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700">
            Your Journey Companion
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Image Placeholders */}
          <div className="relative">
            <div className="bg-gray-300 rounded-lg h-96 w-full"></div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gray-300 rounded-lg h-44 w-full"></div>
            
            {/* Memories Section */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                We Create Memories, Not Just Trips
              </h2>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="bg-teal-700 hover:bg-teal-800 text-white font-medium px-6 py-3 rounded-full transition-colors">
                Get in touch
              </button>
            </div>
          </div>
        </div>

        {/* Stats and Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 400+ Destinations Card */}
          <div className="bg-teal-700 text-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6" />
              <span className="text-sm font-medium">Destination</span>
            </div>
            <h3 className="text-5xl font-bold mb-4">400+</h3>
            <p className="text-teal-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lao
            </p>
          </div>

          {/* Our Mission Card */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-700 rounded-lg mb-4">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, cectetur adipiscing elit, sed do eiusm tempor incididunt ut labore et dolore
            </p>
          </div>

          {/* Our Vision Card */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-700 rounded-lg mb-4">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, cectetur adipiscing elit, sed do eiusm tempor incididunt ut labore et dolore
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}