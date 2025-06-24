// File: src/components/MainContent.jsx
import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaLaptopCode, FaGraduationCap, FaLightbulb, FaBook } from 'react-icons/fa';

const MainContent = () => {
  const services = [
    { 
      icon: <FaGraduationCap className="text-3xl text-blue-600" />,
      title: "Final Year Projects",
      description: "Expert guidance for IT, CSE, ECE, MCA students with end-to-end support from concept to implementation"
    },
    { 
      icon: <FaLaptopCode className="text-3xl text-blue-600" />, 
      title: "Mini Projects",
      description: "Hands-on mini projects to enhance practical skills and academic performance"
    },
    { 
      icon: <FaBook className="text-3xl text-blue-600" />, 
      title: "IEEE Project Support",
      description: "Specialized assistance for IEEE standard projects with research publication support"
    },
    { 
      icon: <FaLightbulb className="text-3xl text-blue-600" />, 
      title: "Emerging Technologies",
      description: "Cutting-edge projects in Arduino, IoT, AI, and Machine Learning"
    }
  ];

  const technologies = [
    { name: "Python", color: "bg-blue-100 text-blue-800" },
    { name: "Java", color: "bg-red-100 text-red-800" },
    { name: "Flutter", color: "bg-emerald-100 text-emerald-800" },
    { name: "IoT", color: "bg-amber-100 text-amber-800" },
    { name: "AI/ML", color: "bg-purple-100 text-purple-800" },
    { name: "Web Development", color: "bg-cyan-100 text-cyan-800" },
    { name: "App Development", color: "bg-lime-100 text-lime-800" },
    { name: "Research Papers", color: "bg-pink-100 text-pink-800" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          <span className="text-blue-600">Devthirve info tech</span> - Your Project Partners
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Premier project guidance and development services for students and researchers across Tamil Nadu
        </p>
        
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a 
            href="tel:97878587769" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 transition"
          >
            <FaPhone /> +91 97878 57769
          </a>
          <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full font-medium transition">
            Get Project Proposal
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Project Domains */}
      <section className="mb-20 bg-gray-50 py-12 px-6 rounded-2xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Project Domains
          </h2>
          <p className="text-gray-600 text-center mb-12">
            We specialize in diverse technology domains for academic and research projects
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className={`px-4 py-2 rounded-full ${tech.color} font-medium`}
              >
                {tech.name}
              </span>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "End-to-end project guidance from concept to implementation",
              "Research paper writing and publication support",
              "Code development and debugging assistance",
              "Online doubt clearance and mentorship sessions",
              "Hardware integration for IoT and Arduino projects",
              "Custom website and application development",
              "Project documentation and report preparation",
              "Viva preparation and project demonstration"
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                  <div className="bg-blue-600 w-2 h-2 rounded-full"></div>
                </div>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-blue-600 text-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg">
              To become Tamil Nadu's leading technology mentorship platform where students transform academic knowledge into industry-ready skills through innovative projects
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <ul className="space-y-4">
              {[
                "Provide affordable, high-quality project guidance to students across all engineering disciplines",
                "Bridge the gap between academic curriculum and industry requirements",
                "Foster innovation through emerging technologies like AI, IoT and ML",
                "Create a supportive learning environment with 1:1 mentorship",
                "Empower students to develop market-ready technical solutions"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <div className="bg-blue-600 w-2 h-2 rounded-full"></div>
                  </div>
                  <p className="text-gray-700">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Locations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { city: "Madurai", address: "Near Kalavasal Bus Stand, Madurai" },
            { city: "Coimbatore", address: "Gandhipuram, Coimbatore" },
            { city: "Thirupur", address: "Town Center, Thirupur" }
          ].map((location, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition"
            >
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-red-500 text-xl mr-2" />
                <h3 className="text-xl font-semibold text-gray-800">{location.city}</h3>
              </div>
              <p className="text-gray-600">{location.address}</p>
              <button className="mt-4 text-blue-600 font-medium hover:underline">
                Get Directions
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Start Your Project Today!</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Get expert guidance for your academic projects and research work
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="tel:97878587769" 
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition flex items-center gap-2"
          >
            <FaPhone /> Call Now: +91 97878 57769
          </a>
          <button className="bg-transparent border-2 border-white text-white hover:bg-blue-700 px-8 py-3 rounded-full font-bold transition">
            Request Callback
          </button>
        </div>
      </section>
    </div>
  );
};

export default MainContent;