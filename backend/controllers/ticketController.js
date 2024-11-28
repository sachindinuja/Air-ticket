const Ticket = require('../models/Ticket');

// Create a new ticket
exports.createTicket = async (req, res) => {
    try {
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
        });
        res.json(updatedTicket);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a ticket
exports.deleteTicket = async (req, res) => {
    try {
        await Ticket.findByIdAndDelete(req.params.id);
        res.json({ message: 'Ticket deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
