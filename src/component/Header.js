import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import './Header.css'; // Import your custom CSS file
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle search
  const handleSearch = (e) => {
    e.preventDefault();
    // Here you can perform your search operation using the searchQuery state
    console.log('Searching for:', searchQuery);
  };

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand href="#" className="custom-brand">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 custom-nav" navbarScroll>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/postpet">Pet Post</Nav.Link>
            <Nav.Link href="/get">GetData </Nav.Link>
            <Nav.Link href="/task">Example </Nav.Link>
            <Link to="/bar-chart" className="nav-link">BarChart</Link>
            <Link to="/piechart" className="nav-link">MyPieChart</Link>
            <Link to="/aboutus" className="nav-link">About Us</Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled className="disabled-link">Link</Nav.Link>
          </Nav>
          <Form onSubmit={handleSearch} className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 custom-search"
              aria-label="Search"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
