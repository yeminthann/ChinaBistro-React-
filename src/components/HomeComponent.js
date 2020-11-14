import React, { Component } from 'react';
import { Card, Jumbotron, CardHeader, CardImg, UncontrolledCarousel } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FadeTransform } from 'react-animation-components';
class Home extends Component {

    render() {
        const items = [
            {
                src: '/assets/images/carousel_1.jpg',
                altText: 'slide 1',
                caption: '',
                header: 'Our Bistro',
                key: '1'
            },
            {
                src: '/assets/images/carousel_2.jpg',
                altText: 'slide 2',
                caption: '',
                header: 'Beauty Inside',
                key: '2'
            },
            {
                src: '/assets/images/carousel_3.jpg',
                altText: 'slide 3',
                caption: '',
                header: 'Chill',
                key: '3'
            },
            {
                src: '/assets/images/carousel_4.jpg',
                altText: 'slide 4',
                caption: '',
                header: 'Joy',
                key: '4'
            }
        ];

        const Carousel = () => {
            return <UncontrolledCarousel items = {items} />
        }
        return (
            <div style = {{background: 'rgb(172, 164, 164)'}}>
            <div className = "container pb-5">

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
                                <div className = "jum-carousel">
                                    <Carousel/>
                                </div>
                            </div>
                        </div>
                        </div>
                </Jumbotron>
                <div className = "row">
                    <div className = "col-12 col-sm-6 col-md-4 mb-5">
                        <FadeTransform
                            in transformProps = {{exitTransform: 'scale(0.5) TranslateY(-100%)'}}
                        >
                        <div className = "mr-sm-2 ml-sm-2 mr-5 ml-5">
                        <Link to = "/menu" className = "card-link">
                            <Card >
                                <CardImg src = "/assets/images/menu-tile.jpg" alt = "menu-tile" width = "100%"/>
                                <CardHeader className = "text-center card-header">
                                        Menu
                                </CardHeader>
                            </Card>
                        </Link>
                        </div>
                        </FadeTransform>      
                    </div>
                    <div className = "col-12 col-sm-6 col-md-4 mb-5">
                    <FadeTransform
                            in transformProps = {{exitTransform: 'scale(0.5) TranslateY(-100%)'}}
                    >
                    <div className = 'mr-sm-2 ml-sm-2 mr-5 ml-5'>
                    <Link to = "/specials" className = "card-link">
                            <Card>
                                <CardImg src = "/assets/images/specials-tile.jpg" alt = "menu-tile" width = "100%"/>
                                <CardHeader className = "text-center card-header">
                                        Specials
                                </CardHeader>
                            </Card>
                    </Link>
                    </div>
                    </FadeTransform>
                    </div>
                    <div className = "col-12 col-sm-12 col-md-4 mb-5">
                    <FadeTransform
                            in transformProps = {{exitTransform: 'scale(0.5) TranslateY(-100%)'}}
                    >
                    <div className = "mr-sm-2 ml-sm-2 mr-5 ml-5">
                    <Link to = "/menu" className = "card-link">
                            <Card>
                                <CardImg src = "/assets/images/menu-tile.jpg" alt = "menu-tile" width = "100%"/>
                                <CardHeader className = "text-center card-header">
                                        Menu
                                </CardHeader>
                            </Card>
                    </Link>
                    </div>
                    </FadeTransform>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Home;