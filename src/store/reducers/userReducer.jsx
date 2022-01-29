
const userReducer = (state = {}, action) => {
    switch(action.type) {
        case 'ADD_USER':
            return action.payload
        case 'EDIT_USER':
            state.name = action.payload.name
            state.photo = action.payload.photo
            state.data = action.payload.data
            state.date = action.payload.date
            state.email = action.payload.email
            state.authId = action.payload.authId
            state.storeId = action.payload.storeId
            console.log(action.payload)
            return state
        case 'DELETE_USER':
            return {
                state: {}
            }
        case 'USER_OUT':
            state = {}
            return state

        case 'ADD_USER_ERR':
            console.log("Could not create the user", action.payload.err.message)
            return state
        case 'EDIT_USER_ERR':
            console.log("Could not edit the user", action.payload.err.message)
            return state

        default: return state
    }
}

export default userReducer