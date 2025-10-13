import React, { useState } from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaTelegram,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; // ✅ smooth scroll + correct routing

const Navbar = () => {
  // ========== EASY EDIT SECTION - CUSTOMIZE HERE ==========

  // Brand Information
  const brand = {
    name: "HH Travels",
    tagline: "Travel & Tour",
  };

  // Contact Information
  const contact = {
    phone: "+123 456 9890",
    email: "support@mogree.com",
  };

  // Social Media Links
  const socialLinks = [
    { name: "Twitter", icon: FaTwitter, url: "#" },
    { name: "Instagram", icon: FaInstagram, url: "#" },
    { name: "Facebook", icon: FaFacebook, url: "#" },
    { name: "Telegram", icon: FaTelegram, url: "#" },
  ];

  // Navigation Menu Items (use /# instead of just #)
  const navItems = [
    { name: "Home", url: "/#home" },
    { name: "About Us", url: "/#about" },
    { name: "Stories", url: "/#stories" },
    { name: "Destination", url: "/#destination" },
    { name: "Testimonial", url: "/#testimonial" },
  ];

  // Call to Action Button
  const ctaButton = {
    text: "Get in Touch",
    url: "/get-in-touch",
  };

  // ========== END EASY EDIT SECTION ==========//

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-teal-700 shadow-sm">
      {/* Top bar */}
      <div className="hidden md:flex justify-between items-center text-sm px-4 md:px-8 py-2 border-b bg-gray-50">
        {/* Social Links */}
        <div className="flex gap-2 md:gap-4 text-gray-600">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              className="hover:text-teal-600 flex items-center gap-1 transition-colors"
            >
              <social.icon />{" "}
              <span className="hidden lg:inline">{social.name}</span>
            </a>
          ))}
        </div>

        {/* Contact Info */}
        <div className="flex gap-3 md:gap-6 text-gray-600 text-xs md:text-sm">
          <span>{contact.phone}</span>
          <span className="hidden md:inline">{contact.email}</span>
        </div>
      </div>

      {/* Main navbar */}
      <div className="flex justify-between items-center px-4 md:px-8 lg:px-8 py-4">
        {/* Logo */}
        <div>
          <Link to="/" >
          {/* <h1 className="text-xl md:text-2xl font-bold text-gray-800">
            {brand.name}
          </h1>
          <p className="text-xs md:text-sm text-gray-500">{brand.tagline}</p> */}
          <img src="/logo.png" className="w-32 " alt="" />
          </Link>
        </div>

        {/* Desktop Nav links */}
        <nav className="hidden lg:flex items-center gap-6  text-white">
          {navItems.map((item) => (
            <HashLink
              key={item.name}
              smooth
              to={item.url}
              className="hover:text-teal-600 transition-colors"
            >
              {item.name}
            </HashLink>
          ))}

          <Link to={ctaButton.url}>
            <button className="ml-4 bg-teal-70 bg-white  text-black px-4 py-2 rounded-full hover:bg-teal-800 transition-colors">
              {ctaButton.text}
            </button>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-gray-700 text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <HashLink
                key={item.name}
                smooth
                to={item.url}
                className="text-gray-700 hover:text-teal-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </HashLink>
            ))}

            <Link to={ctaButton.url} onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full bg-teal-700 text-white px-4 py-2 rounded-full hover:bg-teal-800 transition-colors">
                {ctaButton.text}
              </button>
            </Link>

            {/* Mobile Social Links */}
            <div className="flex gap-4 pt-4 border-t">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="text-gray-600 hover:text-teal-600 text-xl transition-colors"
                >
                  <social.icon />
                </a>
              ))}
            </div>

            {/* Mobile Contact */}
            <div className="text-sm text-gray-600 space-y-1">
              <div>{contact.phone}</div>
              <div>{contact.email}</div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
