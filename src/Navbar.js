import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './navbar.css';

function NavBar() {
  return (
    <Navbar className="navBar" expand="lg">
      <Container className="justify-content-center">
        <Nav className="nav-links">
          <Nav.Link href="#home" className="nav-link-custom">TO-DO LIST</Nav.Link>
          <Nav.Link href="#features" className="nav-link-custom">BMI CALCULATOR</Nav.Link>
          <Nav.Link href="#pricing" className="nav-link-custom">WEATHER DASHBOARD</Nav.Link>
          <Nav.Link href="#pricing" className="nav-link-custom">DISCORD BOT</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
