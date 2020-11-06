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
import Contact from '../share/ContactComponent';
import About from './AboutComponent';
import Award from './AwardComponent';
import SpecialMenu from './SpecialMenu';
import ScrollToTop from './ScrollToTop';
import { actions } from 'react-redux-form';

const mapStateToProps = state => {
    return {
        menus: state.menus
    }
}

const mapDispatchToProps = dispatch => ({
    fetchMenu: () => {dispatch(fetchMenu())},
    resetForm: () => {dispatch(actions.reset('reset'))}
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
                appetizer = {this.props.menus.menus.filter(item => item.category === 'appetizers' && item.featured)[0]}

                chicken = {this.props.menus.menus.filter(item => item.category === 'chickens' && item.featured)[0]}

                beef = {this.props.menus.menus.filter(item => item.category === 'beefs' && item.featured)[0]}

                veal = {this.props.menus.menus.filter(item => item.category === 'veals' && item.featured)[0]}

                isLoading = {this.props.menus.isLoading}
                errMsg = {this.props.menus.errMsg}
                />
            );
        };

        const SpecialMenuPage = () => {
            return (
                <SpecialMenu
                    items = {this.props.menus.menus.filter(item => item.category === 'specials' && !item.featured)}
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

                 specificItems = {this.props.menus.menus.filter(item => item.category === match.params.specific_menu)}

                 isLoading = {this.props.menus.isLoading}
                 errMsg = {this.props.menus.errMsg}
                />
            );
        };

        return (
            <div>
                <Header/>
                <ScrollToTop />
                <Switch>
                    <Route path = "/menu/:specific_menu/:label" component = {DishDetailPage} />
                    <Route  path = "/home" component = {Home} style = {{background: 'white'}}/>
                    <Route exact path = "/menu" component = {MenuPage} />
                    <Route path = "/specials" component = {SpecialMenuPage} />
                    <Route exact path = "/menu/:specific_menu" component = {SpecificMenuPage} />
                    <Route path = "/contact" component = {Contact} />
                    <Route path = "/about" component = {About} />
                    <Route path = "/awards" component = {Award} />
                    <Redirect to = "/home" style = {{background: 'white'}}/>
                </Switch>
                <Footer />
            </div>
        );
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));