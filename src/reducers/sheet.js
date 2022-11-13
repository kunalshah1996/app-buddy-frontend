import * as actionType from '../constants/actionTypes';

const sheetReducer = (state = { sheetId: '' }, action) => {
    switch (action.type) {
        case actionType.CREATESHEET:
            return { ...state, sheetId: action.payload };

        default:
            return state;
    }
}

export default sheetReducer;