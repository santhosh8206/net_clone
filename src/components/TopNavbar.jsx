import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TopNavbar.css';

export default function TopNavbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      variant="dark"
      className={`fixed-top ${show ? 'nav-black' : ''}`}
    >
      <Container fluid className="d-flex align-items-center justify-content-between px-4">
        {/* Left Section */}
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
            height="28"
            className="me-3"
          />
          <Nav className="d-none d-md-flex">
            <Nav.Link href="#" className="text-light">Home</Nav.Link>
            <Nav.Link href="#" className="text-light">TV Shows</Nav.Link>
            <Nav.Link href="#" className="text-light">Movies</Nav.Link>
            <Nav.Link href="#" className="text-light">New & Popular</Nav.Link>
            <Nav.Link href="#" className="text-light">My List</Nav.Link>
          </Nav>
        </Navbar.Brand>

        {/* Right Section */}
        <div className="d-flex align-items-center">
          <Form className="d-none d-md-block me-3">
            <FormControl
              type="text"
              placeholder="Search"
              className="bg-dark text-light border-0"
              style={{ width: '160px' }}
            />
          </Form>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="User Avatar"
            height="32"
            className="rounded-circle"
          />
        </div>
      </Container>
    </Navbar>
  );
}