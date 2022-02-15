let ownId = ''
export const addTask = task => {
    return (dispatch,getState, {getFirebase})=> {
        const firestore = getFirebase().firestore()
        let authId = getState().firebase.auth.uid;
        authId = authId ? authId : 'Anónimo';
        const date = Date.now();
        let storeId = getState().user.storeId
        storeId = storeId ? storeId : 'Anónimo'
        task.authId = authId;
        task.storeId = storeId;
        task.date = date;
        task.comments = [];

        console.log(getState())
        console.log(task)
        firestore.collection('tasks')
        .add({
            ...task,
            favorite: false,
        }).then((data) => {
            ownId = data.id
            console.log(ownId, data.id)
            firestore.collection('tasks').doc(data.id)
            .set({...task, ownId: ownId})
        })
        .then(()=> {
            task.ownId = ownId;
            dispatch({
                type: "ADD_TASK",
                payload: task
            })
        })
        .catch((err) => {
            dispatch({
                type: "ADD_TASK_ERR",
                payload: err
            })
        })
    }
}
export const addComment = (comment) => {
    return (dispatch,getState, {getFirebase})=> {
        const firestore = getFirebase().firestore()
        let authId = getState().firebase.auth.uid;
        authId = authId ? authId : 'Anónimo';
        const date = Date.now();
        let storeId = getState().user.storeId;
        let name = getState().user.name;
        name = name ? name : 'Anónimo';
        let data = getState().user.data;
        data = data ? data : '';
        let task = {...comment.task};

        let comentario = {};
        name = name ? name : 'Anónimo';
        storeId = storeId ? storeId : 'Anónimo';
        
        comentario.content = comment.content
        comentario.authId = authId;
        comentario.storeId = storeId;
        comentario.name = name;
        comentario.date = date;
        comentario.data = data;
        

        console.log(getState())
        console.log(comment)
        firestore.collection('tasks').doc(task.ownId).collection('comments')
        .add({
            comentario
        })
        .then((data) => {
            ownId = data.id
            console.log(ownId, data.id)
            firestore.collection('tasks').doc(task.ownId).collection('comments').doc(data.id)
            .set({...comentario, ownId: ownId})
        })
        .then(()=> {
            comentario.ownId = ownId;
            dispatch({
                type: "ADD_COMMENT",
                payload: task
            })
        })
        .catch((err) => {
            dispatch({
                type: "ADD_COMMENT_ERR",
                payload: err
            })
        })
    }
}

export const deleteComment = (comment, task) => {
    return (dispatch,getState, {getFirebase})=> {
        const firestore = getFirebase().firestore()
        firestore.collection('tasks').doc(task.ownId).collection('comments').doc(comment.ownId).delete()
        .then(()=> {
            dispatch({
                type: "DELETE_COMMENT"
            })
        })
        .catch((err) => {
            dispatch({
                type: "DELETE_COMMENT_ERR",
                payload: err
            })
        })
    }
}


export const removeTask = task => {
    return (dispatch,getState, {getFirebase})=> {
        const firestore = getFirebase().firestore()
        firestore.collection('tasks').doc(task.ownId).delete()
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
        firestore.collection('tasks').doc(task.storeId).update({
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