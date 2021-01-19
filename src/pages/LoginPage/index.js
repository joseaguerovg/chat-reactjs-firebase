import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator'

import { useForm } from '../../hooks/useForm';
import { startLogin } from '../../redux/actions/auth.actions';
import { removeFormError, setFormError } from '../../redux/actions/ui.actions';

export const LoginPage = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        email: '',
        password: ''
    })

    const { email, password } = formValues;

    const isFormValid = () => {
        if(email.trim().length === 0 || password.trim().length === 0){
            dispatch(setFormError('Email and password is required'));
            return false;
        }else if(!validator.isEmail(email)){
            dispatch(setFormError('Email is not valid'));
            return false;
        }else if(password.length < 5){
            dispatch(setFormError('Password should be at least 6 characters'));
            return false;
        }

        dispatch(removeFormError());
        return true;
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(isFormValid()){
            dispatch(startLogin(email, password));
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form__form-group">
                    <input 
                        type="email" 
                        className="auth__input" 
                        name="email" 
                        placeholder="Email"
                        value={email}
                        onChange={handleInputChange} />
                </div>

                <div className="form__form-group mt-4">
                    <input 
                        type="password" 
                        className="auth__input" 
                        name="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={handleInputChange} />
                </div>

                <button type="submit" className="button__primary button__fullwidth mt-4">Login</button>
            </form>

            <Link to="/auth/register" className="auth__bottom-link mt-2">Create new account</Link>
        </>
    )
}
