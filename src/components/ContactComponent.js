import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import {  FadeTransform } from 'react-animation-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.showModal = this.showModal.bind(this);
    }

    toggleModal () {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    showModal () {
        this.setState({
            showModal: true
        })
    }   

    render() {
        return (
            <>
            <Modal  isOpen = {this.state.isModalOpen} toggle = {this.toggleModal}>
                <ModalHeader toggle = {this.toggleModal}>Helo</ModalHeader>
                <ModalBody>
                </ModalBody>
            </Modal>
            <Button type = "button" onClick = {this.toggleModal}>OpenModal</Button>
            </>
        );
    }
};

export default Contact;
