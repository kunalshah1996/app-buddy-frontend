import * as actionType from '../constants/actionTypes';

const userReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case actionType.GET_USER:
            localStorage.setItem('profile', action.payload);
            return { ...state, user: action.payload };
        default:
            return state;
    }
}

export default userReducer;