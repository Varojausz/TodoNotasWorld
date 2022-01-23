import React, {useState, useEffect} from 'react'
/* import AddTask from '../tasks/AddTask' */
import NewPost from '../tasks/post/NewPost'
import LoggedNewPost from '../tasks/post/LoggedNewPost'
import { connect, useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'
import TaskList from '../tasks/TaskList'

const Dashboard = (props) => {


    const [values, setValues] = useState({})

    useFirestoreConnect({collection: 'tasks', orderBy:['date','desc']})
    useFirestoreConnect({collection: 'users', orderBy:['date','desc']})
    /* useFirestoreConnect({collection: 'users', where:['date','==','desc'], storeAs: 'usuarioBuscado'}) */

    useEffect(() => {
        setValues({tasks: props.tasks, users: props.users})
    },[props.state])
    
/*     useFirestoreConnect([{collection: 'users', orderBy:['date','desc'], storeAs: 'users'}])
    const users = useSelector(state => {

        if (state.firestore.ordered.users!==undefined) {
            console.log('Creando instancia en localstorage', state.firestore.ordered.users[0].name)
            const resultado = obtenerUsuario(state.firestore.ordered.users).name
            console.log(resultado)
            localStorage.setItem('state', resultado)
            return state.firestore.ordered.users
        } else {
            let user = localStorage.getItem('state')
            console.log('Consultando instancia en locaalstorage', user)
            return user
        }
    })

    function obtenerUsuario(item){
        for(let user of item) {
            for(let field in user) {
                console.log(user[field],uid)
                if(user[field]==uid){
                    console.log(user[field],uid)
                    return user
                }else {
                    console.log('No hay coincidencias')
                }
            }
        }
    }
 */


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
        users: state.firestore.ordered.tasks,
        auth: state.auth,
        state: state
    }
}

export default connect(mapStateToProps)(Dashboard)
