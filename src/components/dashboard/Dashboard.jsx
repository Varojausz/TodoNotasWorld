import React, {useState, useEffect} from 'react'
/* import AddTask from '../tasks/AddTask' */
import NewPost from '../tasks/post/NewPost'
import { connect, useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'
import TaskList from '../tasks/TaskList'

const Dashboard = (props) => {


    const [values, setValues] = useState({})

    useFirestoreConnect({collection: 'tasks', orderBy:['date','desc']})
    useFirestoreConnect({collection: 'users', orderBy:['date','desc']})
    useFirestoreConnect({collection: 'tests', orderBy:['enunciado','desc']});
    


    useEffect(() => {
        setValues({tasks: props.tasks})
    },[props.state])


    return (
        (!isLoaded(props.state.firestore.ordered.tasks))?(
            <div className="text-center">
                <div className="spinner-grow text-primary" style={{width: "7rem", height: "7rem"}} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        ): (
        <div>
            <NewPost/>
            <div className=""><TaskList tasks={values.tasks}/></div>
        </div>
        )

    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        tasks: state.firestore.ordered.tasks,
        auth: state.auth,
        state: state
    }
}

export default connect(mapStateToProps)(Dashboard)
