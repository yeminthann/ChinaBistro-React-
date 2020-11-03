import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className = "footer mt-5 p-5">
            <div className = "container">
                <div className = "row">
                    <div className = "col-12 col-sm-6 col-md-4 mb-2">
                        <div className = "text-center">
                            <h3>Hours:</h3>
                            <p>Sun-Thurs: 11:15am- 10:00pm <br/>
                                Fri: 11:15am- 2:30pm<br/>
                                Saturday: <span className = "text-danger">Closed</span>
                            </p>
                        </div>
                        <hr className = "bg-info d-sm-none"/>
                    </div>
                    <div className = "col-12 col-sm-6 col-md-4 mb-3">
                        <div className =  "text-center">
                            <h3>Address:</h3>
                            <p>
                                7105 Resisterstown Road <br/>
                                Baltimore, MD 21215
                            </p>
                            <small className = "text-info">
                                *Delivery area within 3-4 miles, with minimum order of $20 plus $3 charge for all deliveries
                            </small>
                        </div>
                    <hr className = "bg-info d-sm-none" />
                    </div>
                    <div className = "col-12 col-sm-12 col-md-4 mb-2">
                        <div className = "text-center">
                            <i>
                                "The best Chinese resturant I've been to! And that's saying a lot, since I've been to many!"
                            </i> <br/>
                            <i>
                                "Amazing food! Great Service! Couldn't ask for more! I'll be back again and again!"
                            </i>
                        </div>
                        <hr className = "bg-info d-sm-none"/>
                    </div>
                    <div className = "col-12">
                        <div className = "text-center">
                        &copy; Copyright David Chu's China Bistro | Created by <a href = "https://m.facebook.com/yemin.than.3705" target = "_blank" className = "font-weight-bold">Ye Min Than</a> with <a href = "http://reactjs.org/" className = "font-weight-light" target = "_blank">
                        React
                        </a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Footer;