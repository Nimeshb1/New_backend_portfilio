import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const NavBars = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg=""
      variant="dark"
      style={{
        width: "100%",
        opacity: "70%",
      }}
    >
      <Container>
        <Navbar.Brand href="#home" className="fs-2">
          <i class="fa-solid fa-code fs-3 text-primary"></i> {""}
          Nimesh Bista
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav " className="text-center">
          <Nav className="me-auto">
            <Nav.Link href="#features"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
          </Nav>
          {/* <Nav className="d-flex g-5  fs-5 ">
            <Nav.Link href="#heroSection" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link className="text-white" href="#skills">
              About
            </Nav.Link>
            <Nav.Link href="#projects" className="text-white">
              Blog
            </Nav.Link>

            <Nav.Link href="#contact" className="text-white">
              Contact
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
