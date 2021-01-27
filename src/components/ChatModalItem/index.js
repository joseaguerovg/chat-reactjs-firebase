import React from 'react'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { startCreateAChat } from '../../redux/actions/chats.actions';

export const ChatModalItem = ({user}) => {

    const dispatch = useDispatch();

    const { id, name, loggedIn } = user;

    const firsLetter = name.charAt(0) || undefined;

    const handleClickCreateAChat = (uidSelected, nameSelected) => {
        dispatch(startCreateAChat(uidSelected, nameSelected));
    }

    return (
        <div className="modal__user-item" onClick={ () => handleClickCreateAChat(id, name) }>
            <div className="modal__avatar">{firsLetter.toUpperCase()}</div>
            <div className="modal__info">
                <span className="modal__name">{ name }</span>
                
                {
                    (loggedIn)
                        ? <div className="modal__status-on">Online</div>
                        : <div className="modal__status-off">Offline</div>
                }
                
            </div>
            <div className="modal__add-icon">
                <FontAwesomeIcon icon={faPlus} />
            </div>
        </div>
    )
}
