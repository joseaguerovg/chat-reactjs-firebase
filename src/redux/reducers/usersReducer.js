import { types } from '../types/types';

const initialState = {
    users: [],
    error: null
};

export const usersReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.GET_USERS_SUCCESS:
            return {
                ...state,
                users: payload
            }
        case types.GET_USERS_FAILURE:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}
