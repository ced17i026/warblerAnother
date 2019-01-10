import {apiCall} from "../../services/api";
import {SET_CURRENT_USER} from '../actionsTypes';
import {addError,removeError} from "./error";
export function setCurrentUser(data){
    return{
        type:SET_CURRENT_USER,
        user:data,
    }
}

export function logout(){
    return dispatch=>{
        localStorage.clear();
        dispatch(setCurrentUser({}));
    }
}

export function authUser(type,userData){
    return dispatch=>{
        return new Promise((resolve,reject)=>{
            return apiCall("post",`http://localhost:3001/api/user/${type}`,userData)
                    .then(data=>{
                        localStorage.setItem("jwtToken",data.token);
                        dispatch(setCurrentUser(data));
                        dispatch(removeError());
                        resolve();
                    }).catch(err=>{
                        dispatch(addError(err.data.message));
                        reject();
                    })
        })
    }
}