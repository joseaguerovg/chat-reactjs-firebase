import React from 'react'

export const ChatListItem = ({name, last_message}) => {

    const firstLetter = name.charAt(0) || undefined;

    return (
        <div className="chat__list-item">
            <div className="chat__list-item-avatar">
                {firstLetter.toUpperCase()}
            </div>

            <div className="chat__list-item-info">
                <span>{name}</span>
                <div className="chat__last-message">{last_message}</div>
            </div>
        </div>
    )
}
