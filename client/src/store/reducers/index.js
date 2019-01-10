import {combineReducers} from 'redux';
import error from "./error";
import currentUser from './currentUser';
import messages from "./messages";

const rootReducer = combineReducers({
    error,
    currentUser,
    messages,
})

export default rootReducer;