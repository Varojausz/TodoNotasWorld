import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { ReactComponent as Bin } from '../../../../assets/images/Bin.svg'; 
import {deleteComment} from '../../../../store/actions/taskActions';
import {connect} from 'react-redux'


function Comment ({state, comment, deleteComment, task, index}) {


  const handleRemove = (comment, task) => {
    deleteComment(comment, task)
  }

  const deleteMarkup = (comment.authId === state.user.authId || comment.authId === 'Anónimo' || state.user.authId === 'Y9llS1eWmQQh3lXoAYbVsdHMJNt2') ? 
  <button type="button">
    <span className="label"><Bin onClick={() => handleRemove(comment, task)}/></span>
    <span className="root"></span>
  </button>  : null 


  const photoURL = 'https://i.imgur.com/5H0KCsy.png'

    return (
              <article key={index} className="comment">
                  <div className="avatar">
                    <div className="MuiAvatar-root MuiAvatar-circular makeStyles-smallAvatar-16">
                      <img src={comment.data ? comment.data : photoURL} className="MuiAvatar-img"/>
                    </div>
                  </div>

                  <div className="content">
                    <span className="">
                      <p className="makeStyles-commentText-18">
                      <Link>{comment.name}</Link>
                        <br/>{comment.content}
                        <span className="makeStyles-commentDate-19">            
                        {(new Date(comment.date)).toDateString()} |
                        
                        </span>
                      </p>
                    </span>
                  </div>
                  
                  <div className="action">
                    {deleteMarkup}
                  </div>

              </article>
    )
}

const mapDispatchToProps = dispatch => {
  return {
    deleteComment: (comment, task) => dispatch(deleteComment(comment, task)),
  }
}
const mapStateToProps = state => {
  return {
    uid: state.firebase.auth.uid,
    state: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)
