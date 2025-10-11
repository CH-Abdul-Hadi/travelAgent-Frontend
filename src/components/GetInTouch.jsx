import React, { useState } from "react";

export default function GetInTouch() {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("access_key", "fa80c278-3e54-4c3f-8dbf-91bddef0bdbc"); // 🔑 Replace with your Web3Forms key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    if (result.success) {
      setShowAlert(true);
      e.target.reset();
      setTimeout(() => setShowAlert(false), 3000); // Hide after 3 seconds
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="bg-white py-16 px-6 lg:px-16 relative">
      {/* Alert Popup */}
      {showAlert && (
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-green-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 animate-bounce">
          ✅ Message Sent Successfully!
        </div>
      )}

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
              📍 Address:{" "}
              <span className="text-teal-700">
                123 Paradise Road, Islamabad, Pakistan
              </span>
            </p>
            <p className="text-black">
              📞 Phone:{" "}
              <span className="text-teal-700">+92 300 1234567</span>
            </p>
            <p className="text-black">
              ✉️ Email:{" "}
              <span className="text-teal-700">info@travelagency.com</span>
            </p>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-teal-700 text-white rounded-2xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                placeholder="Your message"
                rows="4"
                required
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
