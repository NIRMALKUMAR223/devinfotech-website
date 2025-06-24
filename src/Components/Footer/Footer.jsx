// File: src/components/Footer.jsx
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div>
          <div className="flex items-center mb-6">
            <div className="bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <h2 className="text-xl font-bold">Devthirve info tech</h2>
          </div>
          <p className="text-gray-400 mb-6">
            Premier project guidance and development solutions for students and researchers. We help transform academic concepts into real-world implementations.
          </p>
          <div className="flex space-x-4">
            {[
              { icon: <FaFacebookF />, link: "#" },
              { icon: <FaTwitter />, link: "#" },
              { icon: <FaInstagram />, link: "#" },
              { icon: <FaLinkedinIn />, link: "#" },
              { icon: <FaYoutube />, link: "#" },
            ].map((social, index) => (
              <a 
                key={index}
                href={social.link}
                className="bg-gray-800 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-6 border-b border-blue-600 pb-2 inline-block">Quick Links</h3>
          <ul className="space-y-3">
            {[
              { name: "Home", link: "/" },
              { name: "About Us", link: "/about" },
              { name: "Services", link: "/services" },
              { name: "Project Domains", link: "/domains" },
              { name: "Locations", link: "/locations" },
              { name: "Contact Us", link: "/contact" },
              { name: "Privacy Policy", link: "/privacy" },
              { name: "Terms & Conditions", link: "/terms" },
            ].map((item, index) => (
              <li key={index}>
                <a 
                  href={item.link} 
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-bold mb-6 border-b border-blue-600 pb-2 inline-block">Our Services</h3>
          <ul className="space-y-3">
            {[
              "Final Year Project Guidance",
              "Mini Projects & Prototyping",
              "IEEE Project Support",
              "Research Paper Writing",
              "Python/Java Development",
              "Flutter App Development",
              "Arduino/IoT Solutions",
              "AI/ML Project Implementation",
              "Online Mentorship",
              "Website & App Development",
            ].map((service, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-gray-400">{service}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-6 border-b border-blue-600 pb-2 inline-block">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <FaPhone className="text-blue-500 mt-1 mr-3" />
              <div>
                <p className="font-medium">Phone Number</p>
                <a 
                  href="tel:97878 57769" 
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  +91 97878 57769
                </a>
              </div>
            </li>
            
            <li className="flex items-start">
              <FaEnvelope className="text-blue-500 mt-1 mr-3" />
              <div>
                <p className="font-medium">Email Address</p>
                <a 
                  href="mailto:devthirveinfotech@gmail.com" 
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  devthirveinfotech@gmail.com
                </a>
              </div>
            </li>
            
            <li className="flex items-start">
              <FaMapMarkerAlt className="text-blue-500 mt-1 mr-3" />
              <div>
                <p className="font-medium">Our Locations</p>
                <ul className="text-gray-400">
                  <li className="mb-1">Madurai - Near Kalavasal Bus Stand</li>
                  <li className="mb-1">Coimbatore - Gandhipuram</li>
                  <li>Thirupur - Town Center</li>
                </ul>
              </div>
            </li>
          </ul>
          
          {/* Newsletter */}
          <div className="mt-8">
            <h4 className="font-medium mb-3">Subscribe to Newsletter</h4>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 w-full rounded-l-lg focus:outline text-white-800"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg font-medium transition">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Devthirve info tech. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-blue-400 text-sm transition">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-blue-400 text-sm transition">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-blue-400 text-sm transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;