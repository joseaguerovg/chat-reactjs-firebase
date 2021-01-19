import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import validator from 'validator'
import { useForm } from '../../hooks/useForm'
import { startRegister } from '../../redux/actions/auth.actions'
import { removeFormError, setFormError } from '../../redux/actions/ui.actions'

export const RegisterPage = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    })

    const { name, email, password } = formValues;

    const isFormValid = () => {
        if(email.trim().length === 0 || password.trim().length === 0 || name.trim().length === 0){
            dispatch(setFormError('Email, password and full name is required'));
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
            dispatch(startRegister(email, password, name));
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form__form-group">
                    <input 
                        type="text" 
                        className="auth__input" 
                        name="name" 
                        placeholder="Full Name"
                        value={ name }
                        onChange={ handleInputChange } />
                </div>
                <div className="form__form-group">
                    <input 
                        type="email" 
                        className="auth__input mt-4" 
                        name="email" 
                        placeholder="Email"
                        value={ email }
                        onChange={ handleInputChange } />
                </div>

                <div className="form__form-group mt-4">
                    <input 
                        type="password" 
                        className="auth__input" 
                        name="password" 
                        placeholder="Password"
                        value={ password }
                        onChange={ handleInputChange } />
                </div>

                <button type="submit" className="button__primary button__fullwidth mt-4">Register</button>
            </form>
        
            <Link to="/auth/login" className="auth__bottom-link mt-2">Already register?</Link>
        </>
    )
}
