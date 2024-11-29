import React, { useState, useEffect } from 'react';
import TicketForm from './components/TicketForm';
import TicketList from './components/TicketList';
import { getTickets } from './api/api';

const App = () => {
  const [tickets, setTickets] = useState([]);

  const fetchTickets = async () => {
    try {
      const { data } = await getTickets();
      setTickets(data);
    } catch (err) {
      console.error('Error fetching tickets:', err.message);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <div>
      <h1>Ticket Management System</h1>
      <TicketForm fetchTickets={fetchTickets} />
      <TicketList tickets={tickets} />
    </div>
  );
};

export default App;
