import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { customerAPI } from '../services/api';
import './Customers.css';

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    status: 'active'
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      setLoading(true);
      const response = await customerAPI.getAll();
      setCustomers(response.data.data);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load customers');
    } finally {
      setLoading(false);
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await customerAPI.update(editingId, formData);
      } else {
        await customerAPI.create(formData);
      }
      resetForm();
      fetchCustomers();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to save customer');
    }
  };

  const handleEdit = (customer) => {
    setFormData(customer);
    setEditingId(customer._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this customer?')) {
      try {
        await customerAPI.delete(id);
        fetchCustomers();
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to delete customer');
      }
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', phone: '', company: '', address: '', status: 'active' });
    setEditingId(null);
    setShowForm(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    navigate('/login');
  };

  return (
    <div className="customers-container">
      <header className="customers-header">
        <h1>Manage Customers</h1>
        <div className="header-actions">
          <button onClick={() => navigate('/dashboard')}>Dashboard</button>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </header>

      {error && <div className="error-message">{error}</div>}

      <button onClick={() => setShowForm(true)} className="add-btn">
        + Add New Customer
      </button>

      {showForm && (
        <div className="form-container">
          <h3>{editingId ? 'Edit Customer' : 'Add New Customer'}</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
              placeholder="Customer Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleFormChange}
              placeholder="Email"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleFormChange}
              placeholder="Phone"
              required
            />
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleFormChange}
              placeholder="Company"
            />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleFormChange}
              placeholder="Address"
            />
            <select name="status" value={formData.status} onChange={handleFormChange}>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="pending">Pending</option>
            </select>
            <button type="submit">Save</button>
            <button type="button" onClick={resetForm}>Cancel</button>
          </form>
        </div>
      )}

      {loading ? (
        <p>Loading customers...</p>
      ) : (
        <div className="customers-list">
          {customers.length === 0 ? (
            <p>No customers found. Create one to get started!</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Company</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {customers.map(customer => (
                  <tr key={customer._id}>
                    <td>{customer.name}</td>
                    <td>{customer.email}</td>
                    <td>{customer.phone}</td>
                    <td>{customer.company || '-'}</td>
                    <td>
                      <span className={`status ${customer.status}`}>
                        {customer.status}
                      </span>
                    </td>
                    <td>
                      <button onClick={() => handleEdit(customer)} className="edit-btn">Edit</button>
                      <button onClick={() => handleDelete(customer._id)} className="delete-btn">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default Customers;
