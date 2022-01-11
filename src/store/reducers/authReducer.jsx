import {toast} from 'react-toastify'
import { useFirestoreConnect} from 'react-redux-firebase'


const authReducer = (state = {}, action) => {
    switch(action.type) {

        case 'SIGN_IN_ERROR':
            toast.error("Sign in error")
            return state
        case 'SIGN_OUT':
            toast.info("You signed out")
            state = {}
            return state
        case 'SIGN_UP':
            toast("Welcome")
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password,
                name: action.payload.name
            }
        case 'SIGN_IN':
            toast("Welcome back ")
            console.log(action.payload)
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password,
                name: action.payload.name
            }

        default: return state
    }
}

export default authReducer