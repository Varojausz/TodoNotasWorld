//import {deleteUser} from '../../config/fbconfig'
import { getAuth, deleteUser } from "firebase/auth";
import { doc, deleteDoc } from "firebase/firestore";

function obtenerUsuario(item,uid){
    for(let user of item) {
        for(let field in user) {
            if(user[field]==uid){
                console.log(user.name)
                return user
            }else {
                console.log('No hay coincidencias')
            }
        }
    }
}

let user
export const signIn = creds => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        console.log(creds)
        firebase.auth().signInWithEmailAndPassword(creds.email, creds.password)
        .then(() => {
            console.log('hola?')
            const uid = getState().firebase.auth.uid
            const users = getState().firestore.ordered.users
            user = obtenerUsuario(users,uid)
            creds = {...creds, name: user.name, storeId: user.storeId}
            /* creds.name = user.name */
            console.log(creds)
            console.log(user)
            dispatch({type: "SIGN_IN", payload: creds});
        }).then(() => {
            dispatch({
                type: "ADD_USER",
                payload: {...user}
            })
        })
        .catch((err) => {
        let errorMessage = err.message.replace('The email address is', 'Email or password are')
            .replace('badly formatted. ', 'incorrect.')
            .replace('Firebase: ', '')
            .replace ('(auth/invalid-email).','')
            dispatch({type: 'SIGN_IN_ERROR', payload: errorMessage})
        })
    }
}

let authId = {}
let storeId = {}
export const signUp = (creds) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().createUserWithEmailAndPassword(creds.email, creds.password)
        .then((data) => {
            authId = {...data}
            dispatch({type: "SIGN_UP", payload: creds});
        }).then(() => {
            const firestore = getFirebase().firestore()
/*          const authorId = getState().firebase.auth.uid; */
            firestore.collection('users')
            .add({
                ...creds,
                photo: "",
                authId: authId.user.uid,
                date: new Date()
            }).then((data) => {
                storeId = data.id
                firestore.collection('users').doc(data.id)
                .set({...creds, photo: "", authId: authId.user.uid, date: new Date(), storeId: storeId})
            })
            .then(()=> {
                console.log(storeId)
                creds.password = null
                dispatch({
                    type: "ADD_USER",
                    payload: {...creds, photo: "", authId: authId.user.uid, date: new Date(), storeId: storeId}
                })
            })
        })
        .catch((err) => {
            let errorMessage = err.message.replace("Firebase: The email address is badly formatted. (auth/invalid-email).", "Name and password must have at least 6 characters")
            let errorMessage2 = "Email must contain a '@'character"

            dispatch({type: 'SIGN_UP_ERROR', payload: {error: errorMessage, error2: errorMessage2}})
        })
    }
}
export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut()
        .then(() => {
            console.log('adios :D')
            dispatch({type: "SIGN_OUT"});
        }).then(() => {
            console.log('user out')
            dispatch({type: "USER_OUT"});
        })
    }
}




export const deleteUserAction = (id) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        console.log('a ver picha', id)


        let user = firebase.auth().currentUser
        console.log(user)
        deleteUser(user)
        .then((data) => {
            console.log(data, 'El cual debería estar vacío')
            dispatch({type: "DELETE"});
            dispatch({type: "DELETE_USER"});
        }).then(() => {
            const firestore = firebase.firestore()
            .collection("users").doc(id).delete()
            .then(()=> {
                dispatch({
                    type: "SIGN_OUT"
                })
            })
        })
        .catch((err) => {
            console.log('Error catched on deleteUser catch', err.message)
        })

    }
}