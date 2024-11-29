import React, { useState } from 'react';
import { createTicket } from '../api/api';

const TicketForm = ({ fetchTickets }) => {
  const [formData, setFormData] = useState({
    flightNumber: '',
    passengerName: '',
    seatNumber: '',
    departure: '',
    arrival: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!formData.flightNumber || !formData.passengerName || !formData.seatNumber || !formData.departure || !formData.arrival) {
      setError('All fields are required.');
      return;
    }

    try {
      await createTicket(formData);
      setFormData({
        flightNumber: '',
        passengerName: '',
        seatNumber: '',
        departure: '',
        arrival: '',
      });
      fetchTickets(); // Fetch updated tickets
    } catch (err) {
      setError('Error saving ticket. Please try again.');
    }
  };

  return (
    <div>
      <h2>Add Ticket</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="flightNumber"
          placeholder="Flight Number"
          value={formData.flightNumber}
          onChange={handleChange}
        />
        <input
          type="text"
          name="passengerName"
          placeholder="Passenger Name"
          value={formData.passengerName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="seatNumber"
          placeholder="Seat Number"
          value={formData.seatNumber}
          onChange={handleChange}
        />
        <input
          type="datetime-local"
          name="departure"
          value={formData.departure}
          onChange={handleChange}
        />
        <input
          type="datetime-local"
          name="arrival"
          value={formData.arrival}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TicketForm;
