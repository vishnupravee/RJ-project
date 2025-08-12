// src/components/NavbarCustom.jsx
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavbarCustom.css";
import homelogo from "../asset/rj_digital_ai-removebg-preview.png";

const NavbarCustom = () => {
  return (
    <Navbar expand="lg" fixed="top" className="navbar-custom">
      <Container>
        <Navbar.Brand href="/" className="brand-text">
        <img
  src={homelogo}
    width="40"
    height="40"
    className="d-inline-block align-top me-2"
  />
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
