import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-6">
      <h1 className="text-8xl font-bold text-teal-700 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-black mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        Oops! It seems like the page you’re looking for has gone off on an adventure.
        Don’t worry — let’s get you back to where you belong.
      </p>

      <Link
        to="/"
        className="bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-800 transition"
      >
        Go Back Home
      </Link>

      
    </div>
  );
}
