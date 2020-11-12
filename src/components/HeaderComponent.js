import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import {  NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class Header extends Component {
    constructor (props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false,
            isSignupOpen: false,
            message: 'No account yet? Register right there ===>',
            isDisable: false,

            firstname: '',
            lastname: '',
            email: '',
            password: '',
            touched: {
                firstname: false,
                lastname: false,
                email: false,
                password: false
            }
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleSignup = this.toggleSignup.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
        this.blurNav = this.blurNav.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
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

    handleLogin (e, field) {
        this.toggleModal();
        alert(`Email: ${this.email.value}, password: ${this.password.value}, remember: ${this.remember.checked}`);
        this.setState({
            isDisable: false,
            email: '',
            password: '',
            message: 'No account yet? Register right there ===>',
            touched: false
        })
        e.preventDefault();
    }

    handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleBlur = field  => evt => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        })
    }

    handleSignup (e, field) {
        this.toggleSignup();
        alert(`Have a nice day ${this.firstname.value} ${this.lastname.value} \n You can login now with: \n email: ${this.email.value} \n password: ${this.password.value}`);
        this.setState({
            message: '<=== Login here: Successfully Registered.',
            isDisable: true,
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            touched: false
        })
        e.preventDefault();
    }


    validate(firstname, lastname, email, password) {
        const errors = {
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        };

        if(this.state.touched.firstname && firstname.length < 3){
            errors.firstname = 'Should be greater than 3 characters!'

        }
        if(this.state.touched.lastname && lastname.length < 3 ) {
            errors.lastname = 'Should be greater than 3 characters!'
        }
        if(this.state.touched.email && email.split('').filter(x => x === '@').length < 1) {
            errors.email = 'Email should include @ character!'
        }
        if (this.state.touched.password && password.length < 5) {
            errors.password = 'Password should be 5 characters at least and above to be secure your account!'
        }

        return errors;
    }

    render() {

        const errors = this.validate(
            this.state.firstname,
            this.state.lastname,
            this.state.email,
            this.state.password
        )
        return (
            <>
            <Navbar dark expand = "md">
                <div className = "container">
                    <NavbarBrand>
                        <Link to = "/home">
                        <img src = "/assets/images/logo.png" width = "80" height = "80" alt = "logo.png"/>
                        </Link>
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
                                <span className = "fa fa-address-card fa-lg"></span>
                                 Contact
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
                                value = {this.state.email}
                                onChange = {this.handleInputChange}
                                onBlur = {this.handleBlur('email')}
                                valid = {errors.email === ''}
                                invalid = {errors.email !== ''}
                                required
                                innerRef = {(input) => this.email = input }
                            />
                            <FormFeedback>
                                {errors.email}
                            </FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for = "password">Password</Label>
                            <Input 
                                type = "password" 
                                id = "password" 
                                required
                                value = {this.state.password}
                                onChange = {this.handleInputChange}
                                onBlur = {this.handleBlur('password')}
                                valid = {errors.password === ''}
                                invalid = {errors.password !== ''}
                                name = "password"
                                innerRef = {input => this.password = input}
                            />
                            <FormFeedback>
                                {errors.password}
                            </FormFeedback>
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
                            <p className = "text-info pr-1 pl-1 m-0">
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
                            required
                            value = {this.state.firstname}
                            onChange = {this.handleInputChange}
                            onBlur = {this.handleBlur('firstname')}
                            name = "firstname"
                            valid = {errors.firstname === ''}
                            invalid = {errors.firstname !== ''}
                            innerRef = {(input) => this.firstname = input }
                        />
                        <FormFeedback>
                            {errors.firstname}
                        </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for = "lastname">Lastname</Label>
                        <Input 
                            type = "text" 
                            id = "lastname" 
                            required
                            value = {this.state.lastname}
                            onChange = {this.handleInputChange}
                            onBlur = {this.handleBlur('lastname')}
                            valid = {errors.lastname === ''}
                            invalid = {errors.lastname !== ''}
                            name = "lastname"
                            innerRef = {(input) => this.lastname = input }
                        />
                        <FormFeedback>
                            {errors.lastname}
                        </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for = "email">Email</Label>
                        <Input 
                            type = "email" 
                            id = "email" 
                            required
                            value = {this.state.email}
                            onChange = {this.handleInputChange}
                            onBlur = {this.handleBlur}
                            valid = {errors.email === ''}
                            invalid = {errors.email !== ''}
                            name = "email"
                            innerRef = {(input) => this.email = input }
                        />
                        <FormFeedback>
                            {errors.email}
                        </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for = "password">Password</Label>
                        <Input 
                            type = "password" 
                            id = "password" 
                            required
                            value = {this.state.password}
                            onChange = {this.handleInputChange}
                            onBlur = {this.handleBlur('password')}
                            valid = {errors.password === ''}
                            invalid = {errors.password !== ''}
                            name = "password"
                            innerRef = {input => this.password = input}
                        />
                        <FormFeedback>
                            {errors.password}
                        </FormFeedback>
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