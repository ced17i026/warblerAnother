import React from "react";
import Moment from "react-moment";
import {Link} from "react-router-dom";
import DefaultImg from "../images/warbler-logo.png";

export default ({date,text,username,Authorize,handleDelete,mId})=>(
    <div className="messageArea">
        <img src={DefaultImg} alt={username} height="100" width="100" className="profileImg"></img>
        <div>
            <Link to="/" >@{username} &nbsp;</Link>
            <span className="text-muted">
                <Moment format="DD MMM YYYY">
                    {date}
                </Moment>
            </span>
            <p>{text}</p>
            {Authorize &&
                <button className="btn btn-danger" onClick={()=>handleDelete(mId)}>Delete</button>
            }
        </div>
    </div>
);