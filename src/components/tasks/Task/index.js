import React, {useState, useEffect} from 'react'
/* import PropTypes from 'prop-types' */
import {Link} from 'react-router-dom'
/* import Comments from '../Comments' */

/* import Chat from '!svg-react-loader?name=Icon!./../../assets/images/Chat.svg' */
import { ReactComponent as Bin } from '../../../assets/images/Bin.svg'; 
import { ReactComponent as Heart } from '../../../assets/images/Heart.svg'; 
import { ReactComponent as Empty_heart } from '../../../assets/images/Empty_heart.svg'; 
import { ReactComponent as Chat } from '../../../assets/images/Chat.svg'; 
import {PostContainer, PostHeader, PostContent, PostActions, PostComments} from './styles'
import {connect} from 'react-redux'
import {removeTask, toggleFav} from '../../../store/actions/taskActions'
import moment from 'moment'


function Post ({task, removeTask, toggleFav, uid}){
  const handleRemove = (task) => {
    removeTask(task)
  }
  const toggleFavHandler = () => {
      toggleFav(task)
  }

  function toDateTime(secs) {
    let t = new Date(secs * 1000)
    return t;
}


  const heartMarkup = task.favorite ? <Heart/> : <Empty_heart/>
  const deleteMarkup = (task.authorId === uid || task.authorId === 'Anónimo' || uid === 'CXzaSXQAyhMVvguGMPk0Kl1Usdd2') ? 
  <button type="button">
    <span className="label"><Bin onClick={() => handleRemove(task)}/></span>
    <span className="root"></span>
  </button>  : null 




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
              <Link>{task.userName}</Link>
            </span>
            <span className="data">{task.date.seconds ? moment(toDateTime(task.date.seconds).toDateString()).format('DD-MM-YYYY'): moment(task.date).format('DD-MM-YYYY')}</span>
          </div>

          <div className="action">
            {deleteMarkup}
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

/* Post.propTypes = {
  post: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired
} */

const mapDispatchToProps = dispatch => {
  return {
    removeTask: (task) => dispatch(removeTask(task)),
    toggleFav: (task) => dispatch(toggleFav(task))
  }
}
const mapStateToProps = state => {
  return {
    uid: state.firebase.auth.uid
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Post)