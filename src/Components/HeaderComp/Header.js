import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Img from "../../assets/image/logo.png";
import Menus from "../../assets/data/Menu";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      bg="dark"
      variant="dark"
      className="navbar fixed-top"
      expand="md"
    >
      <Container>
        <Navbar.Brand href="/">
          <img alt="" src={Img} className="d-inline-block align-top" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {Menus.map(({ title, href }) => (
              <Nav.Link href={href}>{title}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
