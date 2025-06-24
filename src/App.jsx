// File: src/App.jsx
import React from 'react';
import Header from './Components/Header/Header';
import MainContent from './Components/Main/MainContent';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header - Fixed at the top */}
      <div className="fixed w-full z-50">
        <Header />
      </div>
      
      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-24 lg:h-28"></div>
      
      {/* Main Content - Centered with proper padding */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <MainContent />
      </main>
      
      {/* Footer - Always at the bottom */}
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default App;