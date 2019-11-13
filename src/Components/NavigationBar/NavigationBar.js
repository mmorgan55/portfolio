import React from "react";
import { Nav, Navbar } from "react-bootstrap"
import styled from "styled-components"

const Styles = styled.div`
    .navbar {
      background-color: #222;
    }

    .navbar-brand, navbar-nav .nav-link {
      color: #bbb;

      &:hover {
        color: white;
      }
    }
`;

export const NavigationBar = () => {
  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">Something Something</Navbar.Brand>
        <Navbar.Toggle aria-controls="nasic-navbar-nav" />
        <Navbar.Collapse id="nasic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item><Nav.Link href="/">Home Page</Nav.Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}