/* import React from 'react'
import useInput from '../../customhook/useInput'
import {addNote} from '../../store/actions/NoteAction'
import { useDispatch } from 'react-redux'

const Form = () => {
    const [title,bindTitle,resetTitle] = useInput("")
    const [content,bindContent,resetContent] = useInput("")
    const dispatch = useDispatch()

    function handleSubmit (e) {
        e.preventDefault()
        dispatch(addNote({title,content}))
        resetTitle()
        resetContent()
    }
    return (
        <div className="section">
            <form onSubmit={handleSubmit} className="success">
                <h5 className="text-dark">Nueva Nota</h5>
                <div className="mb-3">
                    <label htmlFor="note_title" className="form-label">Título</label>
                    <input {...bindTitle} type="text" className="form-control" id="note_title" aria-describedby="emailHelp"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="note_content" className="form-label">Contenido</label>
                    <textarea {...bindContent}  className="form-control" id="note_content"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Form */
