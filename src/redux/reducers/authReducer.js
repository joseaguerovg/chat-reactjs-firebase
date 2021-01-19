import { types } from '../types/types';

export const authReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case types.AUTH_LOGIN:
            return {
                uid: payload.uid,
                name: payload.name
            }
        case types.AUTH_LOGOUT:
            return {}
        default:
            return state;
    }
}