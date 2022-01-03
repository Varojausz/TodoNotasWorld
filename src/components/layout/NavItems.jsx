import React,{NavLink, Link} from 'react'

const NavItems = () => {
    return (
        <ul className="navbar-nav">
        <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/favorites">Favorites</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/signin">Sign In</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/signup">Sign Up</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/signin">Log Out</NavLink>
        </li>
    </ul>
    )
}

export default NavItems
