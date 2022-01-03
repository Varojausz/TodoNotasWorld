import React, {useState} from 'react'
import auth from '../../auth/auth-helper'
import PropTypes from 'prop-types'
import {comment, uncomment} from '../api-post.js'
import {Link} from 'react-router-dom'
import {CommentContainer} from './styles'
import Bin from '!svg-react-loader?name=Icon!./../../assets/images/Bin.svg'
import useFocusHover from '../../assets/CustomHooks/useFocusHover'

export default function Comments (props) {

  const [focus, handleFocus, handleFocusOut, hover, handleHover, handleHoverOut] = useFocusHover();

  const [text, setText] = useState('')
  const jwt = auth.isAuthenticated()
  const handleChange = event => {
    setText(event.target.value)
  }
  const addComment = (event) => {
    if(event.keyCode == 13 && event.target.value){
      event.preventDefault()
      comment({
        userId: jwt.user._id
      }, {
        t: jwt.token
      }, props.postId, {text: text}).then((data) => {
        if (data.error) {
          console.log(data.error)
        } else {
          setText('')
          props.updateComments(data.comments)
        }
      })
    }
  }

  const deleteComment = comment => event => {
    uncomment({
      userId: jwt.user._id
    }, {
      t: jwt.token
    }, props.postId, comment).then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        props.updateComments(data.comments)
      }
    })
  }

/*     const commentBody = item => {
      return (
        <p className={classes.commentText}>
          <Link to={"/user/" + item.postedBy._id}>{item.postedBy.name}</Link><br/>
          {item.text}
          <span className={classes.commentDate}>
            {(new Date(item.created)).toDateString()} |
            {auth.isAuthenticated().user._id === item.postedBy._id &&
              <Icon onClick={deleteComment(item)} className={classes.commentDelete}>delete</Icon> }
          </span>
        </p>
      )
    } */

    return (
      <CommentContainer focus={focus} hover={hover}>
      <article className="comment-field">
        <div className="avatar">
          <div className="MuiAvatar-root MuiAvatar-circular makeStyles-smallAvatar-16">
            <img src="/api/users/photo/61939d1af1380e279c4bdf97" className="MuiAvatar-img"/>
          </div>
        </div>

        <div className="content">
          <span className="MuiTypography-root MuiCardHeader-title MuiTypography-body2 MuiTypography-displayBlock">
            <div className="MuiFormControl-root MuiTextField-root makeStyles-commentField-17 MuiFormControl-marginNormal">
              <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl MuiInputBase-multiline MuiInput-multiline">
                <textarea onKeyDown={addComment} onChange={handleChange} onMouseOut={handleHoverOut} onMouseOver={handleHover} onFocus={handleFocus} onBlur={handleFocusOut} rows="1"  placeholder="Write something ..." className="MuiInputBase-input MuiInput-input MuiInputBase-inputMultiline MuiInput-inputMultiline"></textarea>
                <textarea  className="MuiInputBase-input MuiInput-input MuiInputBase-inputMultiline MuiInput-inputMultiline"></textarea>
              </div>
            </div>
          </span>
        </div>
      </article>

        { props.comments.map((item, i) => {
            return (
              <article key={i} className="comment">
                <div className="avatar">
                  <div className="MuiAvatar-root MuiAvatar-circular makeStyles-smallAvatar-16">
                    <img src={'/api/users/photo/'+item.postedBy._id} className="MuiAvatar-img"/>
                  </div>
                </div>
                <div className="content">
                  <span className="MuiTypography-root MuiCardHeader-title MuiTypography-body2 MuiTypography-displayBlock">
                    <p className="makeStyles-commentText-18">
                    <Link to={"/user/" + item.postedBy._id}>{item.postedBy.name}</Link>
                      <br/>{item.text}
                      <span className="makeStyles-commentDate-19">            
                      {(new Date(item.created)).toDateString()} |
                      {auth.isAuthenticated().user._id === item.postedBy._id && 
                      <span onClick={deleteComment(item)} className="label"><Bin/></span>
                       }
                      </span>
                    </p>
                  </span>
                </div>
              </article>
            )
              })
        }
    </CommentContainer>
    )
}
{/* <Icon onClick={deleteComment(item)} className={classes.commentDelete}>delete</Icon> */}
Comments.propTypes = {
  postId: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  updateComments: PropTypes.func.isRequired
}