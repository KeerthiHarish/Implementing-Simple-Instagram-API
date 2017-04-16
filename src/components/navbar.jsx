import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export class SiteNavbar extends React.Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Instagram posts</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
        </Nav>
      </Navbar>
    );
  }
}


