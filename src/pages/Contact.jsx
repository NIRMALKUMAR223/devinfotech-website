// File: src/pages/Contact.jsx
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-12 animate-fadeInUp delay-100">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow hover:shadow-md transition">
            <FaPhoneAlt className="text-blue-600 text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Phone</h2>
              <a href="tel:+919787857769" className="text-blue-600 hover:underline block">
                +91 97878 57769
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow hover:shadow-md transition">
            <FaEnvelope className="text-blue-600 text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Email</h2>
              <a href="mailto:devthirveinfotech@gmail.com" className="text-blue-600 hover:underline block">
                devthirveinfotech@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow hover:shadow-md transition">
            <FaMapMarkerAlt className="text-blue-600 text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Locations</h2>
              <p className="text-gray-600">Madurai – Near Kalavasal Bus Stand</p>
              <p className="text-gray-600">Coimbatore – Gandhipuram</p>
              <p className="text-gray-600">Thirupur – Town Center</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white p-8 rounded-lg shadow-lg space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
