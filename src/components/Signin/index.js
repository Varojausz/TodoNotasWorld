import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import {FormStyle, SectionFieldStyle, SectionSubmitStyle, InvalidSubmit} from './styles'
/* import Exclamation from '!svg-react-loader?name=Icon!./../../assets/images/Exclamation.svg' */
import { ReactComponent as Exclamation } from '../../assets/images/Exclamation.svg'; 
import InputWithLabel from '../InputWithLabel'
import { auth } from '../../config/fbconfig'
import { connect } from 'react-redux'
import {signIn} from '../../store/actions/authActions'


function Signin(props) {
  const [creds, setCreds] = useState({
    email: '',
    password: '',
    name: '',
    error: ''
  })

  const handleChange = name => event => {
    setCreds({ ...creds, [name]: event.target.value })
  }
/*   const handleChangeEmail = event => {
    setValues({ ...values, email: event.target.value })
  }
  const handleChangePassword = event => {
    setValues({ ...values, password: event.target.value })
  } */

  function handleSubmit (e) {
      e.preventDefault()
      props.signIn(creds)
  }
  const {from} = props.location.state || {
    from: {
      pathname: '/'
    }
  }
  if (props.auth.email) {
      return (<Redirect to={from}/>)
  }


    return (
        <div>
            <FormStyle>
                <SectionFieldStyle>
                    <h6>Sign In</h6>
                    <br/>
                    <InputWithLabel value={creds.email} id="email" label="Email" type="email" handleChange={handleChange('email')}>
                        Email
                    </InputWithLabel>
                    <br/>
                    <InputWithLabel value={creds.password} id="password" label="Password" type="password" handleChange={handleChange('password')}>
                        Password
                    </InputWithLabel>
                    <br/> 
                    {props.auth.errorSignin &&
                      <InvalidSubmit>
                        <Exclamation/>
                        {props.auth.errorSignin}
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

const mapStateToProps = state => {
  console.log(state)
  return {
      auth: state.auth,
      uid: state.firebase.auth.uid
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)