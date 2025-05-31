import React from 'react';
import './Navbar.css'; // We'll create this file next

function Navbar() {  return (   
    <nav className="navbar">
      <div className="navbar-brand">Customer Support Ticketing system</div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;