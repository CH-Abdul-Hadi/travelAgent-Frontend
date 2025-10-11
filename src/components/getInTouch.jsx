import React from "react";

export default function GetInTouch() {
  return (
    <section className="bg-white py-16 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-teal-700 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-700 mb-6">
            We’d love to hear from you! Whether you’re planning your next
            adventure or have a question about our services, reach out and
            let’s make your journey unforgettable.
          </p>

          <div className="space-y-3">
            <p className="text-black">
              📍 Address: <span className="text-teal-700">123 Paradise Road, Islamabad, Pakistan</span>
            </p>
            <p className="text-black">
              📞 Phone: <span className="text-teal-700">+92 300 1234567</span>
            </p>
            <p className="text-black">
              ✉️ Email: <span className="text-teal-700">info@travelagency.com</span>
            </p>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-teal-700 text-white rounded-2xl shadow-lg p-8">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                placeholder="Your message"
                rows="4"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-teal-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-teal-700 font-semibold py-2 rounded-lg hover:bg-gray-100 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
