
import React, { useState } from 'react';
import './assets/css/style.css';
import { HashLink as Link } from 'react-router-hash-link';
import { Navbar, Nav, Image } from 'react-bootstrap';
import Logo from './assets/images/logo.webp';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" bg="light" fixed="top" expanded={expanded}>
      <Navbar.Brand href="/">
        <Image src={Logo} alt="Logo" width="150" />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={() => setExpanded(expanded ? false : 'expanded')}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="#home">Home</Nav.Link>
          <Nav.Link as={Link} to="#about">About</Nav.Link>
          <Nav.Link as={Link} to="#services">Services</Nav.Link>
          <Nav.Link as={Link} to="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
