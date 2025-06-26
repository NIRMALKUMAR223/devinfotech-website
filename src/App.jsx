// File: src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Domains from './pages/Domains';
import Services from './pages/Services';
import Vision from './pages/Vision';
import Locations from './pages/Locations';
import Contact from './pages/Contact';
import Home from './components/Main/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="domains" element={<Domains />} />
        <Route path="services" element={<Services />} />
        <Route path="vision" element={<Vision />} />
        <Route path="locations" element={<Locations />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
