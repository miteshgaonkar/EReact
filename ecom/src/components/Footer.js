import React from "react";
import {Nav, Navbar, Container, Row} from 'react-bootstrap';

function Footer() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">About</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Toggle />
          <Navbar.Brand href="#home">Copy @copy miteshgaonkar</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;
