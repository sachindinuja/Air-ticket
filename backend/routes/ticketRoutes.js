const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');

// Create a ticket
router.post('/', ticketController.createTicket);

// Get all tickets
router.get('/', ticketController.getTickets);

// Get a single ticket by ID
router.get('/:id', ticketController.getTicketById);

// Update a ticket by ID
router.put('/:id', ticketController.updateTicket);

// Delete a ticket by ID
router.delete('/:id', ticketController.deleteTicket);

module.exports = router;
