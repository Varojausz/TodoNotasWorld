import React, {useState, useEffect, useRef} from 'react'
/* import PropTypes from 'prop-types' */
import {Post, PostForm, FormUser, FormField, FormSubmit} from './styles'
/* import Camera from '!svg-react-loader?name=Icon!./../../assets/images/Camera.svg' */
import { ReactComponent as Camera } from '../../../../assets/images/camera.svg'; 
import useFocusHover from '../../../../assets/CustomHooks/useFocusHover'
import { connect } from 'react-redux'
import {getFirebase} from 'react-redux-firebase'
import {useFirestoreConnect} from 'react-redux-firebase'
import {addTask} from '../../../../store/actions/taskActions'
import { memo } from 'react';




function NewPost ({props, addTask, uid, usuario, task}){
  const [images, setImages] = useState({
    src: '',
    image: '',
  })
  const [values, setValues] = useState({
    content: '',
    photo: '',
    error: '',
    userName: usuario.name? usuario.name : 'Anónimo',
    request: false,
    data: ''
  })
  const inputRef = useRef()

  const fetching = () => {
    const formData = new FormData();
    const imageFile = inputRef.current.files[0]
    formData.append('image', imageFile);
    formData.append('album', 'ShBFecvIzWtNoIS');
    console.log(images.image)
  
    fetch('https://api.imgur.com/3/image', {
      //mode: 'cors',
      method: 'POST',
      headers: {
        Authorization: 'Client-ID 9949aebac6be83c',
      },
      body: formData
    }).then((data) => data.json()).then((data) => {
      setValues({...values, data: data.data.link, request: true, userName: usuario.name})
    }) 
    .catch(error => {
      console.error(error);
      //alert('Upload failed: ' + error);
    });
    }


    useEffect(() => {
      if(values.request === true) {
        setValues({...values, request: false})
        addTask(values)
      }
    },[values.data])




  

  const [focus, handleFocus, handleFocusOut, hover, handleHover, handleHoverOut] = useFocusHover();

  function handleSubmit (e) {
      e.preventDefault();
      console.log(images.image)

      if (images.image !== '') {
        console.log('haciendo fetching')
        fetching()
      }else {
        addTask(values)
      }
      console.log(values)
      document.querySelector('form').reset()
  }
  const handleChange = name => event => {
    const value = event.target.value
    setValues({...values, [name]: value })

    if(name==='photo') {
      console.log(event.target)
      console.log(URL.createObjectURL(event.target.files[0]))
      setImages({
        src: URL.createObjectURL(event.target.files[0]), image: event.target.files[0]
      })
    }
    
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
              <span>{usuario.name ? usuario.name : 'Anónimo'}</span>
            </div>
          </FormUser>

          <FormField focus={focus} hover={hover}>
            <article className="MuiFormControl-root MuiTextField-root makeStyles-textField-39 MuiFormControl-marginNormal">
              <img src={images.src} alt="" />
              <div onMouseOut={handleHoverOut} onMouseOver={handleHover} onFocus={handleFocus} onBlur={handleFocusOut} className="input" className="textarea-container">
                <textarea aria-invalid="false" onChange={handleChange('content')} placeholder="Share your thoughts ..." rows="3" className="MuiInputBase-input MuiInput-input MuiInputBase-inputMultiline MuiInput-inputMultiline"></textarea>
              </div>
            </article>
            {uid && (
              <>
              <input onChange={handleChange('photo')} ref={inputRef} accept="image/*" className="makeStyles-input-38" id="icon-button-file" type="file"/>
              <label htmlFor="icon-button-file">
                <span>
                  <Camera/>
                </span>
              </label>
              </>
            )}
            <span className="makeStyles-filename-41"></span>
          </FormField>

          <FormSubmit values={values}>
            <button disabled={!values.content} onClick={handleSubmit} type="button">
              <span className="MuiButton-label">POST</span>
              <span className="root"></span>
            </button>
          </FormSubmit>
        </PostForm>
      </Post>
    )

}

const mapDispatchToProps = dispatch => {
  return {
      addTask: task => dispatch(addTask(task))
  }
}

const mapStateToProps = state => {
  return {
    uid: state.firebase.auth.uid,
    usuario: state.auth,
    task: state.task
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewPost)

/* NewPost.propTypes = {
  addUpdate: PropTypes.func.isRequired
} */