import React from 'react'
import { Link } from 'react-router-dom'

export const LoginPage = () => {
    return (
        <>
            <form>
                <div className="form__form-group">
                    <input type="email" className="auth__input" name="email" placeholder="Email" />
                </div>

                <div className="form__form-group mt-4">
                    <input type="password" className="auth__input" name="password" placeholder="Password" />
                </div>

                <button type="submit" class="button__primary button__fullwidth mt-4">Login</button>
            </form>

            <Link to="/auth/register" className="auth__bottom-link mt-2">Create new account</Link>
        </>
    )
}
