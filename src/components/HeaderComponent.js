import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import {  NavLink } from 'react-router-dom';

class Header extends Component {
    constructor (props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false,
            isSignupOpen: false,
            message: 'No account yet? Register right there ===>',
            isDisable: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleSignup = this.toggleSignup.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
        this.blurNav = this.blurNav.bind(this);
    }

    toggleNav () {
        this.setState ({
            isNavOpen: !this.state.isNavOpen
        })
    }

    blurNav() {
        this.setState({
            isNavOpen: false
        })
    }
    toggleModal () {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }
    toggleSignup() {
        this.setState({
            isSignupOpen: !this.state.isSignupOpen
        })
    }

    handleLogin (e) {
        this.toggleModal();
        alert(`Email: ${this.email.value}, password: ${this.password.value}, remember: ${this.remember.checked}`);
        e.preventDefault();
    }

    handleSignup (e) {
        this.toggleSignup();
        alert(`Have a nice day ${this.firstname.value} ${this.lastname.value} \n You can login now with: \n email: ${this.email.value} \n password: ${this.password.value}`);
        this.setState({
            message: '<=== Login here: Successfully Registered.',
            isDisable: true
        })
        e.preventDefault();
    }
    render() {
        return (
            <>
            <Navbar dark expand = "md">
                <div className = "container">
                    <NavbarBrand>
                        <img className = "d-none d-md-inline" src = "/assets/images/logo.png" width = "80" height = "80" alt = "logo.png"/>
                        <img className = "d-md-none d-inline" src = "/assets/images/logo_small.png" width = "80" height = "80" alt = "logo.png"/>
                        <p className = "d-none d-md-block"> <img src = "/assets/images/star.png" alt = "kosher"/>Kohser Certified</p>
                    </NavbarBrand>
                    <Nav>
                    <NavItem>
                        <Button onClick = {this.toggleModal}>
                            <span className = "fa fa-sign-in fa-lg">
                            </span> Login
                        </Button>
                    </NavItem>
                    </Nav>
                    <NavbarToggler onClick = {this.toggleNav} onBlur = {this.blurNav} />
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

            {/* login modal */}
            <Modal isOpen = {this.state.isModalOpen} toggle = {this.toggleModal}>
                <ModalHeader toggle = {this.toggleModal} charCode = "Y">
                    Login
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit = {this.handleLogin}>
                        <FormGroup>
                            <Label for = "email">Email</Label>
                            <Input 
                                type = "email" 
                                id = "email" 
                                name = "email"
                                innerRef = {(input) => this.email = input }
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for = "password">Password</Label>
                            <Input 
                                type = "password" 
                                id = "password" 
                                name = "password"
                                innerRef = {input => this.password = input}
                            />
                        </FormGroup>
                        <FormGroup check>
                            <Label for = "checkbox">
                                <Input 
                                    type = "checkbox" 
                                    name = "remember" 
                                    id = "checkbox"
                                    innerRef = {input => this.remember = input}
                                />
                                Remember me
                            </Label>
                        </FormGroup>
                        <FormGroup className = "d-flex justify-content-between">
                            <Button 
                                type = "submit" 
                                value = "submit" 
                                color = "success"
                            >
                                Login
                            </Button>
                            <p className = "text-info mt-2">
                                {this.state.message}
                            </p>
                            <Button 
                                disabled = {this.state.isDisable}
                                onClick = {this.toggleSignup}
                                color = "info"
                            ><span className = "fa fa-sign-in fa-lg"></span>
                            </Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>

            {/* signup modal */}
            <Modal isOpen = {this.state.isSignupOpen} toggle = {this.toggleSignup}>
                <ModalHeader toggle = {this.toggleSignup}>Signup</ModalHeader>
                <ModalBody>
                <Form onSubmit = {this.handleSignup}>
                    <FormGroup>
                        <Label for = "firstname">Firstname</Label>
                        <Input 
                            type = "text" 
                            id = "firstname" 
                            name = "firstname"
                            innerRef = {(input) => this.firstname = input }
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for = "lastname">Lastname</Label>
                        <Input 
                            type = "text" 
                            id = "lastname" 
                            name = "lastname"
                            innerRef = {(input) => this.lastname = input }
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for = "email">Email</Label>
                        <Input 
                            type = "email" 
                            id = "email" 
                            name = "email"
                            innerRef = {(input) => this.email = input }
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for = "password">Password</Label>
                        <Input 
                            type = "password" 
                            id = "password" 
                            name = "password"
                            innerRef = {input => this.password = input}
                        />
                    </FormGroup>
                    <FormGroup className = "d-flex justify-content-between">
                        <Button 
                            type = "submit" 
                            value = "submit" 
                            color = "success"
                        >
                            Signup
                        </Button>
                    </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
            </>
        );
    }
}

export default Header;