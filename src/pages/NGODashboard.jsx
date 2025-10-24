// src/pages/NGODashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './NGODashboard.css'; // We'll create this

const NGODashboard = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Uploading file:", file.name);
      // Add your file upload logic to Firebase Storage here
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>NGO Dashboard ({currentUser?.fullName})</h1>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>

      <div className="ngo-actions">
        <div className="stat-card">
          <h2>Total Funds Received</h2>
          <p>0.00 ETH</p>
        </div>
        <div className="stat-card">
          <h3>Upload Proof of Delivery</h3>
          <p>Upload receipts or photos of resources being delivered.</p>
          <input 
            type="file" 
            id="proof-upload" 
            onChange={handleFileUpload} 
            accept="image/*,.pdf"
          />
        </div>
      </div>

      <div className="history-table">
        <h2>Donations Received</h2>
        <p>No donations received yet.</p>
        {/* You would map over and display a list of donations here */}
      </div>
    </div>
  );
};

export default NGODashboard;