import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardGroup, CardImg, CardImgOverlay, CardTitle, Media } from 'reactstrap';
import { Loading } from './LoadingComponent';

function RenderDishDetail ({item}) {
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
            <Breadcrumb>
            <BreadcrumbItem>
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