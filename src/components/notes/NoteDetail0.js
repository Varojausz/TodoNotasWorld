import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestore, isLoaded, isEmpty, useFirestoreConnect } from 'react-redux-firebase'
import moment from 'moment'


const NoteDetail = (props) => {
    const id = props.match.params.id
    console.log(props)
    useFirestoreConnect([{collection:'notes',doc:id}])
    const note = useSelector(({firestore: {data}}) => data.notes&&data.notes[id])
    const noteMarkup = !isLoaded(note)?(
        <div className="container section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Loading...</span>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                   
                </div>
            </div>
        </div>
    ):isEmpty(note)?(
        <div className="container section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">The note content is empty</span>
                </div>
                <div className="card-action grey lighten-4 grey-text">

                </div>
            </div>
        </div>
    ):(
        <div className="container section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{note.title}</span>
                    <p>{note.content}</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>{moment(note.createAt.toDate()).calendar()}</div>
                </div>
            </div>
        </div>
    )
    return noteMarkup
}

export default NoteDetail
