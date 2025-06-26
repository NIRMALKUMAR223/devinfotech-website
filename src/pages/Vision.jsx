// File: src/pages/Vision.jsx
import React from 'react';
import { FaBullseye, FaRocket, FaHandsHelping } from 'react-icons/fa';

const Vision = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-gray-800">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-700 animate-fadeInUp delay-100">
        Our Vision & Mission
      </h1>

      {/* Vision Section */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="p-6 bg-white shadow-xl rounded-lg transform transition duration-300 hover:scale-105">
          <div className="flex items-center mb-4 text-blue-600">
            <FaBullseye className="text-3xl mr-3" />
            <h2 className="text-2xl font-semibold">Vision</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            To become Tamil Nadu’s leading student innovation partner by helping them transform academic concepts into real-world industry-grade technology solutions through mentorship, training, and hands-on development.
          </p>
        </div>

        {/* Mission Section */}
        <div className="p-6 bg-white shadow-xl rounded-lg transform transition duration-300 hover:scale-105">
          <div className="flex items-center mb-4 text-blue-600">
            <FaRocket className="text-3xl mr-3" />
            <h2 className="text-2xl font-semibold">Mission</h2>
          </div>
          <ul className="list-none space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">🚀</span> Deliver high-quality project guidance for engineering and tech students.
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">🔬</span> Integrate cutting-edge tech like IoT, AI, ML into learning experiences.
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">📚</span> Provide research support with paper publishing and documentation.
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">🌐</span> Expand mentorship opportunities via online platforms.
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">🤝</span> Build strong industry-academic collaboration networks.
            </li>
          </ul>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center p-10 rounded-xl shadow-md">
        <h3 className="text-2xl font-bold mb-4">Want to be part of our vision?</h3>
        <p className="text-lg mb-6">Join our mentorship programs or collaborate with us on cutting-edge innovations.</p>
        <a href="/contact" className="bg-white text-blue-600 font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Vision;
