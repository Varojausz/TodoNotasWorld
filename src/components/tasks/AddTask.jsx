import React from 'react'
import useInput from '../../customhook/useInput'
/* import {addTask} from '../../store/actions/taskActions' */
import { useDispatch, useSelector } from 'react-redux'
import {getFirebase} from 'react-redux-firebase'


const AddTask = () => {
    const [title,bindTitle,resetTitle] = useInput("")
    const [content,bindContent,resetContent] = useInput("")
    const dispatch = useDispatch()
    const uid = useSelector((state) => {
        return state.firebase.auth.uid ? state.firebase.auth.uid : null
    })

    /* console.log(uid) */



    function handleSubmit (e) {
        e.preventDefault()


        const firestore = getFirebase().firestore()
        firestore.collection('tasks')
        .add({
            title: title,
            content: content,
            name: uid ? localStorage.getItem('name') : 'Anónimo',
            authorId: uid,
            favorite: false,
            date: new Date()
        })
        .then(()=> {
            dispatch({
                type: "ADD_TASK",
                payload: {
                    title: title,
                    content: content
                }
            })
        })
        .catch((err) => {
            dispatch({
                type: "ADD_TASK_ERR",
                err
            })
        })




        console.log({title,content})
        resetTitle()
        resetContent()
    }
        return (
        <div className="section">
            <form onSubmit={handleSubmit} className="success" autoComplete="off">
                <legend><h4>Crear Nota</h4></legend>
                <div className="mb-3">
                    <label htmlFor="note_title" className="form-label">Título</label>
                    <input {...bindTitle} type="text" className="form-control" id="note_title"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="note_content" className="form-label">Contenido</label>
                    <input {...bindContent} type="text" className="form-control" id="note_content"></input>
                </div>
                <button type="submit" className="btn btn-primary">Crear</button>
            </form>
        </div>
        )
}


export default AddTask