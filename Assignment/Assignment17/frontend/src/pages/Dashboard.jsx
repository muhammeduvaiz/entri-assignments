import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { customerAPI } from '../services/api';
import './Dashboard.css';

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const userName = localStorage.getItem('userName');

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await customerAPI.getDashboardStats();
        setStats(response.data.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load stats');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>CRM Dashboard</h1>
        <div className="user-info">
          <span>Welcome, {userName}!</span>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </header>

      <nav className="dashboard-nav">
        <button onClick={() => navigate('/customers')}>Manage Customers</button>
        <button onClick={() => navigate('/dashboard')}>Dashboard</button>
      </nav>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : (
        <div className="stats-container">
          <div className="stat-card">
            <h3>Total Customers</h3>
            <p className="stat-value">{stats?.totalCustomers || 0}</p>
          </div>
          <div className="stat-card">
            <h3>Active Customers</h3>
            <p className="stat-value active">{stats?.activeCustomers || 0}</p>
          </div>
          <div className="stat-card">
            <h3>Inactive Customers</h3>
            <p className="stat-value inactive">{stats?.inactiveCustomers || 0}</p>
          </div>
          <div className="stat-card">
            <h3>Pending Customers</h3>
            <p className="stat-value pending">{stats?.pendingCustomers || 0}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
