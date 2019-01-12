import React from "react";
import Moment from "react-moment";
import {Link} from "react-router-dom";
import {DefaultImg} from "../images/warbler-logo.png";

export default ({date,text,username,profileImg})=>(
    <div>
        <img src={profileImg||DefaultImg} alt={username} height="100" width="100" className="profileImg"></img>
        <div className="messageArea">
            <Link to="/" >@{username} &nbsp;</Link>
            <span className="text-muted">
                <Moment format="DD MMM YYYY">
                    {date}
                </Moment>
            </span>
            <p>{text}</p>
        </div>
    </div>
);