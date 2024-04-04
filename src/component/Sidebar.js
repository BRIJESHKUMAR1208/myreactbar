import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    // <div className="sidebar">
    //   <Nav className="flex-column">
    //     <Nav.Link href="#home">Home</Nav.Link>
    //     <Nav.Link href="#about">About</Nav.Link>
    //     <Nav.Link href="#services">Services</Nav.Link>
    //     {/* Add more sidebar links as needed */}
    //   </Nav>
    // </div>
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/aboutus">About Us</Link>
        </li>
        {/* Add other sidebar links as needed */}
      </ul>
    </div>
  );
}

export default Sidebar;
