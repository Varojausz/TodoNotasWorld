import React, {useRef} from 'react'
import { auth } from '../config/fbconfig'
import './Signin.css'

function Signin () {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    function signUp (e) {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user =>{
            console.log(user)
        }).catch(err=> {
            console.log(err)
        })
    }


    function signIn (e) {
        e.preventDefault()
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user =>{
            console.log(user)
        }).catch(err=> {
            console.log(err)
        })
    }
    return (
        <div className="signin">
            <form action="">
                <h1>Sign In</h1>
                <input ref={emailRef} type="email" />
                <input ref={passwordRef} type="password" />
                <button onClick={signIn}>Sign In</button>
                <h6>Not yet registered? <span
                onClick={signUp}
                className="signin__link"
                >Sign Up</span></h6>
            </form>
        </div>
    )
}

export default Signin

