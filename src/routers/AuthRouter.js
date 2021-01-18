import React from 'react';
import {
    Redirect,
    Route,
    Switch
} from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';

import logo from '../assets/logo.png';

export const AuthRouter = () => {
    return (
        <div className="auth__content">
            <div className="auth__center-box">
                <img src={logo} className="auth__logo" alt={'Chat ReactJS'} />
                <Switch>
                    <Route path="/auth/login" component={ LoginPage } />
                    <Route path="/auth/register" component={ RegisterPage } />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </div>
    )
}
