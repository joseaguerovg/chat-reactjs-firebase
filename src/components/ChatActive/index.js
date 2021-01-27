import React from 'react'
import { ChatActiveHead } from '../ChatActiveHead'

export const ChatActive = () => {
    return (
        <div className="messages__main">

            <ChatActiveHead />

            <div className="messages__body">
                Body
            </div>

            <div className="messages__send">
                Send message
            </div>
            
        </div>
    )
}
