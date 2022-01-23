import React, {useState, useEffect} from 'react'
/* import AddTask from '../tasks/AddTask' */
import { connect, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'
import TaskList from '../tasks/TaskList'
import {ProfilePaper, HeaderAvatar, HeaderProfile, SectionFieldStyle, InvalidSubmit, SectionSubmitStyle,} from './styles'
import InputWithLabel from '../InputWithLabel'
import { ReactComponent as Bin } from '../../assets/images/Bin.svg'; 
import { ReactComponent as Edit } from '../../assets/images/Edit.svg'; 
import { ReactComponent as Exclamation } from '../../assets/images/Exclamation.svg'; 
import { deleteUserAction } from '../../store/actions/authActions'



const Profile = ({uid, tasks, usuario, task, state, deleteUserAction,id}) => {

    function obtenerTasks(tasks,uid){
        let resultsArray = []
        for(let task of tasks) {
            if(task.authorId === uid) {
                resultsArray.push(task)
            }
        }
        return resultsArray
    }

    const handleChange = name => event => {
        setCreds({ ...creds, [name]: event.target.value })
    }

    function handleSubmit (e) {
        if(creds.oldPassword===state.auth.password) {
            setCreds({...creds, error: ''})
        } else {
            setCreds({...creds, error: true})
        }
/*         e.preventDefault()
        props.signIn(creds) */
    }


    const [creds, setCreds] = useState({
        email: state.user.email,
        password: '',
        oldPassword: '',
        name: state.user.name,
        error: ''
    })

    return (
        <ProfilePaper>
            <SectionFieldStyle>
            <ul>
                <HeaderProfile>
                    <HeaderAvatar>
                        <div className='circular'>
                            <img src={state.user.data} alt="" />
                        </div>
                    </HeaderAvatar>
                </HeaderProfile>

            </ul>
                <br/>
                <InputWithLabel value={creds.email} id="email" label="Email" type="email" handleChange={handleChange('email')}>
                    New email
                </InputWithLabel>
                <br/>
                <InputWithLabel value={creds.name} id="name" label="Name" type="text" handleChange={handleChange('name')}>
                    New name
                </InputWithLabel>
                <br />
                <InputWithLabel value={creds.oldPassword} id="password" label="Password" type="password" handleChange={handleChange('oldPassword')}>
                    Old Password
                </InputWithLabel>
                <br />
                <InputWithLabel value={creds.password} id="OldPassword" label="Password" type="password" handleChange={handleChange('password')}>
                    New password
                </InputWithLabel>
                <br/> 
                {creds.error &&
                    <InvalidSubmit>
                        <Exclamation/>
                        The old password is incorrect
                    </InvalidSubmit>
                }
            </SectionFieldStyle>

            <SectionSubmitStyle>
                <button onClick={handleSubmit} tabIndex="0" type="button">
                    <span className="MuiButton-label">Submit</span>
                    <span className="MuiTouchRipple-root"></span>
                </button>
            </SectionSubmitStyle>
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