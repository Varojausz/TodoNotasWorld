import React, {useState, useEffect} from 'react'
/* import PropTypes from 'prop-types' */
import {Post, PostForm, FormUser, FormField, FormSubmit} from './styles'
/* import Camera from '!svg-react-loader?name=Icon!./../../assets/images/Camera.svg' */
import { ReactComponent as Camera } from '../../../../assets/images/camera.svg'; 
import useFocusHover from '../../../../assets/CustomHooks/useFocusHover'
import { useDispatch, useSelector } from 'react-redux'
import {getFirebase} from 'react-redux-firebase'
import {useFirestoreConnect} from 'react-redux-firebase'



export default function NewPost (props){
  const [values, setValues] = useState({
    text: '',
    photo: 'https://i.imgur.com/5H0KCsy.png',
    error: '',
  })


  console.log(props.usuario)

  const [focus, handleFocus, handleFocusOut, hover, handleHover, handleHoverOut] = useFocusHover();

  const dispatch = useDispatch()

  const uid = useSelector((state) => {
    return state.firebase.auth.uid ? state.firebase.auth.uid : null
  })


  function handleSubmit (e) {
      e.preventDefault()

      const firestore = getFirebase().firestore()
      firestore.collection('tasks')
      .add({
          content: values.text,
          name: values.name,
          authorId: uid,
          favorite: false,
          date: new Date()
      })
      .then(()=> {
          dispatch({
              type: "ADD_TASK",
              payload: {
                  title: "",
                  content: values.text
              }
          })
      })
      .catch((err) => {
          setValues({error: err})
          dispatch({
              type: "ADD_TASK_ERR",
              err
          })
      })




      console.log(values.text)
  }
  const handleChange = name => event => {
    const value = name === 'photo'
      ? event.target.files[0]
      : event.target.value
    setValues({...values, [name]: value })
    
  }
  /* const photoURL = values.user._id ?'/api/users/photo/'+ values.user._id : '/api/users/defaultphoto' */
  const photoURL = 'https://i.imgur.com/5H0KCsy.png'
    return (
      <Post>
        <PostForm>
          <FormUser>
            <div className="avatar">
              <div className="MuiAvatar-root MuiAvatar-circular">
                <img src={photoURL}/>
              </div>
            </div>
            <div className="content">
              <span>{props.usuario}</span>
            </div>
          </FormUser>

          <FormField focus={focus} hover={hover}>
            <article className="MuiFormControl-root MuiTextField-root makeStyles-textField-39 MuiFormControl-marginNormal">
              <div onMouseOut={handleHoverOut} onMouseOver={handleHover} onFocus={handleFocus} onBlur={handleFocusOut} className="input" className="textarea-container">
                <textarea aria-invalid="false" onChange={handleChange('text')} placeholder="Share your thoughts ..." rows="3" className="MuiInputBase-input MuiInput-input MuiInputBase-inputMultiline MuiInput-inputMultiline"></textarea>
              </div>
            </article>
            <input onChange={handleChange} accept="image/*" className="makeStyles-input-38" id="icon-button-file" type="file"/>
            <label htmlFor="icon-button-file">
              <span>
                <Camera/>
              </span>
            </label>
            <span className="makeStyles-filename-41"></span>
          </FormField>

          <FormSubmit values={values}>
            <button onClick={handleSubmit} type="button">
              <span className="MuiButton-label">POST</span>
              <span className="root"></span>
            </button>
          </FormSubmit>
        </PostForm>
      </Post>
    )

}

/* NewPost.propTypes = {
  addUpdate: PropTypes.func.isRequired
} */