import React from 'react'
import Note from './Note0'

const NoteList = ({notes}) => {
    return (
        <div className="notelist" style={{display: 'grid', 
        gridTemplateRows: 'auto',
        gridTemplateColumns: 'auto auto auto auto auto',
        gap:' 5px',
        gridAutoRows: 'auto'}}>
            {notes && notes.map(note => <Note note={note} key={note.id}/>)}
        </div>
    )
}

export default NoteList
