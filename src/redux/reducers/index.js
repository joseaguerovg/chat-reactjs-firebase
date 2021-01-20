import { authReducer } from './authReducer';
import { uiReducer } from './uiReducer';
import { usersReducer } from './usersReducer';

export const rootReducers = {
    auth: authReducer,
    ui: uiReducer,
    users: usersReducer
}

