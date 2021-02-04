import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { startSendMessage } from '../../redux/actions/chats.actions';
import { useForm } from '../../hooks/useForm';

export const ChatActiveSendMessage = () => {

    const dispatch = useDispatch();
    const formRef = useRef();
    const [values, handleInputChange, reset] = useForm({
        message: ''
    });

    const { message } = values;

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(startSendMessage(message));
        reset();
    }

    const handleEnterPress = (e) => {
        if(e.keyCode === 13){
            e.preventDefault();
            handleSubmit(e);
            reset();
        }
    }

    return (
        <form ref={formRef} onSubmit={handleSubmit}>
            <div className="messages__send">
                <textarea name="message" rows="4" className="messages__send-content" placeholder="Write a message" onKeyDown={handleEnterPress} value={message} onChange={handleInputChange}>

                </textarea>
                <button type="submit">
                    <FontAwesomeIcon icon={faPaperPlane} size="3x" />
                </button>
            </div>
        </form>
    )
}
