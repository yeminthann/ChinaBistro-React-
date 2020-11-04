import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Card, CardGroup, CardHeader, CardImg, CardTitle } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { FadeTransform } from 'react-animation-components';

function RenderCard({isLoading, item, errMsg}) {
    if(isLoading) {
        return (
            <Loading />
        );
    }
    else if (errMsg) {
        return (
            <h4>{errMsg}</h4>
        );
    }
    else {
        return (
            
            <FadeTransform
            in transformProps = {{exitTransform: 'scale(0.5) TranslateY(-100%)'}}
            >
            <Link to = {`/menu/${item.category}`} className = "card-link">
                <CardGroup className = "m-2">
                <Card>
                    <CardImg src = {item.image} alt = {item.category} width = "100%" />
                    <CardTitle className = "text-center text-uppercase card-header">
                        {item.category}
                    </CardTitle>
                </Card>
                </CardGroup>
            </Link>
            </FadeTransform>
        );
    }
}

function Menu (props) {

        return (
            <div className = "container">
                <Breadcrumb className = "font-weight-bold sticky-top">
                    <BreadcrumbItem>
                        <Link to = "/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        Menu
                    </BreadcrumbItem>
                </Breadcrumb>
                <div className = "row">
                    <h2 className = "col-12 text-center fon-weight-bold p-3">MENU CATEGORIES <hr className = "bg-info" /></h2>
                </div>
                <div className = "row">
                    <div className = "col-12 col-md-4 mb-2">
                        <RenderCard 
                        item = {props.lunch}
                        isLoading = {props.isLoading}
                        errMsg = {props.errMsg}
                        />
                    </div>
                <div className = "col-12 col-md-4 mb-2">
                    <RenderCard 
                        item = {props.soup}
                        isLoading = {props.isLoading}
                        errMsg = {props.errMsg}
                    />
                </div>
                <div className = "col-12 col-md-4 mb-2">
                    <RenderCard 
                        item = {props.appetizer}
                        isLoading = {props.isLoading}
                        errMsg = {props.errMsg}
                    />
                </div>
                <div className = "col-12 col-md-4 mb-2">
                    <RenderCard 
                        item = {props.chicken}
                        isLoading = {props.isLoading}
                        errMsg = {props.errMsg}
                    />
                </div>
            </div>
            </div>
        );
    }

export default Menu;