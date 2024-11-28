require('dotenv').config();
const express = require('express');
const connectDB = require('./db/mongo');
const ticketRoutes = require('./routes/ticketRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api', ticketRoutes);

// Error handler
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
