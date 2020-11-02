import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Footer from './FooterComponent';
import SpecificMenu from './SpecificMenu';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchMenu } from '../redux/ActionCreaters';

const mapStateToProps = state => {
    return {
        menus: state.menus
    }
}

const mapDispatchToProps = dispatch => ({
    fetchMenu: () => {dispatch(fetchMenu())}
});

class Main extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.fetchMenu();
    }

    render() {

        const MenuPage = () => {
            const lunch = this.props.menus.menus.filter(item => (item.category === 'lunchs' && item.featured))[0];
            const soup = this.props.menus.menus.filter(item => (item.category === 'soups' && item.featured))[0];
            return(
                <Menu lunch = {lunch} soup = {soup}/>
            );
        }

        const SpecificMenuPage = ({match}) => {
            const items = this.props.menus.menus.filter(item => item.category === (match.params.specific_menu) && !item.featured);
            return (
                <SpecificMenu
                    items = {items}
                />
            );
        }
        return (
            <div>
                <Header />
                {/* for routes */}
                <Switch>
                    <Route  path = "/home" component = {Home} />
                    <Route exact path = "/menu" component = {MenuPage} />
                    <Route path = "/menu/:specific_menu" component = {SpecificMenuPage} />
                    <Redirect to = "/home" />
                </Switch>
                <Footer />
            </div>
        );
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));