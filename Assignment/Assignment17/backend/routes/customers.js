const express = require('express');
const { verifyToken } = require('../middleware/auth');
const Customer = require('../models/Customer');
const router = express.Router();

// Get all customers (Protected Route)
router.get('/', verifyToken, async (req, res) => {
  try {
    const customers = await Customer.find({ createdBy: req.user.userId })
      .populate('createdBy', 'name email')
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Customers fetched successfully',
      data: customers
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


router.get('/:id', verifyToken, async (req, res) => {
  try {
    const customer = await Customer.findOne({
      _id: req.params.id,
      createdBy: req.user.userId
    }).populate('createdBy', 'name email');

    if (!customer) {
      return res.status(404).json({
        success: false,
        statusCode: 404,
        message: 'Customer not found'
      });
    }

    return res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Customer fetched successfully',
      data: customer
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

// Create customer (Protected Route)
router.post('/', verifyToken, async (req, res) => {
  try {
    const { name, email, phone, company, address, status } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        message: 'Name, email, and phone are required'
      });
    }

    const newCustomer = new Customer({
      name,
      email,
      phone,
      company,
      address,
      status: status || 'active',
      createdBy: req.user.userId
    });

    await newCustomer.save();

    return res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'Customer created successfully',
      data: newCustomer
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

// Update customer (Protected Route)
router.put('/:id', verifyToken, async (req, res) => {
  try {
    const { name, email, phone, company, address, status } = req.body;

    const customer = await Customer.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.user.userId },
      { name, email, phone, company, address, status },
      { new: true, runValidators: true }
    );

    if (!customer) {
      return res.status(404).json({
        success: false,
        statusCode: 404,
        message: 'Customer not found'
      });
    }

    return res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Customer updated successfully',
      data: customer
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

// Delete customer (Protected Route)
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    const customer = await Customer.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.user.userId
    });

    if (!customer) {
      return res.status(404).json({
        success: false,
        statusCode: 404,
        message: 'Customer not found'
      });
    }

    return res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Customer deleted successfully',
      data: customer
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

// Dashboard stats (Protected Route)
router.get('/stats/dashboard', verifyToken, async (req, res) => {
  try {
    const totalCustomers = await Customer.countDocuments({ createdBy: req.user.userId });
    const activeCustomers = await Customer.countDocuments({
      createdBy: req.user.userId,
      status: 'active'
    });
    const inactiveCustomers = await Customer.countDocuments({
      createdBy: req.user.userId,
      status: 'inactive'
    });

    return res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Dashboard stats fetched successfully',
      data: {
        totalCustomers,
        activeCustomers,
        inactiveCustomers,
        pendingCustomers: totalCustomers - activeCustomers - inactiveCustomers
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
