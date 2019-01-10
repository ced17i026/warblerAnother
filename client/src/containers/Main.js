import React from "react";
import {Route,withRouter,Switch} from 'react-router-dom';
import {connect} from "react-redux";
import HomePage from "../components/HomePage";
import AuthForm from "../components/AuthForm";
import {authUser} from "../store/actions/auth";
import {removeError} from '../store/actions/error';
const Main = (props)=>{
    const {authUser,error,removeError,currentUser} = props;
    return(
        <div>
            <Switch>
                <Route exact path="/" render={props=><HomePage currentUser={currentUser} {...props}/>}/>
                <Route exact path="/signin" render={props=><AuthForm {...props} removeError = {removeError} error={error} onAuth = {authUser} heading="Log In"/>}/>
                <Route exact path="/signup" render={props=><AuthForm {...props} removeError = {removeError} error={error} onAuth = {authUser} heading="Sign Up" signup="signup"/>}/>
            </Switch>
        </div>
    );
}

function mapStateToProps(state){
    return {
        currentUser: state.currentUser,
        error: state.error,
    }
}
export default withRouter(connect(mapStateToProps,{authUser,removeError})(Main));