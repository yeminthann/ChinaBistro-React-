import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, Breadcrumb, BreadcrumbItem, CardTitle, CardBody,CardGroup } from 'reactstrap'
import { FadeTransform } from 'react-animation-components';
import { Loading } from './LoadingComponent';
function RenderSpecificMenu({item}) {
        return(
            <Link to = {`/menu/${item.category}/${item.label}`} className = "card-link">
            <CardGroup className = "m-2">
                <Card>
                    <CardImg top src = {item.image} alt = {item.name} width = "100%" />
                    <CardBody>
                    <CardTitle className = "text-center soup-name p-1">
                        {item.name}
                    </CardTitle>
                    </CardBody>
                </Card>
            </CardGroup>
            </Link>
        );
}

const SpecificMenu = (props) => {
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
    else{
        const menu = props.items.map(item => {
            return (
                <div className = "col-12 col-md-5 m-1 mr-2" key = {item.id}>
                    <FadeTransform
                        in transformProps = {{exitTransform: 'scale(1) TranslateY(-100%)'}}
                    >
                    <div className = "mr-5 ml-5 mb-4 m-md-3">
                        <RenderSpecificMenu 
                            item = {item}
                        />
                    </div>
                    </FadeTransform>
                </div>
            );
        });
        var breadcrumbName = props.items.map(item => item.category)[0];
        return (
            <div className = "container">
                <Breadcrumb className = "font-weight-bold sticky-top">
                    <BreadcrumbItem>
                        <Link to = "/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Link to = "/menu">Menu</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active className = "text-capitalize">
                        {breadcrumbName}
                    </BreadcrumbItem>
                </Breadcrumb>
                <div className = "row">
                    <div className = "col-12 text-uppercase text-center">
                        <h3>{breadcrumbName} MENU</h3> <hr className = "bg-warning"/>
                    </div>
                </div>
                <div className = "row">
                        {menu}
                </div>
            </div>
        );
    }
}

export default SpecificMenu;