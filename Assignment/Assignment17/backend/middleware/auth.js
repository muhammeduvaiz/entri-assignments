const jwt = require('jsonwebtoken');


const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Extract Bearer token

  if (!token) {
    return res.status(401).json({
      success: false,
      statusCode: 401,
      message: 'No token provided. Please login first.'
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret_key');
    req.user = decoded; // Attach user info to request
    next();
  } catch (error) {
    return res.status(403).json({
      success: false,
      statusCode: 403,
      message: 'Invalid or expired token',
      error: error.message
    });
  }
};

module.exports = { verifyToken };
