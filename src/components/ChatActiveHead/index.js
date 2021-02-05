import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { db } from '../../firebase/firebase.config'
import { startDeleteChatList } from '../../redux/actions/chats.actions'

export const ChatActiveHead = () => {

    const dispatch = useDispatch();

    const { userId } = useSelector(state => state.chats.active);
    const [name, setName] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleDeleteChat = () => {
        dispatch(startDeleteChatList());
    }

    useEffect(() => {

        const unsubscribe = db.collection('users')
            .doc(userId)
            .onSnapshot(snap => {
                const data = snap.data();
                setName(data.name);
                setLoggedIn(data.loggedIn);
            })
        

        return () => unsubscribe();
    }, [userId])

    const firstLetter = name.charAt(0) || undefined;

    return (
        <div className="messages__head">
            <div className="messages__head-avatar">
                <span>{firstLetter}</span>
            </div>

            <div className="messages__head-info">
                <div>{name}</div>
                {
                    (loggedIn)
                        ? <div className="messages__head-info-status-on">Online</div>
                        : <div className="messages__head-info-status-off">Offline</div>
                }
                
            </div>

            <div className="messages__head-delete" onClick={handleDeleteChat}>
                Eliminar
            </div>
        </div>
    )
}
