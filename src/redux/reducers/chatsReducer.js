import { types } from "../types/types";

const initialState = {
    chats: [],
    active: null
}

export const chatsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.GET_CHATS_START:
            return {
                ...state,
                chats: payload
            }
        case types.CHAT_CREATE:
            return {
                ...state,
                chats: [...state.chats, payload]
            }
        case types.CHAT_ACTIVE:
            return {
                ...state,
                active: payload
            }
        default:
            return state;
    }
}
