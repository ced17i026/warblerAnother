import React,{Component} from "react";
import {connect} from "react-redux";

export default function withAuth(ComponentTobeRendered){
    class Authenticate extends Component{
        componentWillMount(){
            if(this.props.isAuthenticated === false){
                this.props.history.push("/signin");
            }
        }
        componentWillUpdate(nextProps){
            if(nextProps.isAuthenticated === false){
                this.props.history.push("/signin");
            }
        }
        render(){
            return <ComponentTobeRendered {...this.props}/>
        };
    }
    function mapStateToProps(state){
        debugger;
        return {
            isAuthenticated: state.currentUser.isAuthenticated,
        }
    }
    debugger;
    return connect(mapStateToProps)(Authenticate);
}