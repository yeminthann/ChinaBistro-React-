import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Footer from './FooterComponent';
import SpecificMenu from './SpecificMenu';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchMenu, addComment } from '../redux/ActionCreaters';
import DishDetail from './DishDetail';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Award from './AwardComponent';
import SpecialMenu from './SpecialMenu';
import ScrollToTop from './ScrollToTop';
import { actions } from 'react-redux-form';
import MapComponent from './MapComponent';

const mapStateToProps = state => {
    return {
        menus: state.menus,
        comments: state.comments
    }
}

const mapDispatchToProps = dispatch => ({
    fetchMenu: () => {dispatch(fetchMenu())},
    resetForm: () => {dispatch(actions.reset('reset'))},
    addComment: (label, rating, comment, author) => {
        dispatch(addComment(label, rating, comment, author))
    }
});

class Main extends Component {
    
    componentDidMount() {
        this.props.fetchMenu();
        this.props.addComment();
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

                 comments = {this.props.comments.filter(comment => comment.label === (match.params.label) )}

                 addComment = {this.props.addComment}

                 isLoading = {this.props.menus.isLoading}
                 errMsg = {this.props.menus.errMsg}
                />
            );
        };

        return (
            <>
            <Header/>
                <ScrollToTop />
                <Switch>
                    <Route path = "/menu/:specific_menu/:label" component = {DishDetailPage} />
                    <Route  path = "/home" component = {Home} />
                    <Route exact path = "/menu" component = {MenuPage} />
                    <Route path = "/specials" component = {SpecialMenuPage} />
                    <Route path = "/maps" component ={MapComponent} />
                    <Route exact path = "/menu/:specific_menu" component = {SpecificMenuPage} />
                    <Route path = "/contact" component = {Contact} />
                    <Route path = "/about" component = {About} />
                    <Route path = "/awards" component = {Award} />
                    <Redirect to = "/home" />
                </Switch>
                <Footer />
            </>
        );
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));