import React, {useState, useEffect} from 'react'
/* import AddTask from '../tasks/AddTask' */
import NewPost from '../tasks/post/NewPost'
import LoggedNewPost from '../tasks/post/LoggedNewPost'
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'
import TaskList from '../tasks/TaskList'

const Dashboard = () => {


    const [usuario, setUsuario] = useState('')

    useFirestoreConnect({collection: 'tasks', orderBy:['date','desc']})
    const tasks = useSelector(state => state.firestore.ordered.tasks)
    /* console.log(tasks) */

    const uid = useSelector((state) => {
        return state.firebase.auth.uid ? state.firebase.auth.uid : null
    })
    
    useFirestoreConnect([{collection: 'users', orderBy:['date','desc'], storeAs: 'users'}])
    const users = useSelector(state => {

/*         try {
            localStorage.setItem('state', state.firestore.ordered.users)
        } catch {
            let user = localStorage.getItem('state')
            return user
        }   finally {
            console.log(state)
        } */

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


    useEffect(() => {
        setUsuario(users)
    },[])

    console.log(usuario)
    

/*     for(let i;i<user.length;i++){
        console.log(i)
        if(i===uid){
            console.log(user)
            return user
        }
    } */





    return (
        (!isLoaded(tasks))?(
            <div className="text-center">
                <div className="spinner-grow text-primary" style={{width: "7rem", height: "7rem"}} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        ): (
        <div>
            <NewPost usuario={usuario}/>
            <div className="d-flex justify-content-center"><TaskList tasks={tasks}/></div>
        </div>
        )

    )
}

export default Dashboard
