import {toast} from 'react-toastify'

const TaskReducer = (state = {}, {type, payload}) => {
    switch(type){
        case 'ADD_TASK':
            toast.success("added a task")
            return payload
        case 'ADD_TASK_ERR':
            toast.error("An error occured")
            return payload
        case 'REMOVE_TASK':
            toast.warn("a task was removed")
            return state
        case 'REMOVE_TASK_ERR':
            toast.error("a task remove error occured")
            return payload
        case 'EDIT_TASK':
            return payload


        case 'ADD_COMMENT':
            toast.success("Comentario añadido")
            return payload
        case 'ADD_COMMENT_ERR':
            toast.error("An error occured")
            return payload
        case 'DELETE_COMMENT':
            toast.warn("A comment was removed")
            return state
        case 'DELETE_COMMENT_ERR':
            toast.error("a task remove error occured")
            return payload


        case 'TOGGLE_FAV':
            toast.info("favorite was changed")
            return {
                ...state,
                favorite: payload
            }
        case 'TOGGLE_FAV_ERR':
            return payload

        default:
            return state
    }
}

export default TaskReducer