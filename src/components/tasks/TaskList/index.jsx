import React from 'react'
import Post from '../Task/index'
/* import {StyledList} from './styles' */

const TasksList = ({tasks}) => {
    return (
        <div style={{marginTop: '24px'}}>
            {tasks && tasks.map(task => <Post task={task} key={task.id}/>)}
        </div>
    )
}

export default TasksList
