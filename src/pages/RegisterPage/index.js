import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterPage = () => {
    return (
        <>
            <form>
                <div className="form__form-group">
                    <input type="text" className="auth__input" name="name" placeholder="Full Name" />
                </div>
                <div className="form__form-group">
                    <input type="email" className="auth__input mt-4" name="email" placeholder="Email" />
                </div>

                <div className="form__form-group mt-4">
                    <input type="password" className="auth__input" name="password" placeholder="Password" />
                </div>

                <button type="submit" class="button__primary button__fullwidth mt-4">Register</button>
            </form>
        
            <Link to="/auth/login" className="auth__bottom-link mt-2">Already register?</Link>
        </>
    )
}
