import React from 'react'
import { AppRouter } from './routers/AppRoutes';
import { Provider } from 'react-redux';

import { store } from './redux/store/store';

export const ChatApp = () => {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
}
