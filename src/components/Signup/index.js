import React, {useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import {FormStyle, SectionFieldStyle, SectionSubmitStyle, InvalidSubmit} from './styles'
/* import Exclamation from '!svg-react-loader?name=Icon!./../../assets/images/Exclamation.svg' */
import { ReactComponent as Exclamation } from '../../assets/images/Exclamation.svg'; 
import InputWithLabel from '../InputWithLabel'
import { auth } from '../../config/fbconfig'
import { connect } from 'react-redux';
import {signUp} from '../../store/actions/authActions'
import {addUser} from '../../store/actions/userActions'


function Signup(props) {
  const [creds, setCreds] = useState({
    email: '',
    password: '',
    error: '',
    name: '',
  })

  const handleChange = name => event => {
    setCreds({ ...creds, [name]: event.target.value, date: new Date() })
  }
/*   const handleChangeEmail = event => {
    setValues({ ...values, email: event.target.value })
  }
  const handleChangePassword = event => {
    setValues({ ...values, password: event.target.value })
  } */

  function handleSubmit (e) {
      e.preventDefault()
      props.signUp(creds)
      /* props.addUser(creds) */
  }

  const {from} = props.location.state || {
    from: {
      pathname: '/'
    }
  }
  if (props.uid) {
    return (<Redirect to={from}/>)
}

    return (
        <div>
            <FormStyle>
                <SectionFieldStyle>
                    <h6>Sign Up</h6>
                    <br/>
                    <InputWithLabel value={creds.name} id="name" label="Name" type="text" handleChange={handleChange('name')}>
                        Name
                    </InputWithLabel>
                    <br/>
                    <InputWithLabel value={creds.email} id="email" label="Email" type="email" handleChange={handleChange('email')}>
                        Email
                    </InputWithLabel>
                    <br/>
                    <InputWithLabel value={creds.password} id="password" label="Password" type="password" handleChange={handleChange('password')}>
                        Password
                    </InputWithLabel>
                    <br/> 
                    {creds.error &&
                      <InvalidSubmit>
                        <Exclamation/>
                        {creds.error}
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
      uid: state.firebase.auth.uid
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signUp: (creds) => dispatch(signUp(creds)),
    addUser: (creds) => dispatch(addUser(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)