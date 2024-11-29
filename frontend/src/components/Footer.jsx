import React from 'react';
import '../styles/Footer.css'; // Correct path for Footer CSS

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Airline Ticket Management. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
