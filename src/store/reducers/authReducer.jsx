import {toast} from 'react-toastify'
import { useFirestoreConnect} from 'react-redux-firebase'



const authReducer = (state = {}, action) => {
    switch(action.type) {

        case 'SIGN_IN_ERROR':
            toast.error("Sign in error")
            return {
                ...state,
                errorSignin: action.payload
            }
        case 'SIGN_UP_ERROR':
            toast.error("Sign up error")
            return {
                ...state,
                error: action.payload.error,
                error2: action.payload.error2
            }
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
        case 'DELETE':
            toast.warn("User deleted")
            return {
                state: {}
            }
        case 'SIGN_IN':
            toast("Welcome back ")
            console.log(action.payload)
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password,
                name: action.payload.name,
                storeId: action.payload.storeId
            }

        default: return state
    }
}

export default authReducer