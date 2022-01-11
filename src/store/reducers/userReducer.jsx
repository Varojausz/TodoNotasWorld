
const userReducer = (state = {}, action) => {
    switch(action.type) {
        case 'ADD_USER':
            state.name = action.payload.creds.name
            /* state.date = action.payload.creds.date, */
            state.email = action.payload.creds.email
            state.userId = action.payload.userId
            console.log(action.payload)
            return state
        case 'ADD_USER_ERR':
            console.log("Could not create the user", action.payload.creds.err)
            return state

        default: return state
    }
}

export default userReducer