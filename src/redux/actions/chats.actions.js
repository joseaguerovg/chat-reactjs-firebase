import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
import { firebase, db } from '../../firebase/firebase.config';
import { types } from "../types/types"
import { finishLoadingAction, startLoadingAction } from './ui.actions';

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
                            date: Date.now()
                        })
                    })
                
                dispatch(startGetChatMessages(newChat.id, uidSelected));
                    
            }else{
                const { chats } = getState().chats;

                const chatInList = [...chats].findIndex(chat => chat.chatId === existChat);

                if(chatInList < 0){
                    await db.collection('users')
                    .doc(uid)
                    .update({
                        chats: firebase.firestore.FieldValue.arrayUnion({
                            name: nameSelected,
                            last_message: null,
                            chatId: existChat,
                            userId: uidSelected,
                            date: Date.now()
                        })
                    })
                }

                dispatch(startGetChatMessages(existChat, uidSelected));
            }
            dispatch(finishLoadingAction());
        } catch (error) {
            Swal.fire('Error', error.message, 'error');
            dispatch(finishLoadingAction());
        }
        
    
    }
}

export const startDeleteChatList = () => {
    return async (dispatch, getState) => {
        const { auth, chats: chatState } = getState()

        const { chatId } = chatState.active

        dispatch(resetChatActive());

        await db.collection('users').doc(auth.uid).update({
            chats: chatState.chats.filter(chat => chat.chatId !== chatId )
        })

        
    }
}

export const startGetChatMessages = (chatId, userId) => {
    return async (dispatch) => {
        dispatch(startLoadingAction());

        dispatch(activeChat({
            chatId,
            userId
        }));

        dispatch(finishLoadingAction());

    }
}

export const startSendMessage = (message) => {
    return async (_, getState) => {

        const { auth, chats: chatsState } = getState();

        const { chatId, userId } = chatsState.active;

        const { uid, name } = auth;

        const userData = await db.collection('users').doc(userId).get();

        const chats = userData.data().chats;

        if(!existSeccondChat(chats, chatId)){
            // Agrego el chat a la lista del usuario que no inició el chat.
            createASeccondChat({chatId, message, name, uid, userId})
        }else{
            updateLastMessageUsers(uid, message, chatId)
            updateLastMessageUsers(userId, message, chatId)
        }

        const chatsRef = db.collection('chats').doc(chatId);

        chatsRef.get()
            .then(doc => {
                const messages = doc.data().messages

                chatsRef.update({
                    messages: [...messages, {
                        id: uuidv4(),
                        content: message,
                        userId: uid
                    }]
                })
            });


        

    }
}

const updateLastMessageUsers = async (id, message, chatId) => {
    try {
        const usersCollection = db.collection('users');
        
        const { chats } = await (await usersCollection.doc(id).get()).data();

        const indexChat = [...chats].findIndex(chat => chat.chatId === chatId)

        if(indexChat >= 0){
            chats[indexChat] = {
                ...chats[indexChat],
                last_message: message,
                date: Date.now()
            };
        }

        usersCollection.doc(id).update({chats});
        
    } catch (error) {
        console.log(error);
    }
}

const createASeccondChat = ({chatId, message, name, uid: userId, userId: userSeccondId}) => {
    const newChat = {
        chatId,
        date: Date.now(),
        last_message: message,
        name,
        userId
    }

    db.collection('users').doc(userSeccondId).update({
        chats: firebase.firestore.FieldValue.arrayUnion(newChat)
    });

    updateLastMessageUsers(userId, message, chatId)
}

const existSeccondChat = (chats, chatId) => {
    if(chats.length === 0) return false

    const exist = [...chats].find(chat => chat.chatId === chatId);

    return (exist === undefined) ? false : exist;
}

const getExistChat = async (uid, uidSelected) => {

    const chatsQuery = await db.collection('chats').where('users', 'array-contains', uid).get();
    let boolExist = false;

    chatsQuery.forEach(doc => {
        let { users } = doc.data();
        const existChatUserSelected = [...users].find(item => item === uidSelected);
        
        if(existChatUserSelected !== undefined) {
            boolExist = doc.id;
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

export const resetChatActive = () => ({
    type: types.CHAT_ACTIVE_RESET
})

export const resetChats = () => ({
    type: types.CHATS_RESET
})