import React from "react";
import {Nav, Navbar, Container, Row} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
function Header() {
  return (
    <div>
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <LinkContainer to="/">
          <Navbar.Brand>E Com</Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <Nav.Link href="/"> <i className="fas fa-home"></i> Home</Nav.Link>
            <Nav.Link href="/"> <i class="fas fa-shopping-cart"></i> Cart</Nav.Link>
            <Nav.Link href="/"> <i className="fas fa-user"></i> Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
