import React, {useState, useEffect} from 'react'
/* import AddTask from '../tasks/AddTask' */
import { connect, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'
import TaskList from '../tasks/TaskList'
import {ProfilePaper, Tabs, HeaderAvatar, HeaderContent, HeaderActions, HeaderProfile, Date} from './styles'
import { ReactComponent as Bin } from '../../assets/images/Bin.svg'; 
import { ReactComponent as Edit } from '../../assets/images/Edit.svg'; 
import { deleteUserAction } from '../../store/actions/authActions'


const Profile = ({uid, tasks, usuario, task, state, deleteUserAction, id}) => {

    const [imagen,setImagen] = useState('')

    function obtenerImagenPerfil (id, users) {
      for (let user of users) {
        if(user.storeId === id) {
          //console.log(user.storeId, id)
          //console.log(user.data)
          return user.data
        }
      }
    }
    console.log(obtenerImagenPerfil(state.user.storeId, state.firestore.ordered.users))
  
    useEffect(() => {
      setImagen(obtenerImagenPerfil(state.user.storeId, state.firestore.ordered.users))
    },[])


    // Esta funcion obtiene los tasks publicados por el usuario logeado para mostrarlos en su profile
    function obtenerTasks(tasks,uid){
        let resultsArray = []
        for(let task of tasks) {
            if(task.authId === uid) {
                resultsArray.push(task)
            }
        }
        return resultsArray
    }

    const handleDeleteUser = (id) => {
        deleteUserAction(id)
    }


    const [values, setValues] = useState({loaded: false})

    useFirestoreConnect({collection: 'tasks', orderBy:['date','desc']})
    /* useFirestoreConnect({collection: 'users', where:['date','==','desc'], storeAs: 'usuarioBuscado'}) */
    console.log(tasks)
    useEffect(() => {
        setValues({...values, tasks: obtenerTasks(tasks, uid), loaded: true})
        
    },[])
    useEffect(() => {
        console.log(values.tasks)
    },[values])
    const photoURL = 'https://i.imgur.com/5H0KCsy.png'
    return (
        <ProfilePaper>
            <ul>
                <HeaderProfile>
                    <HeaderAvatar>
                        <div className='circular'>
                            <img src={imagen ? imagen : photoURL} alt="" />
                        </div>
                    </HeaderAvatar>

                    <HeaderContent>
                        <span className='title'>{usuario.name}</span>
                        <p className='data'></p>
                    </HeaderContent>

                    <HeaderActions>
                        <Link to='/edit'>
                            <button>
                                <Edit/>
                            </button>
                        </Link>
                        <button type="button" onClick={() => handleDeleteUser(id)}>
                            <span className="label"><Bin/></span>
                            <span className="root"></span>
                        </button>
                    </HeaderActions>
                </HeaderProfile>

                <hr />

                <Date>
                    <div>
                        <p>{usuario.email}</p>
                    </div>
                </Date>

            </ul>
            <Tabs>
                <button>
                    <span>My Posts</span>
                </button>
            </Tabs>
            {isLoaded(state.tasks) ? (
                <div className="text-center">
                    <div className="spinner-grow text-primary" style={{width: "7rem", height: "7rem"}} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            ) : (
                <div>
                    <div className=""><TaskList tasks={values.tasks}/></div>
                </div>
            )}
        </ProfilePaper>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        deleteUserAction: (id) => dispatch(deleteUserAction(id))
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        tasks: state.firestore.ordered.tasks,
        uid: state.firebase.auth.uid,
        id: state.user.id,
        usuario: state.auth,
        task: state.task,
        state: state
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile)