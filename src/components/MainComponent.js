import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Footer from './FooterComponent';
import SpecificMenu from './SpecificMenu';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchMenu } from '../redux/ActionCreaters';
import DishDetail from './DishDetail';

const mapStateToProps = state => {
    return {
        menus: state.menus
    }
}

const mapDispatchToProps = dispatch => ({
    fetchMenu: () => {dispatch(fetchMenu())}
});

class Main extends Component {
    
    componentDidMount() {
        this.props.fetchMenu();
    }

    render() {

        const MenuPage = () => {

            return(
                <Menu 
                lunch = {this.props.menus.menus.filter(item => {
                    return (item.category === 'lunchs' && item.featured)
                })[0]}
                soup = {this.props.menus.menus.filter(item => {
                    return (item.category === 'soups' && item.featured)
                })[0]}
                isLoading = {this.props.menus.isLoading}
                errMsg = {this.props.menus.errMsg}
                />
            );
        }

        const SpecificMenuPage = ({match}) => {

            return (
                <SpecificMenu
                items = {this.props.menus.menus.filter(item => {
                   return (item.category === match.params.specific_menu && !item.featured)
                })}
                isLoading = {this.props.menus.isLoading}
                errMsg = {this.props.menus.errMsg}
                />
            );
        };

        const DishDetailPage = ({match}) => {
            return (
                <DishDetail 
                item = {this.props.menus.menus.filter(item => {
                    return ((item.category === match.params.specific_menu) && (item.label === match.params.label && !item.featured))
                 })}
                 isLoading = {this.props.menus.isLoading}
                 errMsg = {this.props.menus.errMsg}
                />
            );
        };

        return (
            <div>
                <Header />
                {/* for routes */}
                <Switch>
                    <Route  path = "/home" component = {Home} />
                    <Route exact path = "/menu" component = {MenuPage} />
                    <Route exact path = "/menu/:specific_menu" component = {SpecificMenuPage} />
                    <Route path = "/menu/:specific_menu/:label" component = {DishDetailPage} />
                    <Redirect to = "/home" />
                </Switch>
                <Footer />
            </div>
        );
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));