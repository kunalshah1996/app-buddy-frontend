import { GET_USER } from "../constants/actionTypes";

import * as api from '../api/index.js';

export const getUser = () => async (dispatch) => {
    try {
        const { data } = await api.getUser();
        dispatch({ type: GET_USER, payload: data });

    } catch (error) {
        console.log(error.message);
    }

}