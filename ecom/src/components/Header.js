import React from "react";
import {Nav, Navbar, Container, Row} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
function Header() {
  return (
    <div>
       <Navbar bg="dark" variant="dark">
       {/* data-bs-theme="dark" */}
        <Container>

          <LinkContainer to="/">
          <Navbar.Brand>E Com</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="navbarScroll"/>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: "100px"}}
                navbarScroll>
                <LinkContainer to="/">
                <Nav.Link > <i className="fas fa-home"></i> Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/cart">
                <Nav.Link > <i class="fas fa-shopping-cart"></i> Cart</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                <Nav.Link > <i className="fas fa-user"></i> Login</Nav.Link>
                </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

  );
}

export default Header;
