import { db } from '../../firebase/firebase.config'
import { types } from '../types/types'
import { finishLoadingAction, startLoadingAction } from './ui.actions'

export const startGetUsers = () => {
    return (dispatch, getState) => {

        const uid = getState().auth.uid;

        dispatch(getUsersStart())
        dispatch(startLoadingAction())
        db.collection('users')
            .orderBy('loggedIn', 'desc')
            .onSnapshot(snaps => {              
                const users = [];

                snaps.forEach(snap => {
                    if(snap.id !== uid){
                        users.push({
                            id: snap.id,
                            name: snap.data().name,
                            loggedIn: snap.data().loggedIn
                        })
                    }
                })

                dispatch(getUsersSuccess(users));
                dispatch(finishLoadingAction());

            });
    }
}

export const getUsersStart = () => ({
    type: types.GET_USERS_START
})

export const getUsersSuccess = (users) => ({
    type: types.GET_USERS_SUCCESS,
    payload: users
})