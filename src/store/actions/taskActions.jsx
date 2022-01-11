
export const addTask = task => {
    return (dispatch,getState, {getFirebase})=> {
        const firestore = getFirebase().firestore()
        const authorId = getState().firebase.auth.uid;
        console.log(getState())
        firestore.collection('tasks')
        .add({
            ...task,
            favorite: false,
            authorId: authorId!==undefined?authorId:'Anónimo',
            date: new Date().toDateString()
        })
        .then(()=> {
            dispatch({
                type: "ADD_TASK",
                payload: task
            })
        })
        .catch((err) => {
            dispatch({
                type: "ADD_TASK_ERR",
                err
            })
        })
    }
}
export const removeTask = task => {
    return (dispatch,getState, {getFirebase})=> {
        const firestore = getFirebase().firestore()
        firestore.collection('tasks').doc(task.id).delete()
        .then(()=> {
            dispatch({
                type: "REMOVE_TASK"
            })
        })
        .catch((err) => {
            dispatch({
                type: "REMOVE_TASK_ERR",
                payload: err
            })
        })
    }
}
export const toggleFav = task => {
    return (dispatch,getState, {getFirebase})=> {
        const firestore = getFirebase().firestore()
        const favstatus = !task.favorite
        firestore.collection('tasks').doc(task.id).update({
            favorite: favstatus
        })
        .then(()=> {
            dispatch({
                type: "TOGGLE_FAV",
                payload: favstatus
            })
        })
        .catch((err) => {
            dispatch({
                type: "TOGGLE_FAV_ERR",
                payload: err
            })
        })
    }
}
export const updateTask = task => {
    return (dispatch,getState, {getFirebase})=> {
        const firestore = getFirebase().firestore()
        firestore.collection('tasks').doc(task.id).update({
            title: task.title,
            content: task.content
        })
        .then(()=> {
            console.log('Task updated succesfully')
        })
        .catch((err) => {
            console.log(err)
        })
    }
}