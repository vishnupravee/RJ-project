// src/components/NavbarCustom.jsx
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavbarCustom.css";

const NavbarCustom = () => {
  return (
    <Navbar expand="lg" fixed="top" className="navbar-custom">
      <Container>
        <Navbar.Brand href="/" className="brand-text">
          RJ ATLAS DIGITAL AI
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#services" className="nav-animated">Services</Nav.Link>
            <Nav.Link href="#casesignals" className="nav-animated">CaseSignals</Nav.Link>
            <Nav.Link href="#ailab" className="nav-animated">AILab</Nav.Link>
            <Nav.Link href="#pricing" className="nav-animated">Pricing</Nav.Link>
            <Nav.Link href="#contact" className="nav-animated">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarCustom;
