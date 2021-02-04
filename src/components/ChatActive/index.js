import React from 'react'
import { ChatActiveBody } from '../ChatActiveBody'
import { ChatActiveHead } from '../ChatActiveHead'
import { ChatActiveSendMessage } from '../ChatActiveSendMessage'

export const ChatActive = () => {
    return (
        <div className="messages__main">

            <ChatActiveHead />

            <ChatActiveBody />

            <ChatActiveSendMessage />
            
        </div>
    )
}
