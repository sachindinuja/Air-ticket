const mongoose = require('mongoose');

// Define the Ticket schema
const TicketSchema = new mongoose.Schema({
    flightNumber: { type: String, required: true },
    passengerName: { type: String, required: true },
    seatNumber: { type: String, required: true },
    departure: { type: Date, required: true },
    arrival: { type: Date, required: true },
});

// Correctly export the Mongoose model
module.exports = mongoose.model('Ticket', TicketSchema);
