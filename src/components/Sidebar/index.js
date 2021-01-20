import React from 'react'
import { AuthUserData } from '../AuthUserData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { openUsersModal } from '../../redux/actions/ui.actions'
import { startGetUsers } from '../../redux/actions/users.action'

export const Sidebar = () => {

    const dispatch = useDispatch();

    const handleClickOpenAllUsers = () => {
        dispatch(openUsersModal());
        dispatch(startGetUsers());
    }

    return (
        <aside className="sidebar__wrapper">
            <AuthUserData />

            <div className="sidebar__open-new-chat" onClick={handleClickOpenAllUsers}>
                <FontAwesomeIcon icon={faPlus} />
                <span>New chat</span>
            </div>

        </aside>
    )
}
