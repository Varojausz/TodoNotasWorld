import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import useInput from '../../customhook/useInput'
import { updateTask } from '../../store/actions/taskActions'
import {useHistory} from 'react-router-dom'


const EditTask = () => {
    const task = useSelector(state => state.task)
    console.log('edit', task)
    const [title,bindTitle,resetTitle] = useInput(task.title)
    const [content,bindContent,resetContent] = useInput(task.content)
    const dispatch = useDispatch();
    const history = useHistory();
    function handleSubmit (e) {
        e.preventDefault()
        dispatch(updateTask({id: task.id, title, content}))
        /* console.log({title,content}) */
        resetTitle()
        resetContent()
        history.push('/')
    }
    return (
        <div className="section">
            <form onSubmit={handleSubmit} className="success" autoComplete="off">
                <legend><h4>Editar Nota</h4></legend>
                <div className="mb-3">
                    <label htmlFor="note_title" className="form-label">Título</label>
                    <input {...bindTitle} type="text" className="form-control" id="note_title"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="note_content" className="form-label">Contenido</label>
                    <input {...bindContent} type="text" className="form-control" id="note_content"></input>
                </div>
                <button type="submit" className="btn btn-primary">Actualizar</button>
            </form>
        </div>
    )
}

export default EditTask
