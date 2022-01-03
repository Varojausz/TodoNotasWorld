import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import moment from 'moment'

const TaskDetail = (props) => {
    const id = props.match.params.id
    useFirestoreConnect([{collection: 'tasks', doc: id}]);
    const task = useSelector(({firestore:{data}})=>data.tasks&&data.tasks[id])
    const taskMarkup = !isLoaded(task)?(
        <div className="container section">
        <div className="card">
            <div className="card-body">
                <span className="card-title">Loading...</span>
            </div>
            <div className="card-footer bg-light text-black-50">
            
            </div>
        </div>
    </div>
    ): isEmpty(task)?(
        <div className="container section">
        <div className="card">
            <div className="card-body">
                <span className="card-title">The task content is empty</span>
            </div>
            <div className="card-footer bg-light text-black-50">
            </div>
        </div>
    </div>
    ):(
        <div className="container section">
        <div className="card">
            <div className="card-body">
                <span className="card-title">Título: {task.title}</span>
                <p className="card-text">Contenido: {task.content}</p>
                <p className="card-text">Autor: {task.name}</p>
            </div>
            <div className="card-footer bg-light text-black-50">
            <div>{moment(task.date.toDate()).calendar()}</div>
            </div>
        </div>
    </div>
    )
    return (
        taskMarkup
    )
}

export default TaskDetail
