import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, Button } from 'reactstrap';
import {  NavLink } from 'react-router-dom';

class Header extends Component {
    constructor (props) {
        super(props);

        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav () {
        this.setState ({
            isNavOpen: !this.state.isNavOpen
        })
    }
    render() {
        return (
            <>
            <Navbar dark expand = "md">
                <div className = "container">
                    <NavbarBrand>
                        <img src = "/assets/images/logo.png" width = "80" height = "80" alt = "logo.png"/>
                        <p> <img src = "/assets/images/star.png" alt = "kosher"/>Kohser Certified</p>
                    </NavbarBrand>
                    <Nav>
                    <NavItem>
                            <Button>
                                <span className = "fa fa-sign-in fa-lg">
                                </span> Login
                            </Button>
                        </NavItem>
                    </Nav>
                    <NavbarToggler onClick = {this.toggleNav} />
                    <Collapse navbar isOpen = {this.state.isNavOpen} className = "text-center">
                    <hr className = "bg-info" />
                    <Nav navbar>
                        <NavItem>
                            <NavLink className = "nav-link" to = "/home">
                                <span className = "fa fa-home fa-lg"></span>
                                 Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className = "nav-link" to = "/menu">
                                <span className = "fa fa-list fa-lg">
                                </span> Menu
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className = "nav-link" to = "/about">
                                <span className = "fa fa-info-circle fa-lg">
                                </span> About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className = "nav-link" to = "/awards">
                                <span className = "fa fa-certificate fa-lg"></span>
                                 Awards
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className = "nav-link" to = "/contact">
                                <span className = "fa fa-address-card fa-lg"></span> Contact
                            </NavLink>
                        </NavItem>
                    </Nav>
                    </Collapse>
                </div>
            </Navbar>
            </>
        );
    }
}

export default Header;