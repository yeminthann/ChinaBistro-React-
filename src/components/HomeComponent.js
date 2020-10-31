import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardImg, CardImgOverlay, CardLink, CardText, CardTitle, Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';
class Home extends Component {
    render() {
        return (
            <div className = "container">
                {/* Jumbotron */}
                <Jumbotron>
                    <div className = "row">
                        <div className = "col-12">
                            <h1 className = "jum-header">
                                DAVID CHU'S CHINA BISTRO
                            </h1>
                            
                            <p>
                                It may be hard to tell, but this website does much more than just help you choose a delicious dish from this crazy little restaurant. This website of this restaurant has served over 100,000 students all over the world (and counting), teaching them the skills of how to develop a website from scratch.
                            </p>
                            <div className = "text-center">
                                <img src = "assets/imgs/jumbotron.jpg" width = "80%" height = "60%" className = "jum-img"/>
                            </div>
                        </div>
                        </div>
                </Jumbotron>
                <div className = "row">
                    <div className = "col-12 col-sm-6 col-md-4 mb-2">
                        <Link to = "/menu" className = "home-card">
                            <Card>
                                <CardImg src = "assets/imgs/menu-tile.jpg" alt = "menu-tile" width = "100%"/>
                                <CardHeader className = "text-center home-tile">
                                        Menu
                                </CardHeader>
                            </Card>
                        </Link>
                    </div>
                    <div className = "col-12 col-sm-6 col-md-4 mb-2">
                    <Link to = "/menu" className = "home-card">
                            <Card>
                                <CardImg src = "assets/imgs/specials-tile.jpg" alt = "menu-tile" width = "100%"/>
                                <CardHeader className = "text-center home-tile">
                                        Specials
                                </CardHeader>
                            </Card>
                        </Link>
                    </div>
                    <div className = "col-12 col-sm-12 col-md-4 mb-1">
                    <Link to = "/menu" className = "home-card">
                            <Card>
                                <CardImg src = "assets/imgs/menu-tile.jpg" alt = "menu-tile" width = "100%"/>
                                <CardHeader className = "text-center home-tile">
                                        Menu
                                </CardHeader>
                            </Card>
                        </Link>
                    </div>
                </div>
            </div>

        );
    }
}

export default Home;