import React from 'react'
import { useSelector } from 'react-redux';
import { MessagesContent } from '../../components/MessagesContent';
import { NewChatModal } from '../../components/NewChatModal';
import { Sidebar } from '../../components/Sidebar';

export const ChatPage = () => {

    const { ui } = useSelector(state => state);

    return (
        <div className="wrapper">
            <Sidebar />
            <MessagesContent />

            {
                (ui.usersModalIsVisible)
                    &&
                        <NewChatModal />
            }
        </div>
    )
}
