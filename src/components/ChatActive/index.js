import React from 'react'
import { ChatActiveHead } from '../ChatActiveHead'
import { ChatActiveSendMessage } from '../ChatActiveSendMessage'

export const ChatActive = () => {
    return (
        <div className="messages__main">

            <ChatActiveHead />

            <div className="messages__body">
                Body
            </div>

            <ChatActiveSendMessage />
            
        </div>
    )
}
