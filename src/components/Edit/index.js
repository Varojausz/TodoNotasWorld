import React, {useState, useEffect, useRef} from 'react'
import { connect } from 'react-redux'
import {ProfilePaper, HeaderAvatar, HeaderProfile, SectionFieldStyle, Circular, InvalidSubmit, SectionSubmitStyle,} from './styles'
import InputWithLabel from '../InputWithLabel'
import useFocusHover from '../../assets/CustomHooks/useFocusHover'
import { ReactComponent as Exclamation } from '../../assets/images/Exclamation.svg'; 
import { ReactComponent as Camera } from '../../assets/images/camera.svg'; 
import { deleteUserAction } from '../../store/actions/authActions'
import { editUser } from '../../store/actions/userActions'



const Edit = ({uid, tasks, usuario, task, state, deleteUserAction,id, editUser}) => {

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
        setUser({...user, data: data.data.link, request: true, storeId: state.user.storeId, email: user.email})
      }) 
      .catch(error => {
        console.error(error);
        //alert('Upload failed: ' + error);
      });
    }


    const [user, setUser] = useState({
        email: state.user.email ? state.user.email : '',
        password: '',
        oldPassword: '',
        name: state.user.name,
        storeId: state.user.storeId ? state.user.storeId : '',
        authId: state.user.authId ? state.user.authId : '',
        date: state.user.date ? state.user.date : '',
        error: '',
        request: false
    })

    const [images, setImages] = useState({
        src: '',
        image: ''
    })

    const handleChange = name => event => {
        const value = event.target.value
        setUser({...user, [name]: value })
    
        if(name==='photo') {
          console.log(event.target)
          console.log(URL.createObjectURL(event.target.files[0]))
          setImages({
            src: URL.createObjectURL(event.target.files[0]), image: event.target.files[0]
          })
        }
        console.log(images.src)
        
      }

    function handleSubmit (e) {
        if(user.oldPassword===state.auth.password) {
            setUser({...user, error: ''})
            fetching()

        } else {
            setUser({...user, error: true})
        }
/*         e.preventDefault()
        props.signIn(user) */
    }



    useEffect(() => {
        if(user.request === true) {
          setUser({...user, request: false})
          editUser(user)
        }
      },[user.data])

    const [focus, handleFocus, handleFocusOut, hover, handleHover, handleHoverOut] = useFocusHover();

    return (
        <ProfilePaper>
            <SectionFieldStyle display='flex' justify='center' direction='column'>

                <HeaderProfile name='HeaderProfile' padding={['4','4','16','16']} height='240px' width='100%' justify='center' margin={['0','0','0','0']}>
                    <HeaderAvatar name='HeaderAvatar' hover={hover} display='flex' justify='center' margin={['0','0','0','0']} onMouseLeave={handleHoverOut}>
                    <input id="icon-button-file" onChange={handleChange('photo')} ref={inputRef} accept="image/*" className="makeStyles-input-38" id="icon-button-file" type="file"/>
                        <label htmlFor="icon-button-file" className='circular' onMouseOver={handleHover} >
                            <img onMouseOver={handleHover} style={{position: 'absolute', width: '100%', height: '100%'}} src={images.src ? images.src : state.user.data} alt=""/>
                            <Camera onMouseOver={handleHover}/>
                        </label>
                    </HeaderAvatar>
                </HeaderProfile>


                <br/>
                <InputWithLabel value={user.email} id="email" label="Email" type="email" handleChange={handleChange('email')}>
                    New email
                </InputWithLabel>
                <br/>
                <InputWithLabel value={user.name} id="name" label="Name" type="text" handleChange={handleChange('name')}>
                    New name
                </InputWithLabel>
                <br />
                <InputWithLabel value={user.oldPassword} id="password" label="Password" type="password" handleChange={handleChange('oldPassword')}>
                    Password
                </InputWithLabel>
                <br />
{/*                 <InputWithLabel value={user.password} id="OldPassword" label="Password" type="password" handleChange={handleChange('password')}>
                    New password
                </InputWithLabel> */}
                <br/> 
                {user.error &&
                    <InvalidSubmit>
                        <Exclamation/>
                        The password is incorrect
                    </InvalidSubmit>
                }
            </SectionFieldStyle>

            <SectionSubmitStyle>
                <button onClick={handleSubmit} tabIndex="0" type="button">
                    <span className="MuiButton-label">Submit</span>
                    <span className="MuiTouchRipple-root"></span>
                </button>
            </SectionSubmitStyle>
        </ProfilePaper>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        deleteUserAction: (id) => dispatch(deleteUserAction(id)),
        editUser: (user) => dispatch(editUser(user))
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        tasks: state.firestore.ordered.tasks,
        uid: state.firebase.auth.uid,
        id: state.user.id,
        usuario: state.auth,
        task: state.task,
        state: state
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Edit)