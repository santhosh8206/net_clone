import React, { useState } from 'react';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import './TopNavbar.css';

export default function TopNavbar({ onSearch, onLoginClick }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // Call search function from parent
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      className="top-navbar shadow-sm"
    >
      <Container fluid>
        {/* Netflix Logo */}
        <Navbar.Brand href="#" className="text-danger fw-bold fs-3">
          NETFLIX
        </Navbar.Brand>

        {/* Collapsible Menu */}
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" className="text-light">Home</Nav.Link>
            <Nav.Link href="#" className="text-light">TV Shows</Nav.Link>
            <Nav.Link href="#" className="text-light">Movies</Nav.Link>
            <Nav.Link href="#" className="text-light">New & Popular</Nav.Link>
            <Nav.Link href="#" className="text-light">My List</Nav.Link>
          </Nav>

          {/* Search Input */}
          <Form className="d-flex me-3">
            <Form.Control
              type="search"
              placeholder="Search (English / Tamil)"
              className="me-2 search-box"
              aria-label="Search"
              value={query}
              onChange={handleInputChange}
            />
          </Form>

          {/* Login/Logout Button */}
          <Button variant="outline-light" size="sm" onClick={onLoginClick}>
            Logout
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
