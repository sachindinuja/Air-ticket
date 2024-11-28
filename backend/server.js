require('dotenv').config();  // Load environment variables from .env file
const express = require('express');
const connectDB = require('./db/mongo');  // MongoDB connection function
const ticketRoutes = require('./routes/ticketRoutes');  // API routes for tickets
const errorHandler = require('./middlewares/errorHandler');  // Custom error handler middleware

const app = express();

// Middleware to parse incoming JSON data
app.use(express.json());

// Connect to MongoDB
connectDB();

// API Routes
app.use('/api', ticketRoutes);

// Error handler middleware (should be the last middleware)
app.use(errorHandler);

const cors = require('cors');

// Enable CORS for all origins (or configure it more specifically as needed)
app.use(cors());


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
