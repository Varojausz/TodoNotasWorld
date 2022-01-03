import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
/* import Comments from '../Comments' */

/* import Chat from '!svg-react-loader?name=Icon!./../../assets/images/Chat.svg' */
import { ReactComponent as Bin } from '../../../assets/images/Bin.svg'; 
import { ReactComponent as Heart } from '../../../assets/images/Heart.svg'; 
import { ReactComponent as Empty_heart } from '../../../assets/images/Empty_heart.svg'; 
import { ReactComponent as Chat } from '../../../assets/images/Chat.svg'; 
import {PostContainer, PostHeader, PostContent, PostActions, PostComments} from './styles'
import { deleteTask, toggleFav } from '../../../store/actions/taskActions'
import {useDispatch, useSelector} from 'react-redux'
import moment from 'moment'

export default function Post ({task}){
  const dispatch = useDispatch()
  const deleteTaskHandler = () => {
    dispatch(deleteTask(task))
  }
  const toggleFavHandler = () => {
      dispatch(toggleFav(task))
  }

  const uid = useSelector((state) => state.firebase.auth.uid ? state.firebase.auth.uid : 'not logged')
  const heartMarkup = task.favorite ? <Heart/> : <Empty_heart/>
  const deleteMarkup = (task.authorId === uid || task.authorId === null || uid === 'CXzaSXQAyhMVvguGMPk0Kl1Usdd2 CXzaSXQAyhMVvguGMPk0Kl1Usdd2') ? <Bin onClick={deleteTaskHandler}/> : null


  const photoURL = 'https://i.imgur.com/5H0KCsy.png'

  
  // useEffect(() => {
  //   setValues({...values, like:checkLike(props.post.likes), likes: props.post.likes.length, comments: props.post.comments})
  // }, [])


/*   const updateComments = (comments) => {
    setValues({...values, comments: comments})
  } */


    return (
      <PostContainer className="MuiPaper-root MuiCard-root makeStyles-card-8 MuiPaper-elevation1 MuiPaper-rounded">

        <PostHeader className="MuiCardHeader-root makeStyles-cardHeader-10">

          <div className="avatar">
            <div className="MuiAvatar-root MuiAvatar-circular">
              <img src={photoURL} className="MuiAvatar-img"/>
            </div>
          </div>

          <div className="content">
            <span className="title">
              <Link>{task.name}</Link>
            </span>
            <span className="data">{moment(task.date.toDate()).fromNow()}</span>
          </div>

          <div className="action">
            <button type="button">
              <span className="label">
                {deleteMarkup}
              </span>
              <span className="root"></span>
            </button>
          </div>

        </PostHeader>

        <PostContent className="MuiCardContent-root makeStyles-cardContent-9">
          <p className="MuiTypography-root makeStyles-text-11 MuiTypography-body1">{task.content}</p>
          {photoURL !=='https://i.imgur.com/5H0KCsy.png' &&
          <div className="makeStyles-photo-12">
            <img className="makeStyles-media-13" src={photoURL}/>
          </div>}
        </PostContent>

        <hr className="MuiDivider-root"/>

        <PostActions>
        { task.favorite ?
          <button onClick={toggleFavHandler} className="unliked" type="button" aria-label="Unlike">
            <span className="label">
            {heartMarkup}
            </span>
          </button> :
          <button onClick={toggleFavHandler} className="liked" type="button" aria-label="Like">
            <span className="label">
              {heartMarkup}
            </span>
          </button>  }
          <span>{task.favorite ? 1 : 0}</span>
          <button type="button" aria-label="Comment">
            <span className="label">
              <Chat/>
            </span>
            <span className="root"></span>
          </button> 
          <span>{0}</span>
        </PostActions>

        <hr className="MuiDivider-root"/>

        {/* <Comments postId={props.post._id} comments={values.comments} updateComments={updateComments}/> */}
      </PostContainer>
    )
  
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired
}