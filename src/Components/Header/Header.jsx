// File: src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaBars, FaTimes, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../../../public/logo.jpeg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Domains', path: '/domains' },
    { name: 'Vision', path: '/vision' },
    { name: 'Locations', path: '/locations' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-blue-900 py-4'}`}>
      {/* Top bar */}
      <div className={`hidden md:flex items-center justify-between px-4 transition-all duration-300 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-10 opacity-100'}`}>
        <div className="flex items-center space-x-6">
          <div className="flex items-center text-white text-sm">
            <FaPhone className="mr-2 text-blue-300" />
            <a href="tel:97878 57769" className="hover:text-blue-300 transition">+91 97878 57769</a>
          </div>
          <div className="flex items-center text-white text-sm">
            <FaEnvelope className="mr-2 text-blue-300" />
            <a href="mailto:devthirveinfotech@gmail.com" className="hover:text-blue-300 transition">devthirveinfotech@gmail.com</a>
          </div>
        </div>
        <div className="flex items-center text-white text-sm">
          <FaMapMarkerAlt className="mr-2 text-blue-300" />
          <span>Madurai | Coimbatore | Thirupur</span>
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
              <img src={logo} alt="Logo" className="w-10 rounded-lg" />
            </div>
            <div>
              <h1 className={`font-bold text-xl ${isScrolled ? 'text-blue-800' : 'text-white'}`}>Devthirve info tech</h1>
              <p className={`text-xs ${isScrolled ? 'text-gray-600' : 'text-blue-200'}`}>Project Guidance & Development Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`font-medium ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'} transition-all duration-200`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:97878 57769"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center font-medium transition-colors"
            >
              <FaPhone className="mr-2" />
              Call Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'text-blue-800 bg-blue-50' : 'text-white bg-blue-700'}`}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeMenu}>
          <div
            className="bg-white w-80 h-full ml-auto p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8">
              <Link to="/" className="flex items-center" onClick={closeMenu}>
                <div className="bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xl">D</span>
                </div>
                <h1 className="font-bold text-xl text-blue-800">Dev Info Tech</h1>
              </Link>
              <button onClick={closeMenu} className="text-gray-500">
                <FaTimes size={24} />
              </button>
            </div>

            <nav className="space-y-4">
              {navItems.map((item, index) => (
                <div key={index} className="border-b border-gray-100 pb-4">
                  <Link
                    to={item.path}
                    className="block font-medium text-gray-800"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </nav>

            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <FaPhone className="text-blue-600 mr-3" />
                <a href="tel:97878 57769" className="text-gray-800 font-medium">+91 97878 57769</a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-blue-600 mr-3" />
                <a href="mailto:devthirveinfotech@gmail.com" className="text-gray-800">devthirveinfotech@gmail.com</a>
              </div>
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-blue-600 mr-3 mt-1" />
                <p className="text-gray-800">Madurai | Coimbatore | Thirupur</p>
              </div>
            </div>

            <a
              href="tel:97878 57769"
              className="mt-8 block bg-blue-600 text-white text-center py-3 rounded-lg font-medium"
            >
              <div className="flex items-center justify-center">
                <FaPhone className="mr-2" />
                Call Now
              </div>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
