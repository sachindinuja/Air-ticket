const express = require('express');
const Flight = require('../models/Flight');  // Import Flight model
const router = express.Router();

// Example route: Create a new flight
router.post('/', async (req, res) => {
    try {
        const flight = new Flight(req.body);
        const savedFlight = await flight.save();
        res.status(201).json(savedFlight);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Example route: Get all flights
router.get('/', async (req, res) => {
    try {
        const flights = await Flight.find();
        res.json(flights);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Add other routes (PUT, DELETE) for flights as needed

module.exports = router;
