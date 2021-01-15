import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import { ChatPage } from '../pages/ChatPage';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {

    const isLoggedIn = false;

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        isAuthenticated={ isLoggedIn }
                        path="/auth"
                        component={ AuthRouter }
                    />

                    <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/"
                        component={ ChatPage }
                    />

                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )

}