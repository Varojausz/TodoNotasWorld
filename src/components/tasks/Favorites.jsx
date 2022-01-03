import React from 'react'
import { useSelector } from 'react-redux'
import {useFirestoreConnect} from 'react-redux-firebase'
import TaskList from './TaskList'

const Favorites = () => {
    useFirestoreConnect([{collection: 'tasks', where: ['favorite', '==',true], orderBy: ['date', 'desc'], storeAs: 'favtasks'}])
    const favtasks = useSelector(state => state.firestore.ordered.favtasks)
/*     console.log('favtasks', favtasks) */
    return (
        <>
        <TaskList tasks={favtasks}/>
        </>
    )
}

export default Favorites
