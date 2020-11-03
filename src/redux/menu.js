import * as ActionTypes from './ActionTypes';

//lunch reducer function
export const Menus = (state = {
    isLoading : true,
    menus: [],
    errMsg: null
}, action) => {
    switch(action.type) {
        case ActionTypes.MENU_LOADING:
            return {
                ...state,
                isLoading: true,
                menus: [],
                errMsg: null
            }
        case ActionTypes.ADD_MENU:
            return {
                ...state,
                isLoading: false,
                menus: action.payload,
                errMsg: null
            }
        case ActionTypes.MENU_FAILED:
            return {
                ...state, 
                isLoading: false,
                menus: [],
                errMsg: action.payload
            }
        default:
            return state;
        }
};

// ====> to configureStore