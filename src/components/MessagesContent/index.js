import React from 'react'
import { useSelector } from 'react-redux'
import { ChatActive } from '../ChatActive';
import { ChatNullActive } from '../ChatNullActive';

export const MessagesContent = () => {

    const { chats } = useSelector(state => state);
    const active = chats.active;

    return (
        <main>
            {
                (active === null)
                    ? <ChatNullActive />
                    : <ChatActive />
            }
            
        </main>
    )
}
