import React from 'react'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import { useDispatch, useSelector } from 'react-redux'
import { closeUsersModal } from '../../redux/actions/ui.actions'
import { ChatModalItem } from '../ChatModalItem'

import loader from '../../assets/loader.svg'

export const NewChatModal = () => {

    const dispatch = useDispatch();
    const { ui, users:usersState } = useSelector(state => state);

    const { users } = usersState;
    const { loading } = ui;

    const handleCloseModalUsers = () => {
        dispatch(closeUsersModal());
    }

    const modalRef = useOutsideClick(handleCloseModalUsers);

    return (
        <div className="modal__bg">
            <div ref={modalRef} className="modal__content">
                <div className="modal__head">
                    <h1>All Users</h1>
                </div>
                <div className="modal__body">

                    {

                        (!loading)
                            ? users.map(user => <ChatModalItem key={user.id} user={user} />)
                            : <img className="modal__loader" src={loader} alt='Loading...' />

                    }
                </div>
            </div>
        </div>
    )
}
