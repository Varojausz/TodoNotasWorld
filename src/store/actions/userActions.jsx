export const addUser = user => {
    return (dispatch,getState, {getFirebase})=> {
        const firestore = getFirebase().firestore()
        const authId = getState().firebase.auth.uid;
        firestore.collection('users')
        user.authId = authId
        .add({
            ...user,
            date: new Date()
        })
        .then(()=> {
            dispatch({
                type: "ADD_USER",
                payload: user
            })
        })
        .catch((err) => {
            dispatch({
                type: "ADD_USER_ERR",
                payload: err
            })
        })
    }
}
export const editUser = user => {
    return (dispatch,getState, {getFirebase})=> {
        const firestore = getFirebase().firestore()
        firestore.collection('users').doc(user.storeId)
        .set(user)
        .then(()=> {
            dispatch({
                type: "EDIT_USER",
                payload: user
            })
        })
        .catch((err) => {
            dispatch({
                type: "EDIT_USER_ERR",
                payload: err
            })
        })
    }
}