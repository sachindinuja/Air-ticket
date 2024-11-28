require('dotenv').config();  // Load environment variables from .env file
const express = require('express');
const connectDB = require('./db/mongo');  // MongoDB connection function
const ticketRoutes = require('./routes/ticketRoutes');  // API routes for tickets
const flightRoutes = require('./routes/flightRoutes');  // API routes for flights (imported here)
const errorHandler = require('./middlewares/errorHandler');  // Custom error handler middleware

const app = express();

// Middleware to parse incoming JSON data
app.use(express.json());

// Connect to MongoDB
connectDB();

// API Routes
app.use('/api', ticketRoutes);
app.use('/api/flights', flightRoutes);  // Add this line for flights

// Error handler middleware (should be the last middleware)
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
