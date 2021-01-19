import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../redux/actions/auth.actions';

export const ChatPage = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(startLogout());
    }

    return (
        <div>
            ChatPage
            <button onClick={handleClick}>Logout</button>
        </div>
    )
}
