import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar'; // Navbar component
import TicketForm from './components/TicketForm';
import TicketList from './components/TicketList';
import Footer from './components/Footer'; // Footer component
import { getTickets } from './api/api';
import './styles/App.css';

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
    <div className="app">
      <Navbar />
      <div className="content">
        <TicketForm fetchTickets={fetchTickets} />
        <TicketList tickets={tickets} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
