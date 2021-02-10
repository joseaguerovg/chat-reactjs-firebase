import Swal from 'sweetalert2';

import { firebase, db } from '../../firebase/firebase.config';
import { types } from '../types/types';
import { resetChatActive, resetChats } from './chats.actions';
import { finishLoadingAction, startLoadingAction } from "./ui.actions"

export const startLogin = (email, password) => {
    return (dispatch) => {
        dispatch(startLoadingAction());
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({user}) => {
                
                db.collection('users').doc(user.uid).update({
                    name: user.displayName,
                    loggedIn: true,
                });
                
                dispatch(loginAction(user.uid, user.displayName));
                dispatch(finishLoadingAction());
            })
            .catch(e =>{
                dispatch(finishLoadingAction());
                Swal.fire('Error', e.message, 'error');
            })
    }
}

export const startRegister = (email, password, name) => {
    return (dispatch) => {
        dispatch(startLoadingAction());

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({user}) => {
                await user.updateProfile({
                    displayName: name
                })

                await createUserDoc(user.uid, name);

                dispatch(loginAction(user.uid, name));
                dispatch(finishLoadingAction());
            })
            .catch(e => {
                dispatch(finishLoadingAction());
                Swal.fire('Error', e.message, 'error');
            })
    }
}

export const startLogout = () => {
    return (dispatch, getState) => {
        const { uid } = getState().auth;

        firebase.auth().signOut()
            .then(() => {
                db.collection('users').doc(uid).update({
                    loggedIn: false, 
                    last_connect: firebase.firestore.FieldValue.serverTimestamp()
                });
                dispatch(logoutAction());
                dispatch(resetChatActive());
                dispatch(resetChats());
            })
        
    }
}

export const createUserDoc = (uid, name) => {
    return db.collection('users').doc(uid).set({
        name,
        avatar: '',
        loggedIn: true,
        last_connect: null,
        chats: []
    });
}

export const loginAction = (uid, name) => ({
    type: types.AUTH_LOGIN,
    payload: {
        uid, 
        name
    }
})

export const logoutAction = () => ({
    type: types.AUTH_LOGOUT
})