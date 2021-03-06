import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
const Styles = styled.div`
  .navbar { background-color: #de6fca; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #222;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #222;
    &:hover { color: white; }
  }
  .navbar-detail {
    font-size: .5em;
    color: white;
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/books">Book Review</Navbar.Brand>
      <Nav.Item><Nav.Link href="/books/new">Add A New Book</Nav.Link></Nav.Item>
      <Nav.Item>Track your favorite reivews, and then review books yourself!</Nav.Item>

      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/books">Home</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)
