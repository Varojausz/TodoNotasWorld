import {toast} from 'react-toastify'
const initialState = {
    name: null,
    date: null,
    email: null,
    password: null,
    userId: null
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SIGN_UP':
            toast("Welcome")
            return state.name = action.payload.name, state.date = action.payload.date, state.email = action.payload.email, state.password = action.payload.password, state.userId = action.payload.userId, console.log(state)
        case 'SIGN_UP_ERR':
            console.log("Could not create the user", action.payload.err)
            return state

        default: return state
    }
}

export default userReducer