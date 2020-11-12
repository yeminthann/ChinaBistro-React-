import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Menus } from './menu';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Comments } from './comments';
import { initialFeedback } from './forms';
import { createForms } from 'react-redux-form';

//create store
export const configureStore = () => {
    const store = createStore(
        combineReducers({
            menus: Menus,
            comments: Comments,
            ...createForms ({
                feedback: initialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}

/* to App.js ==> */