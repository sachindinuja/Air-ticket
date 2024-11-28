const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    flightNumber: { type: String, required: true },
    passengerName: { type: String, required: true },
    seatNumber: { type: String, required: true },
    departure: { type: Date, required: true },
    arrival: { type: Date, required: true },
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
