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


const mapStateToProps = state => {
    const tasks = state.firestore.ordered.tasks;
    return {
      tasks: tasks,
/*       uid: state.firebase.auth.uid */
    }
  }
  
  export default compose (
    connect(mapStateToProps), firestoreConnect(ownProps => [
      {
        collection: "tasks",
/*         where: ["authorId", "==", ownProps.uid], */
        orderBy: ["date", "desc"]
      }
    ])
  )(TaskList)


