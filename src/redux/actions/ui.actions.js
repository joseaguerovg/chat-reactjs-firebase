import { types } from "../types/types";

export const startLoadingAction = () => ({
    type: types.UI_START_LOADING
})

export const finishLoadingAction = () => ({
    type: types.UI_FINISH_LOADING
})

export const setFormError = (message) => ({
    type: types.UI_SET_FORM_ERROR,
    payload: message
})

export const removeFormError = () => ({
    type: types.UI_REMOVE_FORM_ERROR
})