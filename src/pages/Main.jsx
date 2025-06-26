// File: src/pages/Main.jsx
import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function Main() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header - Fixed */}
      <div className="fixed w-full z-50">
        <Header />
      </div>

      {/* Spacer to avoid overlap with fixed header */}
      <div className="h-24 lg:h-28"></div>

      {/* Main Content - where nested routes render */}
      <div className="flex-grow">
        <Outlet />
      </div>

      {/* Footer - Sticky */}
      <div className="mt-auto">
        <Footer />
      </div>
      
    </div>
  );
}

export default Main;
