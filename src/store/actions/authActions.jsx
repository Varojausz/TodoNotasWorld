/* export const signIn = creds => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        console.log(creds)
        firebase.auth().signInWithEmailAndPassword(creds.email, creds.password)
        .then(() => {
            console.log('hola?')
            dispatch({type: "SIGN_IN"});
        })
        .catch((err) => {
            dispatch({type: 'SIGN_IN_ERR'}, err)
        })
    }
} */
/* export const signUp = (creds) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        console.log(creds)
        firebase.auth().createUserWithEmailAndPassword(creds.email, creds.password)
        .then(() => {
            console.log('hola?')
            dispatch({type: "SIGN_IN"});
        })
        .catch((err) => {
            dispatch({type: 'SIGN_IN_ERR'}, err)
        })
    }
} */
/* export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        console.log(creds)
        firebase.auth().signOut()
        .then(() => {
            console.log('adios :D')
            dispatch({type: "SIGN_OUT"});
        })
    }
} */