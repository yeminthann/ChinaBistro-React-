import React, { Component } from 'react';
import { Card, Jumbotron, CardHeader, CardImg } from 'reactstrap';
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
                                <img src = "/assets/images/jumbotron.jpg" width = "80%" height = "60%" className = "jum-img" alt = "jumbotron.jpg"/>
                            </div>
                        </div>
                        </div>
                </Jumbotron>
                <div className = "row">
                    <div className = "col-12 col-sm-6 col-md-4 mb-2">
                        <Link to = "/menu" className = "card-link">
                            <Card>
                                <CardImg src = "/assets/images/menu-tile.jpg" alt = "menu-tile" width = "100%"/>
                                <CardHeader className = "text-center card-header">
                                        Menu
                                </CardHeader>
                            </Card>
                        </Link>
                    </div>
                    <div className = "col-12 col-sm-6 col-md-4 mb-2">
                    <Link to = "/menu" className = "card-link">
                            <Card>
                                <CardImg src = "/assets/images/specials-tile.jpg" alt = "menu-tile" width = "100%"/>
                                <CardHeader className = "text-center card-header">
                                        Specials
                                </CardHeader>
                            </Card>
                        </Link>
                    </div>
                    <div className = "col-12 col-sm-12 col-md-4 mb-1">
                    <Link to = "/menu" className = "card-link">
                            <Card>
                                <CardImg src = "/assets/images/menu-tile.jpg" alt = "menu-tile" width = "100%"/>
                                <CardHeader className = "text-center card-header">
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