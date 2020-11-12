import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardHeader, CardBody, CardTitle, CardText, Col, Label, Row, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Form, Control, Errors, LocalForm } from 'react-redux-form';

//UI Component
class Contact extends Component {

    render() {

        return (
            <div style = {{background: 'rgb(70, 67, 55)'}}>
                <div className = "container">
                    <div className = "row">
                        <div className = "col-12">
                            <Breadcrumb className = "font-weight-bold sticky-top">
                                <BreadcrumbItem>
                                    <Link to = "/home">Home</Link>
                                </BreadcrumbItem>
                                <BreadcrumbItem active>Contact</BreadcrumbItem>
                            </Breadcrumb>
                        </div>
                    </div>
                    <div className = "row">
                        <h2 className = "text-center col-12">Contact Us <hr className = "bg-info"/></h2>
                        
                        <div className = "col-12 col-md-6 mb-5">
                            <Card className = "bg-dark text-white">
                                <CardHeader className = "text-center bg-info">Location Information</CardHeader>
                                <CardBody>
                                    <CardTitle className = "font-weight-bold text-success">OUR ADDRESS</CardTitle>
                                    <CardText>
                                        <span>
                                            7105 Resisterstown RoadBaltimore,<br/> MD 21215
                                        </span><br/>
                                        <span className = "fa fa-phone"> : +852 1234 5678</span><br/>
                                        <span className = "fa fa-envelope"></span> :
                                        <a href = "mailto:chinabistro@food.net"> chinabistro@food.net</a><br/>

                                        <div className = "btn-group mt-5" role = "group">
                                            <a href = "tel:+852 1234 5678" role = "button" className = "btn btn-primary">
                                            <span className = "fa fa-phone">Call</span>
                                            </a>
                                            <a href = "skype:echo85212345678?call" role = "button" className = "btn btn-success">
                                                <span className = "fa fa-skype">Skype</span>
                                            </a>
                                            <a href = "mailto:chinabistro@food.net" role = "button" className = "btn btn-info">
                                                <span className = "fa fa-envelope">Email</span>
                                            </a>
                                        </div>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className = "col-12">
                            <hr className = "bg-dark" />
                            <h3 className = "text-center text-primary mt-5">
                                Send Us Your FeedBack <hr className = "bg-info"/>
                            </h3>
                            <div className = "text-info bg-dark feedback-form p-5 m-1 mb-5">
                            <LocalForm>
                                <Row className = "form-group">
                                    <Label for = "firstname" className = "text-sm-right" sm = {3}>FirstName</Label>
                                    <Col sm = {8}>
                                        <Control.text 
                                            id = "firstname"
                                            model = ".firstname"
                                            className = "form-control bg-dark text-primary"
                                            name = 'firstname'
                                        />
                                    </Col>
                                </Row>
                                <Row className = "form-group">
                                    <Label className = "text-sm-right" for = "lastname" sm = {3}>LastName</Label>
                                    <Col sm = {8}>
                                        <Control.text 
                                            id = "lastname"
                                            model = ".lastname"
                                            className = "form-control bg-dark text-primary"
                                            name = "lastname"
                                        />
                                    </Col>
                                </Row>
                                <Row className = "form-group">
                                    <Label className = "text-sm-right" for = "email" sm = {3}>Email</Label>
                                    <Col sm = {8}>
                                        <Control.text
                                            id = "email"
                                            model = ".email"
                                            className = "form-control bg-dark text-primary"
                                            name = "email"
                                        />
                                    </Col>
                                </Row>
                                <Row className = "form-group">
                                    <Label className = "text-sm-right" for = "telnum" sm = {3}>TelNum</Label>
                                    <Col sm = {8}>
                                        <Control.text
                                            id = "telnum"
                                            model = ".telnum"
                                            className = "form-control bg-dark text-primary"
                                            name = "telnum"
                                        />
                                    </Col>
                                </Row>
                                <Row className = "form-group">
                                    <Col sm = {{size: 5, offset: 3 }}>
                                        <div className = "form-check">
                                        <Label check className = "text-sm-right" for = "checkbox">
                                        <Control.checkbox
                                            id = "checkbox"
                                            model = ".agree"
                                            className = "form-check-input bg-dark text-white"
                                            name = "agree"
                                            />May We Contact U
                                        </Label>
                                        </div>
                                    </Col>
                                    <Col sm = {{size: 2, offset: 1}}>
                                        <Control.select
                                            model = ".contactType"
                                            name = "contactType"
                                            className = "form-control bg-dark text-primary"
                                        >
                                            <option>Tel.</option>
                                            <option>Email</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row className = "form-group">
                                    <Label className = "text-sm-right" for = "message" sm = {3}>FeedBack</Label>
                                    <Col sm = {8}>
                                        <Control.textarea 
                                            model = ".message"
                                            id = "message"
                                            name = "message"
                                            rows = "6"
                                            className = "form-control bg-dark text-white"
                                        />
                                    </Col>
                                </Row>
                                <Row className = "form-group">
                                    <Col sm = {{size: 8, offset: 3}}>
                                        <Button type = "submit" color = "primary">Send FeedBack</Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Contact;