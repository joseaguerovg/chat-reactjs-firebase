import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AuthRouter } from './AuthRouter';
import { ChatPage } from '../pages/ChatPage';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { firebase } from '../firebase/firebase.config';
import { Loading } from '../components/Loading';
import { loginAction } from '../redux/actions/auth.actions';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [checkingLogged, setCheckingLogged] = useState(true);

    const { loading } = useSelector(state => state.ui);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if(user?.uid){
                dispatch(loginAction(user.uid, user.displayName));
                setIsLoggedIn(true);
            }else{
                setIsLoggedIn(false);
            }
            setCheckingLogged(false);
        })
    }, [dispatch, setIsLoggedIn, setCheckingLogged]);

    return (
        <>
            {
                (loading || checkingLogged) && 
                    <Loading />
            } 
            
            <Router>
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
            </Router>
        </>
    )

}