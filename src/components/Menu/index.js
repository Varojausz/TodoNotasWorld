import React, {useState} from 'react'
import {Link, withRouter} from 'react-router-dom'
import { auth } from '../../config/fbconfig'
import {useDispatch} from 'react-redux'
import {MenuStyle, MenuHomeStyle, MenuButtonStyle, ToggleContent} from './styles'
/* import House from '!svg-react-loader?name=Icon!./../../assets/images/House.svg'
import Toggle_icon from '!svg-react-loader?name=Icon!./../../assets/images/Toggle_icon.svg' */
import { ReactComponent as House } from './../../assets/images/House.svg'; 
import { ReactComponent as Toggle_icon } from './../../assets/images/Toggle_icon.svg'; 

import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'


const isActive = (history, path) => {
    if (history.location.pathname == path)
      return '#ff4081'
    else
      return '#ffffff'
  }

const Menu = withRouter(({history, uid, signOut}) => {
        const lol = "rgb(255, 64, 129)" 
        const [toggle, setToggle] = useState(false);

        const handleSignOut = () => {
            signOut()
        }
        return (
            <MenuStyle>
                    <span className="title">Social Media</span>
                    <Link to="/">
                        <MenuHomeStyle type="button" aria-label="Home" color={isActive(history, "/")}>
                            <span className="Icon-label">
                                <House/>
                            </span>
                            <span className="root" />
                        </MenuHomeStyle>
                    </Link>
                    <button className="ToggleButton" onClick={() => setToggle(!toggle)}><Toggle_icon/></button>
                    <ToggleContent height={'48px'} toggle={toggle}>
                        <Link to="/favorites">
                            <MenuButtonStyle tabIndex={0} type="button" color={isActive(history, "/favorites")}>
                                <span className="Button-label">Favorites</span>
                                <span className="root" />
                            </MenuButtonStyle>
                        </Link>
                        {
                            uid ?  (
                                <span>
                                <Link to={"/user/" + uid}>
                                    <MenuButtonStyle type="button" color={isActive(history, "/user/" + uid)}>
                                        <span className="Button-label">Profile</span>
                                        <span className="root" />
                                    </MenuButtonStyle>
                                </Link>
                                <MenuButtonStyle onClick={handleSignOut} type="button" color={isActive(history, "/signout")}>
                                    <span className="Button-label">Sign Out</span>
                                    <span className="root" />
                                </MenuButtonStyle>
                            </span>
                            ) : (
                                <span>
                                <Link to="/signup">
                                    <MenuButtonStyle tabIndex={0} type="button" color={isActive(history, "/signup")}>
                                        <span className="Button-label">Sign up</span>
                                        <span className="root" />
                                    </MenuButtonStyle>
                                </Link>
                                <Link to="/signin">
                                    <MenuButtonStyle tabIndex={0} type="button" color={isActive(history, "/signin")}>
                                    <span className="Button-label">Sign In</span>
                                    <span className="root" />
                                    </MenuButtonStyle>
                                </Link> 
                            </span>
                            )
                        }
                    </ToggleContent>
            </MenuStyle>
        )
    })

const mapStateToProps = state => {
    return {
        uid: state.firebase.auth.uid
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)