import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { db } from '../../firebase/firebase.config'
import { ChatActiveBodyMessage } from '../ChatActiveBodyMessage'

export const ChatActiveBody = () => {

    const { chatId } = useSelector(state => state.chats.active)

    const [messages, setMessages] = useState([]);

    const messageRef = useRef();

    useEffect(() => {
        const unsubscribe = db.collection('chats')
            .doc(chatId)
            .onSnapshot(snap => {
                const { messages } = snap.data();
                setMessages(messages);
            });

        return () => unsubscribe();
    }, [chatId, setMessages])

    useEffect(() => {
        messageRef.current.scrollIntoView({block: 'end'});
    }, [messages])

    return (
        <div className="messages__body">
            {
                messages.map(message => (
                    <ChatActiveBodyMessage key={message.id} {...message} />
                ))
            }
            <div ref={messageRef}></div>
        </div>
    )
}
