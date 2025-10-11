import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-white text-center px-6 overflow-hidden">
      
      {/* Optional Background Illustration */}
      {/* <div className="absolute inset-0">
        <img
          src="/eiffiel.jpg" // Replace with your background image
          alt="Not Found Background"
          className="w-full h-full  bg-cover  opacity-30 pointer-events-none"
        />
      </div> */}

      {/* 404 Number */}
      <motion.h1
        className="text-8xl font-bold text-teal-700 mb-4"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        404
      </motion.h1>

      {/* Title */}
      <motion.h2
        className="text-3xl font-semibold text-black mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Page Not Found
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-gray-600 mb-8 max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Oops! It seems like the page you’re looking for has gone off on an adventure.
        Don’t worry — let’s get you back to where you belong.
      </motion.p>

      {/* Go Home Button */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Link
          to="/"
          className="bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-800 transition transform hover:scale-105"
        >
          Go Back Home
        </Link>
      </motion.div>

      {/* Optional Floating Icon */}
      {/* <motion.div
        className="absolute bottom-10 right-10 text-teal-100 text-[8rem] select-none pointer-events-none"
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        🌎
      </motion.div> */}
    </div>
  );
}
