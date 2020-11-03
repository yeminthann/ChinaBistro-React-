import React from 'react';
import { CardGroup,Card, CardImg, CardImgOverlay, Breadcrumb, BreadcrumbItem, Media } from 'reactstrap';
import { Link } from 'react-router-dom'
import { Loading } from './LoadingComponent';
import { Stagger, Fade } from 'react-animation-components';

function RenderSpecialMenu ({item}) {
    return(
        <div className = "container">
            <div className = "row">
                <div className = "col-12 col-md-5 m-1">
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
                </div>
                <div className = "col-12 col-md-5 m-1">
                        <Media heading className = "text-center text-md-left">{item.name}</Media>
                        <p className = "text-center text-md-left font-weight-bold">{item.price}</p>
                        <p className = "text-justify font-italic">{item.description}</p>
                </div>
            </div>
        </div>
    );
}

const SpecialMenu = (props) => {
    if(props.isLoading) {
        return (
            <Loading />
        );
    }
    else if (props.errMsg) {
        return (
            <h4>{props.errMsg}</h4>
        );
    }
    else {
        const specialItems = props.items.map(item => {

            return (
                <Fade in>
                    <div key = {item.id}>
                        <RenderSpecialMenu item = {item} />
                        <hr className = "bg-info"/>
                    </div>
                </Fade>
            );
        });
        const item = props.items.map(item => item)[0];
        return(
            <div className = "container">
            <Breadcrumb className = "font-weight-bold sticky-top">
            <BreadcrumbItem>
                <Link to = "/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem className = "text-capitalize">
                {item.category}
            </BreadcrumbItem>
            </Breadcrumb>
            <h3 className = "text-center p-2">
                CHIEF'S RECOMMENDATION MENU <hr className = "bg-warning"/>
            </h3>
            <Media list>
                <Stagger in>
                    {specialItems}
                </Stagger>
            </Media>
            </div>
        );
    }
}


export default SpecialMenu;