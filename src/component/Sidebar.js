import React from 'react';
import { Nav } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Nav className="flex-column">
      <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/bar">Bar Chart</Nav.Link>
        <Nav.Link href="/pie">Pie Chart</Nav.Link>
    
        {/* Add more sidebar links as needed */}
      </Nav>
    </div>
  );
}

export default Sidebar;
