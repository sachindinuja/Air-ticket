import React from 'react';

const TicketList = ({ tickets }) => {
  return (
    <div>
      <h2>Stored Tickets</h2>
      {tickets.length === 0 ? (
        <p>No tickets available.</p>
      ) : (
        <ul>
          {tickets.map((ticket) => (
            <li key={ticket._id}>
              <p><strong>Flight Number:</strong> {ticket.flightNumber}</p>
              <p><strong>Passenger Name:</strong> {ticket.passengerName}</p>
              <p><strong>Seat Number:</strong> {ticket.seatNumber}</p>
              <p><strong>Departure:</strong> {new Date(ticket.departure).toLocaleString()}</p>
              <p><strong>Arrival:</strong> {new Date(ticket.arrival).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TicketList;
