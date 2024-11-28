const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
    flightNumber: { type: String, required: true },
    passengerName: { type: String, required: true },
    seatNumber: { type: String, required: true },
    departure: { type: Date, required: true },
    arrival: { type: Date, required: true },
});

module.exports = mongoose.model('Ticket', TicketSchema);
