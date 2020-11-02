import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardGroup, CardHeader, CardImg, CardTitle } from 'reactstrap';
import { Loading } from './LoadingComponent';

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
        // console.log(item.image)
        return (
            <CardGroup>
            <Link to = {`/menu/${item.category}`} className = "card-link">
                <Card>
                    <CardImg src = {item.image} alt = {item.category} width = "100%" />
                    <CardHeader className = "text-center text-uppercase card-header">
                        {item.category}
                    </CardHeader>
                </Card>
            </Link>
            </CardGroup>
        );
    }
}

function Menu (props) {

        return (
            <div className = "container">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to = "/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        Menu
                    </BreadcrumbItem>
                </Breadcrumb>
                <div className = "row">
                    <div className = "col-12col-md-4 mb-2">
                        <RenderCard 
                        item = {props.lunch}
                        isLoading = {props.lunchLoading}
                        errMsg = {props.lunchErrMsg}
                        />
                    </div>
                <div className = "col-12 col-md-4 mb-2">
                        <RenderCard 
                            item = {props.soup}
                            isLoading = {props.soupLoading}
                            errMsg = {props.soupErrMsg}
                            />
                </div>
            </div>
            </div>
        );
    }

export default Menu;