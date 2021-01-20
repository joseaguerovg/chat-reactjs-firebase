import { types } from "../types/types";

const initialState = {
    loading: false,
    formErrorMessage: null,
    dropdopwnAuthIsVisible: false,
    usersModalIsVisible: false,
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
        case types.UI_OPEN_DROPDOWN_AUTH:
            return {
                ...state,
                dropdopwnAuthIsVisible: true
            }
        case types.UI_CLOSE_DROPDOWN_AUTH:
            return {
                ...state,
                dropdopwnAuthIsVisible: false
            }
        case types.UI_OPEN_USERS_MODAL:
            return {
                ...state,
                usersModalIsVisible: true
            }
        case types.UI_CLOSE_USERS_MODAL:
            return {
                ...state,
                usersModalIsVisible: false
            }
        default:
            return state;
    }
}