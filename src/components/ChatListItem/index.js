import React from 'react'
import { useDispatch } from 'react-redux';
import { startGetChatMessages } from '../../redux/actions/chats.actions';

export const ChatListItem = ({name, last_message, chatId, userId}) => {

    const dispatch = useDispatch();

    const firstLetter = name.charAt(0) || undefined;

    const handleClickActiveChat = (chatId, userId) => {
        dispatch(startGetChatMessages(chatId, userId));
    }

    return (
        <div className="chat__list-item" onClick={() => handleClickActiveChat(chatId, userId)}>
            <div className="chat__list-item-avatar">
                <span>{firstLetter.toUpperCase()}</span>
            </div>

            <div className="chat__list-item-info">
                <span>{name}</span>
                <div className="chat__last-message">{last_message}</div>
            </div>
        </div>
    )
}
