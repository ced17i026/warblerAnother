import {apiCall} from "../../services/api";
import{ADD_MESSAGES} from "../actionsTypes";
import {addError} from "./error";
export const Messages = (messages)=>{
    return {
        type:ADD_MESSAGES,
        messages,
    }
}

export default function(id){
    return dispatch=>{
        return new Promise((resolve,reject)=>{
            return apiCall('get',`http://localhost:3001/api/user/${id}/message`)
                    .then((data)=>{
                        dispatch(Messages(data));
                        resolve();
                    }).catch(err=>{
                        dispatch(addError(err));
                        reject();
                    })
        })
    }
}