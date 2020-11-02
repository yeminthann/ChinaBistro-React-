import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardHeader, Breadcrumb, BreadcrumbItem, Col, CardTitle, CardText, CardBody, CardGroup, CardDeck, CardImgOverlay} from 'reactstrap'
function RenderSpecificMenu({item}) {
    return(
        <>
        <CardBody>
            <Link className = "card-link">
        <Card key = {item.id}>
            <CardImg top src = {item.image} alt = {item.name} width = "100%" />
            <CardTitle className = "text-center soup-name p-2">
                {item.name}
            </CardTitle>
        </Card>
        </Link>
        </CardBody>
        </>
    );
}

const SpecificMenu = (props) => {
    const menu = props.items.map(item => {
        return (
            <div className = "col-12 col-md-6">
                <div key = {item.id}>
                <RenderSpecificMenu item = {item}/>
                </div>
            </div>
        );
    });
    
    return (
        <div className = "container">
        <div className = "row">
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link to = "/menu">Menu</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active></BreadcrumbItem>
            </Breadcrumb>

            <div className = "col-12">
                <h3></h3> <hr/>
            </div>
        </div>
        <div className = "row">
                {menu}
        </div>
        </div>
    );
}

export default SpecificMenu;