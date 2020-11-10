import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Card, CardGroup, CardImg, CardImgOverlay, Label, Media, Modal, ModalBody, ModalHeader, Form, Button, FormGroup, Input } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { FadeTransform, Stagger, Fade } from 'react-animation-components';

function RenderDishDetail ({item}) {
    return(
        <div className = "container">
            <div className = "row">
                <div className = "col-12 col-md-5 m-1">
                <FadeTransform
                    in transformProps = {{exitTransform: 'scale(0.5) TranslateX(-100%)'}}
                >
                    <CardGroup>
                        <Card>
                            <CardImg src = {item.image} alt = {item.name} width = "100%"/>
                            <CardImgOverlay className = "p-0">
                                <span className = "label card-header p-1 pl-2 pr-2">
                                    {item.label}
                                </span>
                            </CardImgOverlay>
                        </Card>
                    </CardGroup>
                </FadeTransform>
                </div>
                <div className = "col-12 col-md-5 m-1">
                <FadeTransform
                    in transformProps = {{exitTransform: 'scale(0.5) TranslateX(100%)'}}
                >
                    <Media heading className = "text-center text-md-left">{item.name}</Media>
                    <p className = "text-center text-md-left font-weight-bold">{item.price}</p>
                    <p className = "text-justify text-center text-md-left font-italic">{item.description}</p>
                </FadeTransform>
                </div>
            </div>
        </div>
    );
};

function RenderComments ({comments}) {
    console.log(comments.length);
    if(comments.length === 0) {
        return (
                <div><i>no comments yet</i></div>
        );
    }
    if(comments.length > 0) {
        const commentsList = comments.map(comment => {
            const date = new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'short',
                day: '2-digit'
            }).format(new Date(comment.date));

                return (  
                        <li key = {comment.id}>
                            <div className = "p-3 comment-bg">
                            <p><b>{comment.comment}</b></p>
                            <p>Rating: {comment.rating}</p>
                            <p>--<i>{comment.author}</i>, {date}</p>
                            </div>
                            <hr className = "bg-muted"/>
                        </li>
                );
        })
        return (
            <Fade in>
            <ul className = "list-unstyled" >
            {commentsList}
            </ul>
            </Fade>
    );
}
} 

class PostComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            username: '',
            email: '',
            comment: ''

        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleonChange = this.handleonChange.bind(this);
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleonChange (e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        alert(`Thanks a lot ${this.state.username} for submitting: \n
        Email: ${this.state.email} \n
        Comment: ${this.state.comment}`);
        this.toggleModal();
        e.preventDefault();
    }

    render() {
        return (
        //comment modal
        <>
        <Modal isOpen = {this.state.isModalOpen} toggle = {this.toggleModal}>
            <ModalHeader>Submit Comment</ModalHeader>
            <ModalBody>
                <Form onSubmit = {this.handleSubmit}>
                    <FormGroup>
                        <Label for = "username">Username</Label>
                        <Input id = "username" name = "username" placeholder = "username" required onChange = {this.handleonChange} value = {this.state.username}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for = "email">Email</Label>
                        <Input id = "email" name = "email" placeholder = "email" required onChange = {this.handleonChange} value = {this.state.email}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for = "comment">Comment</Label>
                        <Input type = "textarea" required onChange = {this.handleonChange} name = "comment" value = {this.state.comment}/>
                    </FormGroup>
                    <FormGroup>
                        <Button>Submit</Button>
                    </FormGroup>
                </Form>
            </ModalBody>
        </Modal>

        <Button type = 'button' className = "bg-primary" onClick = {this.toggleModal}>
            Submit Comments
        </Button>
        </>
        );
    }
}



const DishDetail = (props) => {

    if(props.isLoading) {
        return(
            <Loading />
        );
    }
    else if (props.errMsg) {
        return (
            <h4>{props.errMsg}</h4>
        );
    }
    else {
        const itemDetail = props.item.map(item => {

            return(
                <div key = {item.id} className = "mr-5 ml-5 mb-4 m-md-3">

                        <RenderDishDetail item = {item} />
                </div>
            );
        });


        const item = props.item.map(item => item)[0];

        const specificItems = props.specificItems;
        const menuLength = specificItems.length-1;
        console.log(menuLength);

        const labelAry = item.label.split('');
        
        console.log(Number(labelAry[1]+ labelAry[2]));
        const len3 = Number(labelAry[1]+ labelAry[2]);
        if(labelAry.length === 3 ) {
            if(len3 < (menuLength)) {

                const nextLabel = len3 + 1;
                var nextItem = labelAry[0] + nextLabel;
    
                const prevLabel = len3 - 1;
                var prevItem = labelAry[0] + prevLabel;
            }
            else if(len3 === menuLength) {
                const nextLabel = Number(len3);
                nextItem = labelAry[0] + nextLabel;
    
                const prevLabel = len3 - 1;
                prevItem = labelAry[0] + prevLabel;
            }         
        }
        else {
            if(Number(labelAry[1]) < (menuLength) && Number(labelAry[1])>1) {
                
                const nextLabel = Number(labelAry[1]) + 1;
                var nextItem = labelAry[0] + nextLabel;
                
                const prevLabel = Number(labelAry[1]) - 1;
                var prevItem = labelAry[0] + prevLabel;
            }
            else if(Number(labelAry[1]) === menuLength) {
                const nextLabel = Number(labelAry[1]);
                nextItem = labelAry[0] + nextLabel;
                
            const prevLabel = Number(labelAry[1]) - 1;
            prevItem = labelAry[0] + prevLabel;
        }
        else if (Number(labelAry[1]) === 1) {
            const nextLabel = Number(labelAry[1]) + 1;
            nextItem = labelAry[0] + nextLabel;
            
            const prevLabel = Number(labelAry[1]);
            prevItem = labelAry[0] + prevLabel;
        }
        
    }
        return (
            <div className = "container">
                <Breadcrumb className = "font-weight-bold sticky-top">
                <BreadcrumbItem>
                    <Link to = "/home">Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <Link to = "/menu">Menu</Link>
                </BreadcrumbItem>
                <BreadcrumbItem className = "text-capitalize">
                    <Link to = {`/menu/${item.category}`}>{item.category}</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>{item.label}</BreadcrumbItem>
                </Breadcrumb>
                {itemDetail}
                <hr className = "bg-info" />
                <div className = "col-12">
                <div className = " m-4 text-md-left text-center">
                    <h4>Comments</h4>
                        <Stagger in>
                        <RenderComments comments = {props.comments} />
                        <PostComment />
                        </Stagger>
                    </div>
                </div>
                    <div className = "d-flex justify-content-between m-4">
                        <Link  to = {`/menu/${item.category}/${prevItem}`} className = "prev-btn text-decoration-none p-2 pr-4 pl-4 ">
                            Prev
                        </Link>
                        <Link  to = {`/menu/${item.category}/${nextItem}`} className = "next-btn p-2 pr-4 pl-4 text-decoration-none">
                            Next
                        </Link>
                    </div>
            </div>
        );
    }
};

export default DishDetail; 