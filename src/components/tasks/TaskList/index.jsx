import React from 'react'
import Post from '../Task/index'
/* import {StyledList} from './styles' */
import {connect} from 'react-redux'
import {compose} from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

const TaskList = ({tasks}) => {
    return (
        <div style={{marginTop: '24px'}}>
            {tasks && tasks.map(task => <Post task={task} key={task.id}/>)}
        </div>
    )
}


  
  export default compose (
    connect(null), firestoreConnect(ownProps => [
      {
        collection: "tasks",
/*         where: ["authorId", "==", ownProps.uid], */
        orderBy: ["date", "desc"]
      }
    ])
  )(TaskList)


