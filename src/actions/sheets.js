import { CREATESHEET, GETSHEETID } from "../constants/actionTypes";

import * as api from '../api/index.js';

export const createSheet = () => async (dispatch) => {
    try {
        const { data } = await api.createSheet();
        dispatch({ type: CREATESHEET, payload: data });

    }
    catch (error) {
        console.log(error.message);
    }
}

export const getSheetId = () => async (dispatch) => {
    try {
        const { data } = await api.getSheetId();

        dispatch({ type: GETSHEETID, payload: data });

    }
    catch (error) {
        console.log(error.message);
    }
}