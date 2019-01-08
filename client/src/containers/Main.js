import React from "react";
import {Route,withRouter,Switch} from 'react-router-dom';
import {connect} from "react-redux";
import HomePage from "../components/HomePage";

const Main = (props)=>{
    return(
        <div>
            <Switch>
                <Route exact path="/" render={props=><HomePage {...props}/>}/>
            </Switch>
        </div>
    );
}

function mapStateToProps(state){
    return {
        currentUser: state.currentUser,
    }
}
export default withRouter(connect(mapStateToProps)(Main));