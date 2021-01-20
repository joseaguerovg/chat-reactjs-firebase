import React from 'react'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ChatModalItem = ({user}) => {

    const { name, loggedIn } = user;

    const firsLetter = name.charAt(0) || undefined;

    return (
        <div className="modal__user-item">
            <div className="modal__avatar">{firsLetter}</div>
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
