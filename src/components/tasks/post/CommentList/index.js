import React, {useState, useEffect} from 'react'
/* import {StyledList} from './styles' */
import {connect} from 'react-redux'
import {compose} from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

import { CommentContainer } from './styles'
import {addComment} from '../../../../store/actions/taskActions'
import Comment from '../Comment'
import useFocusHover from '../../../../assets/CustomHooks/useFocusHover'

const CommentList = ({task, state, addComment, storedComments}) => {



    const [focus, handleFocus, handleFocusOut, hover, handleHover, handleHoverOut] = useFocusHover();

    const [comment, setComment] = useState({
      content: '',
      task: ''
    })

    //useFirestoreConnect([ { collection: 'tasks', doc: task.id, subcollections: [{ collection: `/tasks/${task.id}/comments` }], storeAs: 'comments',orderBy:['date','desc'] } ])
    
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
    

    const handleChange = event => {
      setComment({content: event.target.value, task: task})
    }
    const handleSubmit = (comment, task) => event =>{
      console.log(task)
      if(event.keyCode == 13 && event.target.value && comment.content!=='\n'){
        console.log(event.target.value)
        addComment(comment)
      }
    }

    const photoURL = 'https://i.imgur.com/5H0KCsy.png'

    //console.log(comment)

    return (
            <CommentContainer focus={focus} hover={hover}>
            <article className="comment-field">
              <div className="avatar">
                <div className="MuiAvatar-root MuiAvatar-circular makeStyles-smallAvatar-16">
                  <img src={imagen ? imagen : photoURL} className="MuiAvatar-img"/>
                </div>
              </div>
      
              <div className="content">
                <span className="MuiTypography-root MuiCardHeader-title MuiTypography-body2 MuiTypography-displayBlock">
                  <div className="MuiFormControl-root MuiTextField-root makeStyles-commentField-17 MuiFormControl-marginNormal">
                    <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl MuiInputBase-multiline MuiInput-multiline">
                      <textarea onKeyDown={handleSubmit(comment, task)} onChange={handleChange} onMouseOut={handleHoverOut} onMouseOver={handleHover} onFocus={handleFocus} onBlur={handleFocusOut} rows="1"  placeholder="Write something ..." className="MuiInputBase-input MuiInput-input MuiInputBase-inputMultiline MuiInput-inputMultiline"></textarea>
                      <textarea  className="MuiInputBase-input MuiInput-input MuiInputBase-inputMultiline MuiInput-inputMultiline"></textarea>
                    </div>
                  </div>
                </span>
              </div>
            </article>
      
            <div style={{marginTop: '5px'}}>
                {storedComments && storedComments.map((comment,index) => <Comment task={task} comment={comment} key={index++}/>)}
            </div>
          </CommentContainer>

    )
}

const mapDispatchToProps = dispatch => {
    return {
      addComment: (comment) => dispatch(addComment(comment))
    }
  }
  const mapStateToProps = state => {
    return {
      uid: state.firebase.auth.uid,
      state: state
    }
  }
  

  export default connect(mapStateToProps, mapDispatchToProps)(CommentList)