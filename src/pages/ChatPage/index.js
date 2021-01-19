import React from 'react'
import { MessagesContent } from '../../components/MessagesContent';
import { Sidebar } from '../../components/Sidebar';

export const ChatPage = () => {

    return (
        <div className="wrapper">
            <Sidebar />
            <MessagesContent />
        </div>
    )
}
