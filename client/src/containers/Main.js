import React from "react";
import {Route,withRouter,Switch} from 'react-router-dom';
import {connect} from "react-redux";
import HomePage from "../components";

const Main = props=>{
    return(
        <Switch>
            <Route exact path="/" render={props=><HomePage {...props}/>}/>
        </Switch>
    );
}

function mapStateToProps(state){
    return {
        currentUser: state.currentUser,
    }
}
export default withRouter(connect(mapStateToProps,null)(Main));