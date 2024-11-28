import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookingPage = () => {
  const [flights, setFlights] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);

  useEffect(() => {
    // Fetch flights from backend
    axios.get('http://localhost:5000/api/flights')
      .then((response) => {
        setFlights(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleBooking = (flightId) => {
    // Add booking logic here
    axios.post('http://localhost:5000/api/bookings', { flightId })
      .then((response) => {
        alert('Booking successful');
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Available Flights</h1>
      <div>
        {flights.map((flight) => (
          <div key={flight.id} className="flight-card">
            <h3>{flight.name}</h3>
            <p>{flight.departure} - {flight.arrival}</p>
            <button onClick={() => handleBooking(flight.id)}>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingPage;
