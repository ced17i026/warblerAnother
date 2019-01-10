import {ADD_ERROR,REMOVE_ERROR} from "../actionsTypes";

export const addError = error=>{
    return {
        type: ADD_ERROR,
        message: error
    }
}

export const removeError = ()=>{
    return {
        type: REMOVE_ERROR,
    }
}