import { types } from "../types/types";

const initialState = {
    loading: false,
    formErrorMessage: null
}

export const uiReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.UI_START_LOADING:
            return {
                ...state,
                loading: true,
            }
        case types.UI_FINISH_LOADING:
            return {
                ...state,
                loading: false,
            }
        case types.UI_SET_FORM_ERROR:
            return {
                ...state,
                formErrorMessage: payload
            }
        case types.UI_REMOVE_FORM_ERROR:
            return {
                ...state,
                formErrorMessage: null
            }
        default:
            return state;
    }
}