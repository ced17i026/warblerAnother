import {apiCall} from "../../services/api";
import {SET_CURRENT_USER} from '../actionsTypes';

export function setCurrentUser(data){
    return{
        type:SET_CURRENT_USER,
        data
    }
}


export function authUser(type,userData){
    return dispatch=>{
        return new Promise((resolve,reject)=>{
            return apiCall("post",`http://localhost:3000/${type}`,userData)
                    .then(data=>{
                        localStorage.setItem("jwtToken",data.token);
                        dispatch(setCurrentUser());
                        resolve();
                    })
        })
    }
}