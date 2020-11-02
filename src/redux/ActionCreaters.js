import * as ActionTypes from './ActionTypes';
import { MENU } from '../share/menu';

export const fetchMenu = () => (dispatch) => {
    dispatch(menuLoading (true));

    setTimeout(() => {
        dispatch(addMenu(MENU));
    },2000)
}

export const menuLoading = () => ({
    type: ActionTypes.MENU_LOADING,
});

export const addMenu = (menus) => ({
    type: ActionTypes.ADD_MENU,
    payload: menus
})
export const menuFailed = (errMsg) => ({
    type: ActionTypes.MENU_FAILED,
    payload: errMsg
});

// ===> to reducers function(lunch.js)