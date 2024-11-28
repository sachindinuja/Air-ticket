const express = require('express');
const { createTicket, getTickets, updateTicket, deleteTicket } = require('../controllers/ticketController');
const router = express.Router();

router.post('/tickets', createTicket);
router.get('/tickets', getTickets);
router.put('/tickets/:id', updateTicket);
router.delete('/tickets/:id', deleteTicket);

module.exports = router;
