import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRadiationAlt, } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    const iconRadiantAlt = <FontAwesomeIcon icon={faRadiationAlt} />

    const activeStyle = {
        fontWeight: "bold",
        color: "#0071DC"
    };

    return (
        <Navbar className="fixed-top" bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand to="#"><h5 style={{ fontWeight: 'bold' }}> {iconRadiantAlt} LEARNING HUB</h5></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink activeStyle={activeStyle} className="nav-link" to="/home">Home</NavLink>
                        <NavLink activeStyle={activeStyle} className="nav-link" to="/services">Services</NavLink>
                        <NavLink activeStyle={activeStyle} className="nav-link" to="/about">About</NavLink>
                        <NavLink activeStyle={activeStyle} className="nav-link" to="/contact">Contact Us</NavLink>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;