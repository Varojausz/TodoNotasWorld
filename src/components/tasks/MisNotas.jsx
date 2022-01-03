import React from 'react'
import { useSelector } from 'react-redux'
import {useFirestoreConnect} from 'react-redux-firebase'
import TaskList from './TaskList'

const MisNotas = () => {
    const uid = useSelector(state => state.firebase.auth.uid)
    useFirestoreConnect([{collection: 'tasks', where: ['authorId', '==',uid], orderBy: ['date', 'desc'], storeAs: 'misnotas'}])
    const misNotas = useSelector(state => state.firestore.ordered.misnotas)
    /* console.log('mis notas', misNotas) */
    return (
        <>
        <h1 style={{margin: '1rem'}}>Mis Notas</h1>
        <TaskList tasks={misNotas}/>
        </>
    )
}

export default MisNotas