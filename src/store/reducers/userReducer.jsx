
const userReducer = (state = {}, action) => {
    switch(action.type) {
        case 'ADD_USER':
            state.name = action.payload.name
            state.photo = action.payload.photo
            state.date = action.payload.date
            state.email = action.payload.email
            state.userId = action.payload.userId
            state.id = action.payload.id
            console.log(action.payload)
            return state
        case 'DELETE_USER':
            return {
                state: {}
            }
        case 'ADD_USER_ERR':
            console.log("Could not create the user", action.payload.creds.err)
            return state

        default: return state
    }
}

export default userReducer