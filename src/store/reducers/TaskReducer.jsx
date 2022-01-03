const TaskReducer = (state = {}, {type, payload}) => {
    switch(type){
        case 'ADD_TASK':
            console.log("added a task")
            return state
        case 'ADD_TASK_ERR':
            console.log("An error occured")
            return state
        case 'EDIT_TASK':
            return payload

        default:
            return state
    }
}

export default TaskReducer