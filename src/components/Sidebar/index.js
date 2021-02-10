import React from 'react'
import { AuthUserData } from '../AuthUserData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { ChatList } from '../ChatList'

export const Sidebar = ({setModal}) => {

    const { active } = useSelector(state => state.chats)

    const handleClickOpenAllUsers = () => {
        setModal(true)
    }

    return (
        <aside 
            className={`sidebar__wrapper ${active !== null && "sidebar__active"}`} >
            <AuthUserData />

            <div className="sidebar__open-new-chat" onClick={handleClickOpenAllUsers}>
                <FontAwesomeIcon icon={faPlus} />
                <span>New chat</span>
            </div>


            <ChatList />
        </aside>
    )
}
