import React, {useState, useEffect} from 'react'
import auth from '../../auth/auth-helper'
/* import PropTypes from 'prop-types' */
import {Link} from 'react-router-dom'
import {remove, like, unlike} from '../api-post.js'
import Comments from '../Comments'
import Chat from '!svg-react-loader?name=Icon!./../../assets/images/Chat.svg'
import Empty_heart from '!svg-react-loader?name=Icon!./../../assets/images/Empty_heart.svg'
import Heart from '!svg-react-loader?name=Icon!./../../assets/images/Heart.svg'
import Bin from '!svg-react-loader?name=Icon!./../../assets/images/Bin.svg'
import {PostContainer, PostHeader, PostContent, PostActions, PostComments} from './styles'


export default function Post (props){

  const jwt = auth.isAuthenticated()
  const checkLike = (likes) => {
    let match = likes.indexOf(jwt.user._id) !== -1
    return match
  }
  const [values, setValues] = useState({
    like: checkLike(props.post.likes),
    likes: props.post.likes.length,
    comments: props.post.comments
  })
  
  // useEffect(() => {
  //   setValues({...values, like:checkLike(props.post.likes), likes: props.post.likes.length, comments: props.post.comments})
  // }, [])

  

  const clickLike = () => {
    let callApi = values.like ? unlike : like
    callApi({
      userId: jwt.user._id
    }, {
      t: jwt.token
    }, props.post._id).then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        setValues({...values, like: !values.like, likes: data.likes.length})
      }
    })
  }

  const updateComments = (comments) => {
    setValues({...values, comments: comments})
  }

  const deletePost = () => {   
    remove({
      postId: props.post._id
    }, {
      t: jwt.token
    }).then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        props.onRemove(props.post)
      }
    })
  }

    return (
      <PostContainer className="MuiPaper-root MuiCard-root makeStyles-card-8 MuiPaper-elevation1 MuiPaper-rounded">

        <PostHeader className="MuiCardHeader-root makeStyles-cardHeader-10">

          <div className="avatar">
            <div className="MuiAvatar-root MuiAvatar-circular">
              <img src={'/api/users/photo/'+props.post.postedBy._id} className="MuiAvatar-img"/>
            </div>
          </div>

          <div className="content">
            <span className="title">
              <Link to={"/user/" + props.post.postedBy._id}>{props.post.postedBy.name}</Link>
            </span>
            <span className="data">{(new Date(props.post.created)).toDateString()}</span>
          </div>

          <div className="action">
            <button type="button">
              <span className="label">
                <Bin/>
              </span>
              <span className="root"></span>
            </button>
          </div>

        </PostHeader>

        <PostContent className="MuiCardContent-root makeStyles-cardContent-9">
          <p className="MuiTypography-root makeStyles-text-11 MuiTypography-body1">{props.post.text}</p>
          {props.post.photo &&
          <div className="makeStyles-photo-12">
            <img className="makeStyles-media-13" src={'/api/posts/photo/'+props.post._id}/>
          </div>}
        </PostContent>

        <hr className="MuiDivider-root"/>

        <PostActions>
        { values.like ?
          <button onClick={clickLike} className="unliked" type="button" aria-label="Unlike">
            <span className="label">
              <Heart/>
            </span>
          </button> :
          <button onClick={clickLike} className="liked" type="button" aria-label="Like">
            <span className="label">
              <Empty_heart/>
            </span>
          </button>  }
          <span>{values.likes}</span>
          <button type="button" aria-label="Comment">
            <span className="label">
              <Chat/>
            </span>
            <span className="root"></span>
          </button> 
          <span>{values.comments.length}</span>
        </PostActions>

        <hr className="MuiDivider-root"/>

        <Comments postId={props.post._id} comments={values.comments} updateComments={updateComments}/>
      </PostContainer>
    )
  
}

/* Post.propTypes = {
  post: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired
} */