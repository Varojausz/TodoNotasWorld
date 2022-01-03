
export const addTask = task => {
    return (dispatch,getState, {getFirebase})=> {
        const firestore = getFirebase().firestore()
        firestore.collection('tasks')
        .add({
            ...task,
            favorite: false,
            date: new Date()
        })
        .then(()=> {
            dispatch({
                type: "ADD_TASK",
                task
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
export const deleteTask = task => {
    return (dispatch,getState, {getFirebase})=> {
        const firestore = getFirebase().firestore()
        firestore.collection('tasks').doc(task.id).delete()
        .then(()=> {
            console.log('Delete the task succesfully')
        })
        .catch((err) => {
            console.log(err)
        })
    }
}
export const toggleFav = task => {
    return (dispatch,getState, {getFirebase})=> {
        const favstatus = !task.favorite
        const firestore = getFirebase().firestore()
        firestore.collection('tasks').doc(task.id).update({
            favorite: favstatus
        })
        .then(()=> {
            console.log('Toggle favorite succesfully')
        })
        .catch((err) => {
            console.log(err)
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