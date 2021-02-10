import React, { useEffect, useState } from 'react'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import { useDispatch } from 'react-redux'
import { ChatModalItem } from '../ChatModalItem'

import loader from '../../assets/loader.svg'
import { getUsersSuccess } from '../../redux/actions/users.action'
import useUsers from '../../hooks/useUsers'

export const NewChatModal = ({setModal}) => {

    const dispatch = useDispatch();

    const users = useUsers();
    const [loading, setLoading] = useState(true);

    const handleCloseModalUsers = () => {
        setModal(false)
    }

    const modalRef = useOutsideClick(handleCloseModalUsers);

    useEffect(() => {
        if(users.length > 0 ){
            dispatch(getUsersSuccess(users));
            setLoading(false);
        }
    }, [dispatch, users])

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
