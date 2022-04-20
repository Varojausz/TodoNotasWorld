import React, {useState, useEffect, useRef} from 'react'
import {Redirect} from 'react-router-dom'
/* import PropTypes from 'prop-types' */
import {Post, PostForm, FormUser, FormField, FormSubmit} from './styles'
import useFocusHover from '../../assets/CustomHooks/useFocusHover'
import { connect } from 'react-redux'
import {getFirebase} from 'react-redux-firebase'
import {useFirestoreConnect} from 'react-redux-firebase'
import {addTask} from '../../store/actions/taskActions'
import { memo } from 'react';




function Spotify ({props, uid, usuario, state}){
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

      const photoURL = 'https://i.imgur.com/5H0KCsy.png'

  const [focus, handleFocus, handleFocusOut, hover, handleHover, handleHoverOut] = useFocusHover();

    const scope = 'ugc-image-upload user-read-playback-state user-modify-playback-state ser-read-currently-playing streaming app-remote-control user-read-email user-read-privateplaylist-read-collaborativeplaylist-modify-publicplaylist-read-privateplaylist-modify-privateuser-library-modifyuser-library-read user-top-read user-read-playback-position user-read-recently-played user-follow-read user-follow-modify'
    const redirect_uri = 'http://localhost:3000/spotify'

    var client_id = 'ebd34488595244f5b55634c34948e999';
    var client_secret = 'ac9577feff4e4c8e8d7ad12848b72958';

    const params = {
        response_type: 'code',
        client_id: client_id,
        //scope: scope,
        redirect_uri: redirect_uri
      }

    var queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
    console.log(`https://accounts.spotify.com/authorize?`+queryString)

    fetch(`https://accounts.spotify.com/authorize`+queryString, {
        method: "GET",
        mode: 'no-cors', /* estara bien esta wea wey?? */
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic' + btoa(client_id + ':' + client_secret)  
        }
/*         body: {
            grant_type: "client_credentials",
            redirectUri: "file:///C:/Users/Alvaro/Desktop/Programming/Web/Proyectos_propios/APIs/Spotify/index.html",
            client_id: 'ebd34488595244f5b55634c34948e999',
            client_secret: 'ac9577feff4e4c8e8d7ad12848b72958',
        } */

    }).then((data) => data.json()).then((data) => {
        console.log(data)
    })


  
    return (
      <Post>
        <PostForm>
          <FormUser>
            <div className="avatar">
              <div className="MuiAvatar-root MuiAvatar-circular">
                <img src={state.firebase.auth.uid ? (state.user.data ? state.user.data : photoURL) : photoURL}/>
              </div>
            </div>
            <div className="content">
              <span>{usuario.name ? usuario.name : 'Anónimo'}</span>
            </div>
          </FormUser>

          <FormField focus={focus} hover={hover}>
            <article className="MuiFormControl-root MuiTextField-root makeStyles-textField-39 MuiFormControl-marginNormal">
              <img height={images.image ? '200px' : '0px'} src={images.src} alt="" />
              <div onMouseOut={handleHoverOut} onMouseOver={handleHover} onFocus={handleFocus} onBlur={handleFocusOut} className="input textarea-container">
                <textarea aria-invalid="false" placeholder="Share your thoughts ..." rows="3" className="MuiInputBase-input MuiInput-input MuiInputBase-inputMultiline MuiInput-inputMultiline"></textarea>
              </div>
            </article>
          </FormField>

          <FormSubmit values={values}>
            <button disabled={!values.content} type="button">
              <span className="MuiButton-label">Login</span>
              <span className="root"></span>
            </button>
          </FormSubmit>
        </PostForm>
      </Post>
    )

}

const mapDispatchToProps = dispatch => {
  return {
      /* addTask: task => dispatch(addTask(task)) */
  }
}

const mapStateToProps = state => {
  return {
    uid: state.firebase.auth.uid,
    usuario: state.auth,
    state: state
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Spotify)

/* NewPost.propTypes = {
  addUpdate: PropTypes.func.isRequired
} */