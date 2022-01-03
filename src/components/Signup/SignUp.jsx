import React, {useState} from 'react'
import useInput from '../../customhook/useInput'
import { auth } from '../../config/fbconfig'
import {connect} from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'



const SignUp = () => {
    const [email,bindEmail,resetEmail] = useInput("")
    const [password,bindPassword,resetPassword] = useInput("")
    const [name,bindName,resetName] = useInput("")
    const [redirect, setRedirect] = useState(false)
    console.log(redirect)
    const dispatch = useDispatch()
    const creds = {
        email,
        password
    }

    function handleSubmit (e) {
        e.preventDefault()
        /* signIn(creds) */

        auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            console.log('Te has registrado de puta madre')
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
    console.log(redirect)

    const uid = useSelector((state) => {
        return state.firebase.auth.uid
    })
        
        if (redirect) {
            return <Redirect to="/"/>
        }
        return (
        <div className="section">
            <form onSubmit={handleSubmit} className="success" autoComplete="off">
                <legend><h4>Sign Up</h4></legend>
                <div className="mb-3">
                    <label htmlFor="note_title" className="form-label">Email</label>
                    <input {...bindEmail} type="email" className="form-control" id="note_title"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="note_content" className="form-label">Contraseña (al menos 6 caracteres)</label>
                    <input {...bindPassword} type="password" className="form-control" id="note_content"></input>
                </div>
                <div className="mb-3">
                        <label htmlFor="note_name" className="form-label">Nickname</label>
                        <input {...bindName} type="text" className="form-control" id="note_name"></input>
                </div>
                <button onClick={handleSubmit} type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
        )
}

export default SignUp