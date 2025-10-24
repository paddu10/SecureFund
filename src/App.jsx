import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import all pages and components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import DonorDashboard from './pages/DonorDashboard'; // <-- IMPORT
import NGODashboard from './pages/NGODashboard'; // <-- IMPORT
import ProtectedRoute from './components/ProtectedRoute';

// This component lays out the main landing page
function LandingPageLayout() {
  return (
    <>
      <Hero />
      <Features />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<LandingPageLayout />} />
          <Route path="/login" element={<LoginPage />} />
          {/* --- ADD THE PROTECTED ROUTE --- */}
          <Route 
            path="/donor-dashboard" 
            element={
              <ProtectedRoute>
                <DonorDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/ngo-dashboard" 
            element={
              <ProtectedRoute>
                <NGODashboard />
              </ProtectedRoute>
            } 
          />
          
          <Route path="/signup" element={<SignupPage />} />
          
          
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;