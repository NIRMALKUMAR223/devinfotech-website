// File: src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { FaPhone, FaBars, FaTimes, FaChevronDown, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../../../public/logo.jpeg'; // Adjust the path as necessary

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  };

  const toggleDropdown = (dropdownName) => {
    if (openDropdown === dropdownName) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdownName);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'Services', 
      dropdown: [
        { name: 'Final Year Projects', path: '/services/final-year' },
        { name: 'Mini Projects', path: '/services/mini-projects' },
        { name: 'IEEE Project Support', path: '/services/ieee' },
        { name: 'Research Paper Writing', path: '/services/research' },
        { name: 'Code Development', path: '/services/code' },
        { name: 'Arduino/IoT/AI/ML', path: '/services/emerging-tech' },
        { name: 'Online Mentorship', path: '/services/mentorship' },
        { name: 'Website/App Development', path: '/services/web-app' },
      ]
    },
    { 
      name: 'Domains', 
      dropdown: [
        { name: 'Python Development', path: '/domains/python' },
        { name: 'Java Development', path: '/domains/java' },
        { name: 'Flutter Development', path: '/domains/flutter' },
        { name: 'IoT Solutions', path: '/domains/iot' },
        { name: 'AI/ML Projects', path: '/domains/ai-ml' },
        { name: 'Web Technologies', path: '/domains/web' },
      ]
    },
    { name: 'Vision', path: '/vision' },
    { name: 'Locations', path: '/locations' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-blue-900 py-4'}`}>
      {/* Top info bar */}
      <div className={`hidden md:flex items-center justify-between px-4 transition-all duration-300 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-10 opacity-100'}`}>
        <div className="flex items-center space-x-6">
          <div className="flex items-center text-white text-sm">
            <FaPhone className="mr-2 text-blue-300" />
            <a href="tel:97878587769" className="hover:text-blue-300 transition">+91 97878 58776</a>
          </div>
          <div className="flex items-center text-white text-sm">
            <FaEnvelope className="mr-2 text-blue-300" />
            <a href="mailto:devthirveinfotech@gmail.com" className="hover:text-blue-300 transition">devthirveinfotech@gmail.com</a>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="flex items-center text-white text-sm">
            <FaMapMarkerAlt className="mr-2 text-blue-300" />
            <span>Madurai | Coimbatore | Thirupur</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-xl rounded-lg">
                <img src={logo} alt="" className='w-10 rounded-lg' />
              </span>
            </div>
            <div>
              <h1 className={`font-bold text-xl ${isScrolled ? 'text-blue-800' : 'text-white'}`}>
                Devthirve info tech
              </h1>
              <p className={`text-xs ${isScrolled ? 'text-gray-600' : 'text-blue-200'}`}>
                Project Guidance & Development Solutions
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                {item.dropdown ? (
                  <div 
                    className={`flex items-center cursor-pointer group ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'}`}
                    onClick={() => toggleDropdown(item.name)}
                  >
                    <span className="font-medium">{item.name}</span>
                    <FaChevronDown className="ml-1 text-xs" />
                    
                    {/* Dropdown menu */}
                    {openDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2 z-50">
                        {item.dropdown.map((subItem, subIndex) => (
                          <a 
                            key={subIndex}
                            href={subItem.path}
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a 
                    href={item.path} 
                    className={`font-medium ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'}`}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            
            {/* Contact button */}
            <a 
              href="tel:97878587769" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center font-medium"
            >
              <FaPhone className="mr-2" />
              Call Now
            </a>
          </nav>

          {/* Mobile menu button */}
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
              <div className="flex items-center">
                <div className="bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xl">D</span>
                </div>
                <h1 className="font-bold text-xl text-blue-800">Dev Info Tech</h1>
              </div>
              <button onClick={closeMenu} className="text-gray-500">
                <FaTimes size={24} />
              </button>
            </div>

            <nav className="space-y-4">
              {navItems.map((item, index) => (
                <div key={index} className="border-b border-gray-100 pb-4">
                  {item.dropdown ? (
                    <div>
                      <div 
                        className="flex items-center justify-between font-medium text-gray-800 cursor-pointer"
                        onClick={() => toggleDropdown(item.name)}
                      >
                        <span>{item.name}</span>
                        <FaChevronDown className={`transform transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                      </div>
                      
                      {openDropdown === item.name && (
                        <div className="mt-2 pl-4 space-y-3">
                          {item.dropdown.map((subItem, subIndex) => (
                            <a 
                              key={subIndex}
                              href={subItem.path}
                              className="block text-gray-600 hover:text-blue-600"
                              onClick={closeMenu}
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a 
                      href={item.path} 
                      className="block font-medium text-gray-800"
                      onClick={closeMenu}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <FaPhone className="text-blue-600 mr-3" />
                <a href="tel:97878587769" className="text-gray-800 font-medium">+91 97878 58776</a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-blue-600 mr-3" />
                <a href="mailto:devthirveinfotech@gmail.com" className="text-gray-800">devthirveinfotech@gmail.com</a>
              </div>
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-blue-600 mr-3 mt-1" />
                <div>
                  <p className="text-gray-800">Madurai | Coimbatore | Thirupur</p>
                </div>
              </div>
            </div>

            <a 
              href="tel:97878587769" 
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