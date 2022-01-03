import React from 'react'
import moment from 'moment'
import {Link} from 'react-router-dom'
import { deleteTask, toggleFav } from '../../../store/actions/taskActions'
import {useDispatch, useSelector} from 'react-redux'
import { StyledTask, StyledDiv, StyledContent } from './task_styles'

const Task = ({task}) => {
    const dispatch = useDispatch()
    const deleteTaskHandler = () => {
        dispatch(deleteTask(task))
    }
    const toggleFavHandler = () => {
        dispatch(toggleFav(task))
    }
    const editTaskHandler = () => {
        dispatch({type:'EDIT_TASK', payload: task})
    }

    const uid = useSelector((state) => state.firebase.auth.uid ? state.firebase.auth.uid : 'not logged')
    const heartMarkup = task.favorite ? 'favorite': 'favorite_border'
    const deleteMarkup = (task.authorId === uid || task.authorId === null || uid === 'CXzaSXQAyhMVvguGMPk0Kl1Usdd2 CXzaSXQAyhMVvguGMPk0Kl1Usdd2') ? <i className="material-icons" style={{cursor: 'pointer'}} onClick={deleteTaskHandler}>delete</i> : null
    const editMarkup = (task.authorId === uid || task.authorId === null || uid === 'CXzaSXQAyhMVvguGMPk0Kl1Usdd2 CXzaSXQAyhMVvguGMPk0Kl1Usdd2') ? <i className="material-icons text-black" onClick={editTaskHandler}>edit</i> : null
    const name = false
    /* console.log(task.authorId,uid) */
    return (
        <StyledTask className="note">
            <StyledDiv className="d-flex mt-0">
                <p className="d-flex justify-content-start col bg-success"><i className="material-icons text-danger" style={{cursor: 'pointer'}} onClick={toggleFavHandler} >{heartMarkup}</i></p>
                <p className="d-flex justify-content-end col bg-success">{deleteMarkup}</p>
            </StyledDiv>
            <StyledContent>
                <Link to={"/task/"+ task.id}>
                    <h5 className="text-dark mt-16 d-flex justify-content-center text-truncate">{task.title}</h5>
                </Link>
                <p className="text-dark mt-16 d-flex justify-content-center px-2">{task.content}</p>
                <p className="text-black-50 mt-16 d-flex justify-content-center ">{moment(task.date.toDate()).fromNow()}</p>
                <p className="d-flex mt-16 justify-content-center"><i className="text-primary"> {task.name} </i> </p>
            </StyledContent>
            <StyledDiv className="d-flex bg-success">
                <p><Link to={"/edittask/"+ task.id}>{editMarkup}</Link></p>
            </StyledDiv>
        </StyledTask>
    )
}

export default Task

