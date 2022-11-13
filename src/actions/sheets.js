import { CREATESHEET } from "../constants/actionTypes";

import * as api from '../api/index.js';

export const createSheet = () => async (dispatch) => {
    try {
        const { data } = await api.createSheet();
        console.log("data in actions", data);
        dispatch({ type: CREATESHEET, payload: data });

    }
    catch (error) {
        console.log(error.message);
    }
}