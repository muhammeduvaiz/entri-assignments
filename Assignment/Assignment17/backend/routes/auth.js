const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Register Route
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    // Validation
    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        message: 'All fields are required'
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        message: 'Passwords do not match'
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        statusCode: 409,
        message: 'User already exists with this email'
      });
    }

    // Create new user (password will be hashed by pre-save hook)
    const newUser = new User({ name, email, password });
    await newUser.save();

    return res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'User registered successfully',
      data: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      statusCode: 500,
      message: 'Internal Server Error',
      error: error.message
    });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        message: 'Email and password are required'
      });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        statusCode: 401,
        message: 'Invalid email or password'
      });
    }

    // Compare password
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        statusCode: 401,
        message: 'Invalid email or password'
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email, name: user.name },
      process.env.JWT_SECRET ,
      { expiresIn: '7d' }
    );

    return res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Login successful',
      data: {
        userId: user._id,
        name: user.name,
        email: user.email,
        token
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      statusCode: 500,
      message: 'Internal Server Error',
      error: error.message
    });
  }
});

module.exports = router;
