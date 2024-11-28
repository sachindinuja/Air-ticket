const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // MongoDB connection string (ensure this is correct in your .env file)
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected...');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);  // Exit the application if the connection fails
    }
};

module.exports = connectDB;
