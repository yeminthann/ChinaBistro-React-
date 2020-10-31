import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

    render() {
        return (
            <div>
                <Header />
                {/* for routes */}
                <Switch>
                    <Route  path = "/home" component = {Home} />
                    <Route path = "/menu" component = {Menu} />
                    <Redirect to = "/home" />
                </Switch>
                <Footer />
            </div>
        );
    };
}

export default Main;