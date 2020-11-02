import * as ActionTypes from './ActionTypes';

//lunch reducer function
export const Soups = (state = {
    isLoading : true,
    soups: [],
    errMsg: null
}, action) => {
    switch(action.type) {
        case ActionTypes.SOUP_LOADING:
            return {
                ...state,
                isLoading: true,
                soups: [],
                errMsg: null
            }
        case ActionTypes.ADD_SOUP:
            return {
                ...state,
                isLoading: false,
                soups: action.payload,
                errMsg: null
            }
        case ActionTypes.SOUP_FAILED:
            return {
                ...state, 
                isLoading: false,
                soups: [],
                errMsg: action.payload
            }
        default:
            return state;
        }
};

// ====> to configureStore