import React from 'react';
import { Link } from 'react-router-dom';
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
                    <p className = "text-justify text-center text-md-left font-italic">{item.description}</p>
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
            <div className = "container">
                <div className = "d-flex justify-content-between mr-5 ml-5 mt-4">
                    <Link  to = {`/menu/${item.category}/${prevItem}`} className = "prev-btn p-2 pr-4 pl-4 text-decoration-none">
                        Prev
                    </Link>
                    <Link  to = {`/menu/${item.category}/${nextItem}`} className = "next-btn p-2 pr-4 pl-4 text-decoration-none">
                        Next
                    </Link>
                </div>
            </div>
            </div>
        );
    }
};

export default DishDetail; 