import React from 'react';
import {Link} from 'react-router-dom';
import "./HomePage.css";
const HomePage = (props)=>(
    <div className="HomePage-body">
        <div className="HomePage-content">
            <h1>New To WarBler ?</h1>
            <Link to="/signup" className="btn btn-primary">Sign UP Here</Link>
        </div>
    </div>
);

export default HomePage;