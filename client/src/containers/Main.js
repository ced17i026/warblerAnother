import React from "react";
import {Route,withRouter,Switch} from 'react-router-dom';
import {connect} from "react-redux";
import HomePage from "../components/HomePage";
import AuthForm from "../components/AuthForm";
import {authUser} from "../store/actions/auth";

const Main = (props)=>{
    return(
        <div>
            <Switch>
                <Route exact path="/" render={props=><HomePage {...props}/>}/>
                <Route exact path="/signin" onAuth = {authUser} render={props=><AuthForm {...props} heading="Log In"/>}/>
                <Route exact path="/signup" onAuth = {authUser} render={props=><AuthForm {...props} heading="Sign Up" signup="signup"/>}/>
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