import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Menus } from './menu';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

//create store
export const configureStore = () => {
    const store = createStore(
        combineReducers({
            menus: Menus,
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}

/* to App.js ==> */