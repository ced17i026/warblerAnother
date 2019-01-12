import React,{Component} from 'react';
import {renderMessage} from "../components/renderMessage";
import { connect } from 'react-redux';
import fetchMessages from "../store/actions/message";
import jwtDecode from "jwt-decode";
import renderMessage from "../components/renderMessage";

class MessagesList extends Component{
    componentDidMount(){
        this.props.fetchMessages(jwtDecode(localStorage.jwtToken)._id);
    }
    render(){
        const {messages} = this.props;
        let MessageList = messages.map(m=>{
            return <renderMessage 
                    id={m._id}
                    date={m.createdAt}
                    text={m.text}
                    username={m.user.username}
                    profileImg={m.user.profileImg}
                />
        })
        return (
            {MessageList}
        );
    }
}

function mapStateToProps(state){
    return {messages = state.messages,}
}
export default connect(mapStateToProps,{fetchMessages})(MessagesList);