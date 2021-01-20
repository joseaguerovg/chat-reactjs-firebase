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

export const openDropdownAuth = () => ({
    type: types.UI_OPEN_DROPDOWN_AUTH
})

export const closeDropdownAuth = () => ({
    type: types.UI_CLOSE_DROPDOWN_AUTH
})

export const openUsersModal = () => ({
    type: types.UI_OPEN_USERS_MODAL
})

export const closeUsersModal = () => ({
    type: types.UI_CLOSE_USERS_MODAL
})