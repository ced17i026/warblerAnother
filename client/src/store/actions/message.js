import {apiCall} from "../../services/api";
import{ADD_MESSAGES,REMOVE_MESSAGES} from "../actionsTypes";
import {addError} from "./error";
import {store} from "../../containers/App";
export const Messages = (messages)=>{
    return {
        type:ADD_MESSAGES,
        messages,
    }
}
export const removeMessage = (id)=>{
    return {
        type:REMOVE_MESSAGES,
        id
    }
}

export const AddNewMessage = (message)=>()=>{
    let {currentUser} = store.getState();
    const id = currentUser.user._id;
    return apiCall("post",`http://localhost:3001/api/user/${id}/message`,{message})
        .then((res)=>{
            //store.dispatch(Messages(res))
        })
        .catch((err)=>store.dispatch(addError(err)));
}
export const DeleteMessage = (userid,id)=>{
    return dispatch=>{
        return new Promise((resolve,reject)=>{
            return apiCall("delete",`http://localhost:3001/api/user/${userid}/message/${id}`)
                .then(res=>{
                    resolve();
                })
                .catch(err=>{dispatch(addError(err))});
        })
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