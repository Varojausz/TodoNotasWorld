import {toast} from 'react-toastify'
import { useFirestoreConnect} from 'react-redux-firebase'
const initialState = {
    email: null,
    password: null
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SIGN_IN':
            toast("Welcome back ")
            state.email = action.payload.email
            state.password = action.payload.password      
            /* localStorage.setItem('state', state) */
            return state
        case 'SIGN_IN_ERROR':
            toast.error("Sign in error")
            return state
        case 'SIGN_OUT':
            toast("You signed out")
            return state?state.email = null:null,state? state.password = null:null

        default: return state
    }
}

export default authReducer