import React, { useState } from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import "./TopNavbar.css";

export default function TopNavbar({ onSearch, onLoginClick }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
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
        <Navbar.Brand as={Link} to="/" className="text-danger fw-bold fs-3">
          NETCLONE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="text-light">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="text-light">
              TV Shows
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="text-light">
              Movies
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="text-light">
              New & Popular
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="text-light">
              My List
            </Nav.Link>
          </Nav>

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

          <Button variant="outline-light" size="sm" onClick={onLoginClick}>
            Logout
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
