import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import {FormStyle, SectionFieldStyle, SectionSubmitStyle, InvalidSubmit} from './styles'
/* import Exclamation from '!svg-react-loader?name=Icon!./../../assets/images/Exclamation.svg' */
import { ReactComponent as Exclamation } from '../../assets/images/Exclamation.svg'; 
import InputWithLabel from '../InputWithLabel'
import { auth } from '../../config/fbconfig'
import { useDispatch, useSelector } from 'react-redux'


export default function Signin(props) {
  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    redirectToReferrer: false
  })
  const dispatch = useDispatch()

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }
/*   const handleChangeEmail = event => {
    setValues({ ...values, email: event.target.value })
  }
  const handleChangePassword = event => {
    setValues({ ...values, password: event.target.value })
  } */

    function handleSubmit (e) {
        e.preventDefault()
        /* signIn(creds) */

        auth.signInWithEmailAndPassword(values.email, values.password)
        .then(() => {
            console.log('Te has logeado de puta madre')
            setValues({redirectToReferrer: true})
            dispatch({type: "SIGN_IN", payload: {email: values.email, password: values.password}});
            
        })
        .catch((err) => {
            setValues({email: "", password: "", error: "User or password incorrect"})
            dispatch({type: 'SIGN_IN_ERR'}, err)
        })

/*         localStorage.setItem('name', name)
        resetName() */
    }
  const {from} = props.location.state || {
    from: {
      pathname: '/'
    }
  }
  const {redirectToReferrer} = values
  if (redirectToReferrer) {
      return (<Redirect to={from}/>)
  }

  console.log(values.error)

    return (
        <div>
            <FormStyle>
                <SectionFieldStyle>
                    <h6>Sign In</h6>
                    <br/>
                    <InputWithLabel value={values.email} id="email" label="Email" type="email" handleChange={handleChange('email')}>
                        Email
                    </InputWithLabel>
                    <br/>
                    <InputWithLabel value={values.password} id="password" label="Password" type="password" handleChange={handleChange('password')}>
                        Password
                    </InputWithLabel>
                    <br/> 
                    {values.error &&
                      <InvalidSubmit>
                        <Exclamation/>
                        {values.error}
                      </InvalidSubmit>
                    }
                </SectionFieldStyle>

                <SectionSubmitStyle>
                    <button onClick={handleSubmit} tabIndex="0" type="button">
                        <span className="MuiButton-label">Submit</span>
                        <span className="MuiTouchRipple-root"></span>
                    </button>
                </SectionSubmitStyle>
            </FormStyle>
        </div>
        

            
        
    )
}