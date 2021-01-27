import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { db } from '../../firebase/firebase.config'
import { loadChats } from '../../redux/actions/chats.actions';
import { ChatListItem } from '../ChatListItem';

export const ChatList = () => {

    const { auth, chats: chatsState } = useSelector(state => state);
    const dispatch = useDispatch();  

    const uid = auth.uid;
    const chats = chatsState.chats;

    useEffect(() => {
        const unsubscribe = db.collection(`users`)
            .doc(uid)
            .onSnapshot(snaps => {              
                const chats = snaps.data().chats;

                chats.sort((a, b) => (a.date > b.date) ? -1 : 1);
                dispatch(loadChats(chats));
            });
        
        return () => unsubscribe()
    }, [dispatch, uid])

    return (
        <div className="chat__list">
            {
                chats.map(chat => (
                    <ChatListItem key={chat.chatId} {...chat} />        
                ))
            }
        </div>
    )
}
