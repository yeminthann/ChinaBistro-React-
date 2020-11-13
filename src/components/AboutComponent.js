import React, { Component } from 'react';
import {Media} from 'reactstrap';

class About extends Component {
    render() {
        return (
            <div className = "text-dark h4 font-weight-bold">
                <div className = "container">
                    <div className = "row">
                        <div className = "col-12">
                                <Media heading className = "text-center text-justify h2 p-1">
                                    <span className = "page-header">
                                    About This Website
                                    </span>
                                </Media>
                                <Media body className = "p-3 font-weight-bold">
                                    <p>
                                    It may be hard to tell, but this website does much more than just help you choose a delicious dish from this cozy little restaurant. The website of this restaurant has served over 100,000 students all over the world (and counting), teaching them the skills of how to develop a website from scratch.
                                    </p>
                                    <p>
                                    The development of this website was part of the curriculum of 2 <a href = "https://coursera.org/">Coursera.org</a> courses: <a href = "https://coursera.org/">HTML, CSS, and Javascript for Web Developers</a> and <a href = "https://coursera.org/">Single Page Web Applications with AngularJS</a>.
                                    All courses have an option to be taken for free.
                                    </p>
                                    <p>
                                    As of November, 2016, both courses made it to the #1 Top Rated Course spot (among close to 1,800 available courses).
                                    </p>
                                </Media>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default About;