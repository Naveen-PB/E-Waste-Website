import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const { userId } = useParams();
  const [userName, setUserName] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

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
    navigate(`/ewaste/submission/${userId}`);
    setIsSidebarOpen(false);
  };

  const navigateToHistory = () => {
    navigate(`/history/${userId}`);
    setIsSidebarOpen(false);
  };

  return (
    <div className="dashboard-container">
      <div className="hamburger-menu" onClick={toggleSidebar}>
        &#9776;
      </div>
      {isSidebarOpen && (
        <div className="sidebar">
          <ul>
            <li>Profile</li>
            <li onClick={navigateToSubmission}>E-Waste Submission</li>
            <li onClick={navigateToHistory}>View History</li>
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
