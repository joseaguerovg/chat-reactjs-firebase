import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { ChatActiveBodyMessage } from '../ChatActiveBodyMessage'

export const ChatActiveBody = () => {

    const { messages } = useSelector(state => state.chats.active)

    const messageRef = useRef();

    useEffect(() => {
        messageRef.current.scrollIntoView({behavior: 'smooth'});
    }, [messages])

    return (
        <div className="messages__body">
            {
                messages.map(message => (
                    <ChatActiveBodyMessage key={`${message.content}-${message.userId}`} {...message} />
                ))
            }
            <div ref={messageRef}></div>
        </div>
    )
}
