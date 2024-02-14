import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <NavbarBs sticky='top' className='navbar navbar-custom navbar-dark bg-dark'>
        <Container>
            <h1>Spartan Fitness</h1>

            {/* navigation */}
            <Nav className='ms-auto'>
                <Nav.Link as={NavLink} to='/' exact>Home</Nav.Link>
                <Nav.Link as={NavLink} to='/about'>About</Nav.Link>
            </Nav>
        </Container>
    </NavbarBs>
  );
};

export default Navbar;
