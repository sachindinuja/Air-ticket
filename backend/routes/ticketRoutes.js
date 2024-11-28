const express = require('express');
const { createTicket, getTickets, updateTicket, deleteTicket } = require('../controllers/ticketController');
const router = express.Router();

// Define routes
router.post('/tickets', createTicket);  // Create ticket
router.get('/tickets', getTickets);  // Get all tickets
router.put('/tickets/:id', updateTicket);  // Update ticket
router.delete('/tickets/:id', deleteTicket);  // Delete ticket

module.exports = router;
