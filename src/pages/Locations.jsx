// File: src/pages/Locations.jsx
import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const locations = [
  {
    city: 'Madurai',
    address: 'Near Kalavasal Bus Stand, Madurai',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.7531190019967!2d78.09562117509937!3d9.930511174233883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c584d6ff63e3%3A0xe20d74b82a64a2f4!2sKalavasal%20Bus%20Stop!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  },
  {
    city: 'Coimbatore',
    address: 'Gandhipuram, Coimbatore',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2648447398873!2d76.96378007491998!3d11.01714275464705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85773380b72c5%3A0x9edb5941a54dfbdf!2sGandhipuram%2C%20Coimbatore!5e0!3m2!1sen!2sin!4v1700000000001!5m2!1sen!2sin',
  },
  {
    city: 'Thirupur',
    address: 'Town Center, Thirupur',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.2542719969714!2d77.3391773749216!3d11.108093753702173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96ef84de776b3%3A0x160fdbb57b1a7c38!2sTiruppur%20Town%20Bus%20Stand!5e0!3m2!1sen!2sin!4v1700000000002!5m2!1sen!2sin',
  },
];

const Locations = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-gray-800">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-12 animate-fadeInUp">
        Our Locations
      </h1>

      <div className="grid md:grid-cols-3 gap-10">
        {locations.map((location, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition transform hover:scale-105"
          >
            <div className="flex items-center mb-4 text-blue-600">
              <FaMapMarkerAlt className="text-2xl mr-3" />
              <h2 className="text-xl font-semibold">{location.city}</h2>
            </div>
            <p className="text-gray-600 mb-4">{location.address}</p>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={location.mapSrc}
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title={`Map of ${location.city}`}
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;
