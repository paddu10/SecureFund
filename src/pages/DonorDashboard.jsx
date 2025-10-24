// src/pages/DonorDashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import our custom hook
import './DonorDashboard.css';

const DonorDashboard = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login'); // Redirect to login page after logout
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        {/* Display user's full name from Firestore */}
        <h1>Welcome, {currentUser?.fullName || 'Donor'}!</h1>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>

      <div className="stats-container">
        <div className="stat-card">
          <h2>Total Donated</h2>
          <p>0.00 ETH</p>
        </div>
        <div className="stat-card">
          <h2>Campaigns Supported</h2>
          <p>0</p>
        </div>
      </div>

      <div className="actions-container">
        <button className="donate-now-btn">Donate Now</button>
      </div>

      <div className="history-table">
        <h2>Your Donation History</h2>
        <p>No donations made yet.</p>
      </div>
    </div>
  );
};

export default DonorDashboard;