import React from 'react'
import { useSelector } from 'react-redux'

export const ChatActiveBodyMessage = ({content, userId}) => {
    const { uid } = useSelector(state => state.auth)
    const chatRight = (uid === userId) ? 'messages__right-message' : '';

    return (
        <div className={`messages__body-message ${chatRight}`}>
            <div className="messages__body-content">
                {content}
            </div>
        </div>
    )
}
