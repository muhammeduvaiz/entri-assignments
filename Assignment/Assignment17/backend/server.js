require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const customerRoutes = require('./routes/customers');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/crm_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✓ MongoDB Connected'))
.catch(err => console.log('✗ MongoDB Connection Error:', err.message));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/customers', customerRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Server is running' });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// Error Handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ success: false, message: 'Internal Server Error', error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
