import React, { useState, useLayoutEffect, useRef } from "react";
import { Play, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HashLink } from "react-router-hash-link"; // ✅ Added
import { Link } from "react-router-dom"; // for non-hash links if needed

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef(null);

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", url: "/#home" },
        { name: "Destination", url: "/#destination" },
        { name: "Stories", url: "/#stories" },
        { name: "About", url: "/#about" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", url: "#" },
        { name: "FAQ", url: "#" },
        { name: "Privacy Policy", url: "#" },
        { name: "Terms & Conditions", url: "#" },
        { name: "Support", url: "#" },
      ],
    },
    {
      title: "Popular Tours",
      links: [
        { name: "European Grand Tour", url: "#" },
        { name: "Asian Escapes", url: "#" },
        { name: "African Safaris", url: "#" },
        { name: "Cruise Adventures", url: "#" },
        { name: "Adventure Treks", url: "#" },
      ],
    },
  ];

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      gsap.from(".footer-video", {
        opacity: 0,
        y: 30,
        scale: 0.98,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".footer-video",
          start: "top 90%",
        },
      });

      gsap.from(".footer-play-btn", {
        opacity: 0,
        scale: 0.6,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".footer-video",
          start: "top 90%",
        },
      });

      ScrollTrigger.batch(".footer-gallery-item", {
        onEnter: (batch) =>
          gsap.from(batch, {
            opacity: 0,
            y: 18,
            stagger: 0.06,
            duration: 0.5,
            ease: "power2.out",
          }),
        start: "top 95%",
      });

      gsap.from(".footer-social", {
        opacity: 0,
        y: 18,
        stagger: 0.08,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".footer-main",
          start: "top 90%",
        },
      });

      ScrollTrigger.batch(".footer-col", {
        onEnter: (batch) =>
          gsap.from(batch, {
            opacity: 0,
            y: 40,
            stagger: 0.12,
            duration: 0.85,
            ease: "power3.out",
          }),
        start: "top 90%",
      });

      gsap.from(".footer-copy", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".footer-copy",
          start: "top 99%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="bg-white">
      {/* Video Section */}
      <div
        className="relative bg-center bg-cover h-96 flex items-center justify-center footer-video"
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
              className="absolute z-10 w-20 h-20 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110 footer-play-btn"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 footer-main">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold mb-2">HH Travels</h2>
              <p className="text-teal-200 mb-8">Travel & Tour</p>

              {/* Small Gallery */}
              <div className="flex gap-4 mb-8">
                <div
                  className="w-16 h-16 bg-gray-200 rounded bg-cover bg-center footer-gallery-item"
                  style={{
                    backgroundImage: "url('/mount1.jpeg')",
                  }}
                  aria-label="Snow-capped mountains trekking"
                ></div>
                <div
                  className="w-16 h-16 bg-gray-200 rounded bg-cover bg-center footer-gallery-item"
                  style={{
                    backgroundImage: "url('/cherry.jpg')",
                  }}
                  aria-label="Cherry blossoms with traditional pagoda"
                ></div>
                <div
                  className="w-16 h-16 bg-gray-200 rounded bg-cover bg-center footer-gallery-item"
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
                    className="w-10 h-10 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors footer-social"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5 text-teal-700" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors footer-social"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5 text-teal-700" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors footer-social"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5 text-teal-700" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors footer-social"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-teal-700" />
                  </a>
                </div>
              </div>
            </div>

            {/* Links Columns */}
            {footerLinks.map((column, index) => (
              <div key={index} className="footer-col">
                <h3 className="text-lg font-semibold mb-6">{column.title}</h3>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      {link.url.startsWith("/#") ? (
                        <HashLink
                          smooth
                          to={link.url}
                          className="text-teal-200 hover:text-white transition-colors"
                        >
                          {link.name}
                        </HashLink>
                      ) : (
                        <a
                          href={link.url}
                          className="text-teal-200 hover:text-white transition-colors"
                        >
                          {link.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-teal-600 pt-8 text-center footer-copy">
            <p className="text-teal-200 text-sm">
              © 2025 HH Travels | Powered by Sanstive
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
