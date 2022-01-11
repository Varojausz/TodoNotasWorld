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

export const signIn = creds => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        console.log(creds)
        firebase.auth().signInWithEmailAndPassword(creds.email, creds.password)
        .then(() => {
            console.log('hola?')
            const uid = getState().firebase.auth.uid
            const users = getState().firestore.ordered.users
            const user = obtenerUsuario(users,uid)
            creds.name = user.name
            console.log(creds)
            dispatch({type: "SIGN_IN", payload: creds});
        })
        .catch((err) => {
            dispatch({type: 'SIGN_IN_ERR'}, err)
        })
    }
}

let userId = {}
export const signUp = (creds) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().createUserWithEmailAndPassword(creds.email, creds.password)
        .then((data) => {
            userId = {...data}
            dispatch({type: "SIGN_UP", payload: creds});
        }).then(() => {
            const firestore = getFirebase().firestore()
/*          const authorId = getState().firebase.auth.uid; */
            firestore.collection('users')
            .add({
                ...creds,
                userId: userId.user.uid,
                date: new Date()
            })
            .then(()=> {
                creds.password = null
                dispatch({
                    type: "ADD_USER",
                    payload: {creds: creds, userId: userId.user.uid, date: new Date()}
                })
            })
        })
        .catch((err) => {
            dispatch({type: 'SIGN_UP_ERR'}, err)
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
        })
    }
}