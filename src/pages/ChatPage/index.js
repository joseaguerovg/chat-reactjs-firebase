import React, { useState } from 'react'
import { MessagesContent } from '../../components/MessagesContent';
import { NewChatModal } from '../../components/NewChatModal';
import { Sidebar } from '../../components/Sidebar';

export const ChatPage = () => {

    const [modal, setModal] = useState(false);

    return (
        <div className="wrapper">
            <Sidebar setModal={setModal} />
            <MessagesContent />

            {
                (modal)
                    &&
                        <NewChatModal setModal={setModal} />
            }
        </div>
    )
}
