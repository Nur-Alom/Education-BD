import React from 'react';
import './Header.css';
import { Button, Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavbarBrand to="/home">EducationBD <i className="fas fa-graduation-cap"></i></NavbarBrand>
                    <Nav className="ms-auto">
                        <NavLink className="nav" to="/home">Home</NavLink>
                        <NavLink className="nav" to="/courses">Courses</NavLink>
                        <NavLink className="nav" to="/about">About</NavLink>
                        <NavLink className="nav" to="/contact">Contact</NavLink>
                        <Button variant="success text-white">Login</Button>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;