
const NoteReducer = (state = {}, action) => {
    switch(action.type){
        case 'ADD_NOTE':
            console.log("added a note")
            return state

        default:
            return state
    }
}

export default NoteReducer