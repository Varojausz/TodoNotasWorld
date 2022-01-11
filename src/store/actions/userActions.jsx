export const addUser = user => {
    return (dispatch,getState, {getFirebase})=> {
        const firestore = getFirebase().firestore()
/*         const authorId = getState().firebase.auth.uid; */
        firestore.collection('users')
        .add({
            ...user,
/*             authorId: authorId, */
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
                err
            })
        })
    }
}