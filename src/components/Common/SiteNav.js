import React from "react";
import { Button, NavbarBrand } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const SiteNav = () => {
  return (
    <header>
      <Navbar>
        <Container>
          <Navbar.Brand>Contact App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-md-auto">
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
            <Nav className="ms-md-auto">
              <Nav.Link href="/register">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default SiteNav;
