import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import './Dashboard.css';

function Dashboard() {
  const { userId } = useParams();
  const [userName, setUserName] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:5000/user/${userId}`);
        const data = await response.json();
        setUserName(data.name);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, [userId]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navigateToSubmission = () => {
    navigate(`/ewaste/submission/${userId}`); // Navigate to E-Waste Submission page with userId
    setIsSidebarOpen(false); // Close sidebar after navigation
  };

  return (
    <div className="dashboard-container">
      <div className="hamburger-menu" onClick={toggleSidebar}>
        &#9776; {/* Hamburger icon */}
      </div>
      {isSidebarOpen && (
        <div className="sidebar">
          <ul>
            <li>Profile</li>
            <li onClick={navigateToSubmission}>E-Waste Submission</li> {/* Click handler */}
            <li>View History</li>
            <li>Track Sustainability Goals</li>
            <li>Logout</li>
          </ul>
        </div>
      )}
      <h1>Welcome to your Dashboard, {userName}</h1>
      {/* Other dashboard content */}
    </div>
  );
}

export default Dashboard;
