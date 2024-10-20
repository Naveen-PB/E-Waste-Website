import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Benefits from './components/Benefits';
import Services from './components/Services';
import Contact from './components/Contact';
import AnnouncementBar from './components/AnnouncementBar';
import LoginSignup from './components/LoginSignup';
import Dashboard from './pages/Dashboard';
import EWasteSubmission from './pages/EWasteSubmission';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <AnnouncementBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginSignup />} /> {/* New login route */}
          <Route path="/dashboard/:userId" element={<Dashboard />} />
          <Route path="/ewaste/submission/:userId" element={<EWasteSubmission />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
