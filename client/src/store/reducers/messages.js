import { ADD_MESSAGES, REMOVE_MESSAGES } from '../actionsTypes';

export default (state = [],action)=>{
    switch(action.type){
        case ADD_MESSAGES:
            return [...action.messages];
        case REMOVE_MESSAGES:
            return state.filter(message=>message._id !== action.id);
        default:
            return state;
    }
}