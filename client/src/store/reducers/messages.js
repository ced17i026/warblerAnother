import { ADD_MESSAGES, REMOVE_MESSAGES } from '../actionsTypes';

export default (state = {messages:[]},action)=>{
    switch(action.type){
        case ADD_MESSAGES:
         return {...state,messages: action.messages};
        case REMOVE_MESSAGES:
         return {...state,messages:[]};
        default:
            return state;
    }
}