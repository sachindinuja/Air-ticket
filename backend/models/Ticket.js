const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    flightNumber: { type: String, required: true },
    passengerName: { type: String, required: true },
    departureDate: { type: Date, required: true },
    seatNumber: { type: String, required: true },
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
