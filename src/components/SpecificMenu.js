import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, Breadcrumb, BreadcrumbItem, CardTitle, CardBody } from 'reactstrap'
import { Loading } from './LoadingComponent';
function RenderSpecificMenu({item}) {
        return(
            <Link to = {`/menu/${item.category}/${item.label}`} className = "card-link">
            <CardBody>
                <Card>
                    <CardImg top src = {item.image} alt = {item.name} width = "100%" />
                    <CardBody>
                    <CardTitle className = "text-center soup-name p-1">
                        {item.name}
                    </CardTitle>
                    </CardBody>
                </Card>
            </CardBody>
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
                    <RenderSpecificMenu 
                        item = {item}
                    />
                </div>
            );
        });
        var breadcrumbName = props.items.map(item => item.category)[0];
        return (
            <div className = "container">
            <div className = "row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to = "/menu">Menu</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active className = "text-capitalize">
                        {breadcrumbName}
                    </BreadcrumbItem>
                </Breadcrumb>

                <div className = "col-12 text-uppercase text-center">
                    <h3>{breadcrumbName}</h3> <hr/>
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