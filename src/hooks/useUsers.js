import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { db } from '../firebase/firebase.config';

const useUsers = () => {

    const [userState, setUserState] = useState([])

    const { uid } = useSelector(state => state.auth)
    
    useEffect(() => {        
        db.collection('users')
            .orderBy('loggedIn', 'desc')
            .get()
            .then(snaps => {     
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

                setUserState(users);
            });
    }, [uid])

    return userState
}

export default useUsers
