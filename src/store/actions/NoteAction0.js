/* export const addNote = note => {
    return (dispatch,getState, {getFirebase})=> {
        const firestore = getFirebase().firestore()
        const authorId = getState().firebase.auth.uid
        firestore.collection('tasks')
        .add({
            ...note,
            favorite: false,
            authorId: authorId,
            createAt: new Date()
        })
        .then(()=> {
            console.log('add the note uccesfully')
            console.log(note)
        })
        .catch((err) => {
            console.log(err)
        })
    }
} */
/* export const deleteTask = task => {
    return (dispatch,getState, {getFirebase})=> {
        const firestore = getFirebase().firestore()
        firestore.collection('notes')
        .doc(note.id)
        .delete()
        .then(()=> {
            console.log('add the note uccesfully')
        })
        .catch((err) => {
            console.log(err)
        })
    }
}
export const toggleFav = (note) => {
    return (dispatch,getState, {getFirebase})=> {
        const favstatus = !note.favorite
        const firestore = getFirebase().firestore()
        firestore.collection('notes')
        .doc(note.id)
        .update({
            favorite: favstatus
        })
        .then(()=> {
            console.log('add the note uccesfully')
        })
        .catch((err) => {
            console.log(err)
        })
    }
}
export const updateNote = (note) => {
    return (dispatch,getState, {getFirebase})=> {
       
        const firestore = getFirebase().firestore()
        firestore.collection('notes')
        .doc(note.id)
        .update({
            title: note.title,
            content: note.content
        })
        .then(()=> {
            console.log('add the note uccesfully')
        })
        .catch((err) => {
            console.log(err)
        })
    }
} */