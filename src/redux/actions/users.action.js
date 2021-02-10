import { types } from '../types/types'

export const getUsersSuccess = (users) => ({
    type: types.GET_USERS_SUCCESS,
    payload: users
})