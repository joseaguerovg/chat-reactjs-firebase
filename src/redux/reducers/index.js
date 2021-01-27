import { authReducer } from './authReducer';
import { chatsReducer } from './chatsReducer';
import { uiReducer } from './uiReducer';
import { usersReducer } from './usersReducer';

export const rootReducers = {
    auth: authReducer,
    ui: uiReducer,
    users: usersReducer,
    chats: chatsReducer
}

