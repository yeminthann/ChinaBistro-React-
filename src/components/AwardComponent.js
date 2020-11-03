import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Award extends Component {
    render() {
        return (
            <div className = "container">
                <div className = "row">
                    <div className = "col-12">
                        <div className = "text-center text-success m-3">
                            <h1 heading className = "text-info">Awards</h1>
                            <h3 body className = "font-weight-normal p-3 mb-5">
                                <spa className = "fa fa-trophy fa-lg"></spa>David Chu's China Bistro is a recepient of multiple awards for its great food and service.<span className = "fa fa-trophy fa-lg"></span> <br />
                                <i className = "font-weight-light">Details are coming soon...</i>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Award;