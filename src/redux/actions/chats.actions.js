import Swal from 'sweetalert2';
import { firebase, db } from '../../firebase/firebase.config';
import { types } from "../types/types"
import { closeUsersModal, finishLoadingAction, startLoadingAction } from './ui.actions';

export const startCreateAChat = (uidSelected, nameSelected) => {

    return async(dispatch, getState) => {

        dispatch(startLoadingAction());

        try {
            const { uid } = getState().auth;

            const existChat = await getExistChat(uid, uidSelected);

            if(!existChat) {

                const newChat = await db.collection('chats').add({
                    messages: [],
                    users: [uid, uidSelected]
                })

                await db.collection('users')
                    .doc(uid)
                    .update({
                        chats: firebase.firestore.FieldValue.arrayUnion({
                            name: nameSelected,
                            last_message: null,
                            chatId: newChat.id,
                            userId: uidSelected,
                            active: true,
                            date: Date.now()
                        })
                    })

                dispatch(closeUsersModal());

                // await db.collection('users')
                //     .doc(uidSelected)
                //     .update({
                //         chats: firebase.firestore.FieldValue.arrayUnion({
                //             name: name,
                //             last_message: null,
                //             chatId: newChat.id,
                //             userId: uid
                //         })
                //     })

                    
            }else{
                console.log('false');
            }
            dispatch(finishLoadingAction());
        } catch (error) {
            Swal.fire('Error', error.message, 'error');
            dispatch(finishLoadingAction);
        }
        
    
    }
}

export const startGetChatMessages = (chatId, userId) => {
    return async (dispatch) => {
        dispatch(startLoadingAction());

        const userData = await db.collection('users').doc(userId).get();
        const chatData = await db.collection('chats').doc(chatId).get();

        const { name, loggedIn } = userData.data();
        const { messages } = chatData.data();

        dispatch(activeChat({
            chatId,
            name,
            loggedIn,
            messages
        }));

        dispatch(finishLoadingAction());

    }
}

const getExistChat = async (uid, uidSelected) => {

    const chatsQuery = await db.collection('chats').where('users', 'array-contains', uid).get();
    let boolExist = false;

    chatsQuery.forEach(doc => {
        let { users } = doc.data();
        const existChatUserSelected = [...users].find(item => item === uidSelected);
        
        if(existChatUserSelected !== undefined) {
            boolExist = true;
            return;
        }
    })

    return boolExist;
}

export const createAChat = (data) => ({
  type: types.CHAT_CREATE,
  payload: data  
})

export const loadChats = (data) => ({
    type: types.GET_CHATS_START,
    payload: data
})

export const activeChat = (data) => ({
    type: types.CHAT_ACTIVE,
    payload: data
})