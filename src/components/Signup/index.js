import React, {useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import {FormStyle, SectionFieldStyle, SectionSubmitStyle, InvalidSubmit} from './styles'
/* import Exclamation from '!svg-react-loader?name=Icon!./../../assets/images/Exclamation.svg' */
import { ReactComponent as Exclamation } from '../../assets/images/Exclamation.svg'; 
import InputWithLabel from '../InputWithLabel'
import { auth } from '../../config/fbconfig'
import { useDispatch, useSelector } from 'react-redux'
import {getFirebase} from 'react-redux-firebase'


export default function Signup(props) {
  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    name: '',
    logged: '',
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

    auth.createUserWithEmailAndPassword(values.email, values.password)
    .then(() => {
        console.log('Te has logeado de puta madre')
        setValues({...values, logged: true})   
    })
    .catch((err) => {
      setValues({email: "", password: "", error: "User alredy exists"})
    })
/*         localStorage.setItem('name', name)
        resetName() */
    }
    const uid = useSelector((state) => {
      return state.firebase.auth.uid ? state.firebase.auth.uid : null
    })

    useEffect(() => {
      console.log(values)
      if(values.logged === true) {
        const firestore = getFirebase().firestore()
        firestore.collection('users')
        .add({
            name: values.name,
            date: new Date(),
            userId: uid
        }).then(() => {
          setValues({redirectToReferrer: true})
          dispatch({type: "SIGN_UP", payload: {email: values.email, password: values.password, name: values.name, date: new Date(), userId: uid}});
        })
        .catch((err) => {
          dispatch({type: 'SIGN_UP_ERR', payload: {error: err}})
        })

      }
    },[values.logged])

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
                    <h6>Sign Up</h6>
                    <br/>
                    <InputWithLabel value={values.name} id="name" label="Name" type="text" handleChange={handleChange('name')}>
                        Name
                    </InputWithLabel>
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