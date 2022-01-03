import React from 'react'
import {deleteNote, toggleFav} from '../../store/actions/noteAction'
import {useDispatch} from 'react-redux'
import moment from 'moment'
import {Link} from 'react-router-dom'

const Note = ({note}) => {
    const dispatch = useDispatch()

    const deleteNoteHandler = () => {
        dispatch(deleteNote(note))
    }
    const toggleFavoriteHandler = () => {
        dispatch(toggleFav(note))
    }
    const editNoteHandler = () => {
        dispatch({type: 'EDIT_NOTE', payload: note})
    }
    const heartMarkup = note.favorite?'favorite': 'favorite_border'
    return (
        <div className="note" style={{width: '100%'}}>
            <div className="right-align">
                <i className="material-icons red-text" style={{cursor: 'pointer'}} onClick={toggleFavoriteHandler}>{heartMarkup}</i>
                {/* <i className="material-icons" style={{cursor: 'pointer'}} onClick={deleteNoteHandler}>delete</i> */}
            </div>
            <Link to={"/note/"+ note.id}>
            <h5 className="black-text">{note.title}</h5>
            </Link>
            <p className="truncate">{note.content}</p>
            <p className="dark-grey-text">{moment(note.createAt.toDate()).fromNow()}</p>

            <div className="right-align">
                <Link to={"/editform/"+ note.id}>
                    <i onClick={editNoteHandler} className="material-icons black-text">edit</i>
                </Link>
            </div>
        </div>
    )
}

export default Note
