import {toast} from 'react-toastify'

const TestReducer = (state = {}, {type, payload}) => {
    switch(type){
        case 'ADD_TEST':
            toast.success("added a test")
            return payload
        case 'ADD_TEST_ERR':
            toast.error("An error occured")
            return payload
        case 'REMOVE_TEST':
            toast.warn("a test was removed")
            return state
        case 'REMOVE_TEST_ERR':
            toast.error("a test remove error occured")
            return payload
        case 'EDIT_TEST':
            return payload

        default:
            return state
    }
}

export default TestReducer