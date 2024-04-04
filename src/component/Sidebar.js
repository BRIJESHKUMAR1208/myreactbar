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
<<<<<<< HEAD
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/aboutus">About Us</Link>
        </li>
        {/* Add other sidebar links as needed */}
      </ul>
=======
      <Nav className="flex-column">
      <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/bar">Bar Chart</Nav.Link>
        <Nav.Link href="/pie">Pie Chart</Nav.Link>
    
        {/* Add more sidebar links as needed */}
      </Nav>
>>>>>>> c9b55f21b5c7e300f48ca5c69d0e46293f8c195d
    </div>
  );
}

export default Sidebar;
