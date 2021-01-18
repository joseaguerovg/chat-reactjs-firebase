import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AuthRouter } from './AuthRouter';
import { ChatPage } from '../pages/ChatPage';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { Loading } from '../components/Loading';

export const AppRouter = () => {

    const isLoggedIn = false;

    const uiState = useSelector(state => state.ui);

    return (
        <>
            {
                (uiState.loading) && 
                    <Loading />
            } 
            
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
        </>
    )

}