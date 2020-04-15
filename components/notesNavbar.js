import React from "react";
import Link from "next/link";
import { Navbar, Nav } from "react-bootstrap";
import PropTypes from "prop-types";

const NotesNavbar = ({ username, menuItems }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <Link href="/notes">
          <a>Notes App</a>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {menuItems &&
            menuItems.map((m, i) => (
              <Navbar.Text key={i}>
                <Link href={m.href}>
                  <a>{m.name}</a>
                </Link>
              </Navbar.Text>
            ))}
          {!menuItems && <Navbar.Text>No routes availables</Navbar.Text>}
        </Nav>
        <Nav>
          {username && (
            <Navbar.Text>
              Signed in as:{" "}
              <Link href="/user">
                <a>{username}</a>
              </Link>
            </Navbar.Text>
          )}
          {!username && (
            <Navbar.Text>
              <Link href="/login">
                <a>Login</a>
              </Link>
            </Navbar.Text>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

NotesNavbar.propTypes = {
  username: PropTypes.string.isRequired,
  menuItems: PropTypes.array,
};

export default NotesNavbar;
