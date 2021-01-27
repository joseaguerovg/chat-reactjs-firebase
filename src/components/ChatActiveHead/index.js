import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { db } from '../../firebase/firebase.config'

export const ChatActiveHead = () => {

    const { chatId, userId } = useSelector(state => state.chats.active);
    const [name, setName] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {

        const unsubscribe = db.collection('users')
            .doc(userId)
            .onSnapshot(snap => {
                const data = snap.data();
                const dateLastConnect = new Date(data.last_connect.seconds)
                console.log(data);
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

            <div>
                <FontAwesomeIcon icon={faEllipsisV} size="lg" className="messages__head-icon" />
            </div>
        </div>
    )
}
