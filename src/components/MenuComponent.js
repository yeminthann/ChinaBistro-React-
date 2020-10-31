import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
class Menu extends Component {
    render() {
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
                <h3>Menu Page</h3>
            </div>
        );
    }
}

export default Menu;