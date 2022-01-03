import React, {useEffect, useState} from 'react'
import useInput from '../../customhook/useInput'
/* import { signIn } from '../../store/actions/authActions' */
import { auth } from '../../config/fbconfig'
import {connect} from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'


const SignIn = () => {
    const [email,bindEmail,resetEmail] = useInput("")
    const [password,bindPassword,resetPassword] = useInput("")
    const [name,bindName,resetName] = useInput("")
    const [redirect, setRedirect] = useState(false)
    const dispatch = useDispatch()
    const creds = {
        email,
        password
    }

    function handleSubmit (e) {
        e.preventDefault()
        /* signIn(creds) */

        auth.signInWithEmailAndPassword(creds.email, creds.password)
        .then(() => {
            console.log('Te has logeado de puta madre')
            setRedirect(true)
            dispatch({type: "SIGN_IN", payload: {email: creds.email, password: creds.password}});
            
        })
        .catch((err) => {
            dispatch({type: 'SIGN_IN_ERR'}, err)
        })

        /* console.log(email,password) */
        resetEmail()
        resetPassword()

        localStorage.setItem('name', name)
        resetName()
    }

/*     const uid = useSelector((state) => {
        return state.firebase.auth.uid, console.log(state)
    }) */
    console.log(redirect)
        if (redirect) {
            return <Redirect to="/"/>
        }
        return (
                <div className="section">
                <form onSubmit={handleSubmit} className="success" autoComplete="off">
                    <legend><h4>Sign In</h4></legend>
                    <div className="mb-3">
                        <label htmlFor="note_title" className="form-label">Email</label>
                        <input {...bindEmail} type="email" className="form-control" id="note_title"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="note_content" className="form-label">Contraseña</label>
                        <input {...bindPassword} type="password" className="form-control" id="note_content"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="note_name" className="form-label">Nickname</label>
                        <input {...bindName} type="text" className="form-control" id="note_name"></input>
                    </div>
                    <button onClick={handleSubmit} type="submit" className="btn btn-primary">Sign In</button>
                </form>
            </div>  
        )
}

/* const mapStateToProps = state => {
    console.log(state)
    const uid = state.firebase.auth.uid
    return {
        uid: uid
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(null,mapDispatchToProps)(SignIn)
export default connect(mapStateToProps,mapDispatchToProps)(SignIn) //Este es cuando el mapStateToProps está definido, en caso contrario usar null
 */
export default SignIn