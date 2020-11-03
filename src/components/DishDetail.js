import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Breadcrumb, BreadcrumbItem, Card, CardGroup, CardImg, CardImgOverlay, Media } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { FadeTransform } from 'react-animation-components';

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
                    <p className = "text-justify font-italic">{item.description}</p>
                </FadeTransform>
                </div>
            </div>
        </div>
    );
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
                <div key = {item.id}>

                        <RenderDishDetail item = {item} />
                </div>
            );
        });

        const item = props.item.map(item => item)[0];
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
            </div>
        );
    }
};

export default DishDetail; 