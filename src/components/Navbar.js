import React from 'react';
// import './Navbar.css'; // Import the CSS file for the Navbar component
import '../styles/Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Logo Text</div>
      <ul className="navbarList">
        <li className="navbarItem">
          <a href="/" className="navbarLink">Home</a>
        </li>
        <li className="navbarItem">
          <a href="/shops" className="navbarLink">Shops</a>
        </li>
        <li className="navbarItem">
          <a href="/items" className="navbarLink">Items</a>
        </li>
        <li className="navbarItem">
          <a href="/login" className="navbarLink">Login</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
