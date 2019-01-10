import React from 'react';
import {Link} from 'react-router-dom';
import "./HomePage.css";
const HomePage = (props)=>{
    if(!props.currentUser.isAuthenticated)
    {
        return(
            <div className="HomePage-body">
                <div className="HomePage-content">
                    <h1>New To WarBler ?</h1>
                    <Link to="/signup" className="btn btn-primary">Sign UP Here</Link>
                </div>
            </div>
        );
    }else{
        return (<div><h1>You Made It!</h1></div>);
    }
};

export default HomePage;