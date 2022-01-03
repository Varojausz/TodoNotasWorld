import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { withRouter } from 'react-router'
/* import NavItems from './NavItems' */
/* import {connect} from 'react-redux' */
import { useSelector } from 'react-redux'
/* import {signOut} from '../../store/reducers/authReducer' */
import {useDispatch} from 'react-redux'
import { auth } from '../../config/fbconfig'



const Navbar = withRouter(({history}) => {
  const isActive = (history, path) => {
    if (history.location.pathname == path) {
      return {color: '#774081'}
    } else {
      return {color: '#ffffff'}
    }
  }
  console.log(isActive(history, '/favorites'))
    const dispatch = useDispatch()
    const handleSignOut = () => {
        auth.signOut()
        .then(() => {
            console.log('Logged Out succesfully')
            dispatch({type: 'SIGN_OUT'})
        })  
    }      
    const uid = useSelector((state) => {
        return state.firebase.auth.uid
    })
    console.log(uid)

    const markUp = uid? (
<nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <div className="container-fluid">
    <Link style={isActive(history, '/')} to="/" className="navbar-brand" >Foro</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
        <li className="nav-item">
            <NavLink style={isActive(history, '/misnotas')} className="nav-link active" aria-current="page" to="/misnotas">Mis Notas</NavLink>
        </li>
        <li className="nav-item">
            <NavLink style={isActive(history, '/favorites')} className="nav-link active" aria-current="page" to="/favorites">Favoritos</NavLink>
        </li>
        <li className="nav-item">
            <NavLink style={isActive(history, '/logout')} onClick={handleSignOut} className="nav-link active" aria-current="page" to="/signin">Log Out</NavLink>
        </li>
    </ul>
    </div>
  </div>
</nav>
    ): (
<nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <div className="container-fluid">
    <Link style={isActive(history, '/')} to="/" className="navbar-brand" >Foro</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
        <li className="nav-item">
            <NavLink style={isActive(history, '/favorites')} className="nav-link active" aria-current="page" to="/favorites">Favoritos</NavLink>
        </li>
        <li className="nav-item">
            <NavLink style={isActive(history, '/signin')} className="nav-link active" aria-current="page" to="/signin">Log In</NavLink>
        </li>
        <li className="nav-item">
            <NavLink style={isActive(history, '/signup')} className="nav-link active" aria-current="page" to="/signup">Registrar</NavLink>
        </li>
    </ul>
    </div>
  </div>
</nav>
    )

    return (
      markUp
    )
})

/* const mapStateToProps = (state) => {
  console.log(state)
}
export default connect(mapStateToProps)(Navbar) */
export default Navbar

