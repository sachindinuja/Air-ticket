const Ticket = require('../models/Ticket');

// Create a new ticket
exports.createTicket = async (req, res) => {
    try {
        const { flightNumber, passengerName, seatNumber, departure, arrival } = req.body;

        // Validate input
        if (!flightNumber || !passengerName || !seatNumber || !departure || !arrival) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const ticket = new Ticket(req.body);
        const savedTicket = await ticket.save();
        res.status(201).json(savedTicket);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all tickets
exports.getTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find();
        res.json(tickets);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a ticket
exports.updateTicket = async (req, res) => {
    try {
        const updatedTicket = await Ticket.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true, // Ensures validation rules are applied
        });

        if (!updatedTicket) {
            return res.status(404).json({ message: 'Ticket not found' });
        }

        res.json(updatedTicket);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a ticket
exports.deleteTicket = async (req, res) => {
    try {
        const ticket = await Ticket.findByIdAndDelete(req.params.id);

        if (!ticket) {
            return res.status(404).json({ message: 'Ticket not found' });
        }

        res.json({ message: 'Ticket deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
