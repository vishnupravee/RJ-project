import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="footer-top">
          <Col md={4} className="footer-brand">
            <h4 className="brand-title">RJ ATLAS DIGITAL AI</h4>
            <p className="brand-desc">
              Futuristic, Intelligent, Trustworthy, Innovative, Premium.
            </p>
            <p>Thalassery, Kerala, India</p>
            <p>+91 - Available Mon–Sat</p>
          </Col>

          <Col md={2}>
            <h5>Company</h5>
            <ul>
              <li>Services</li>
              <li>Case Signals</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
          </Col>

          <Col md={2}>
            <h5>Resources</h5>
            <ul>
              <li>Blog</li>
              <li>Guides</li>
              <li>Webinars</li>
              <li>AI Tools</li>
            </ul>
          </Col>

          <Col md={2}>
            <h5>Legal</h5>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
              <li>GDPR</li>
            </ul>
          </Col>

          <Col md={2} className="footer-social">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="#" className="social-link"><FaFacebookF /></a>
              <a href="#" className="social-link"><FaInstagram /></a>
              <a href="#" className="social-link"><FaLinkedinIn /></a>
            </div>
          </Col>
        </Row>

        <Row className="footer-bottom">
          <Col>
            <p>© 2025 RJ ATLAS DIGITAL AI. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
