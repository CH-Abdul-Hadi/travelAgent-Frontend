import React, { useState } from "react";
import { Play, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const footerLinks = [
    {
      title: "Quick Links",
      links: ["Home", "Destination", "Stories", "About"],
    },
    {
      title: "Resources",
      links: [
        "Blog",
        "FAQ",
        "Privacy Policy",
        "Terms & Conditions",
        "Support",
      ],
    },
    {
      title: "Popular Tours",
      links: [
        "European Grand Tour",
        "Asian Escapes",
        "African Safaris",
        "Cruise Adventures",
        "Adventure Treks",
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Video Section */}
      <div
        className="relative bg-center bg-cover h-96 flex items-center justify-center"
        style={{ backgroundImage: "url('/vidThumb.png')" }}
      >
        {!isPlaying && (
          <>
            <video
              src="/vidFooter.mp4"
              className="w-full h-full object-cover rounded"
              muted
              preload="metadata"
              poster="/vidFooter-poster.jpg"
            />
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute z-10 w-20 h-20 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110"
              aria-label="Play video"
            >
              <Play className="w-8 h-8 text-teal-700 fill-teal-700 ml-1" />
            </button>
          </>
        )}
        {isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center">
            <video
              src="/vidFooter.mp4"
              autoPlay
              muted
              className="w-full h-full object-cover rounded"
              onClick={() => setIsPlaying(false)}
            />
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold mb-2">Veltour</h2>
              <p className="text-teal-200 mb-8">Travel & Tour</p>

              {/* Small Gallery */}
              <div className="flex gap-4 mb-8">
                <div
                  className="w-16 h-16 bg-gray-200 rounded bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/mount1.jpeg')",
                  }}
                  aria-label="Snow-capped mountains trekking"
                ></div>
                <div
                  className="w-16 h-16 bg-gray-200 rounded bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/cherry.jpg')",
                  }}
                  aria-label="Cherry blossoms with traditional pagoda"
                ></div>
                <div
                  className="w-16 h-16 bg-gray-200 rounded bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/great-wall.jpg')",
                  }}
                  aria-label="Lush green forest national park"
                ></div>
              </div>

              {/* Social Icons */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5 text-teal-700" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5 text-teal-700" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5 text-teal-700" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-teal-700" />
                  </a>
                </div>
              </div>
            </div>

            {/* Links Columns */}
            {footerLinks.map((column, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-6">{column.title}</h3>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={`#${link.toLowerCase()}`}
                        className="text-teal-200 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-teal-600 pt-8 text-center">
            <p className="text-teal-200 text-sm">
              Copyright © 2025 Veltour | Powered by Sanstive
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
