import React,{Component} from 'react';
import { connect } from 'react-redux';
import fetchMessages from "../store/actions/message";
import {DeleteMessage} from "../store/actions/message";
import jwtDecode from "jwt-decode";
import RenderMessages from "../components/renderMessage";

class MessagesList extends Component{
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    componentDidMount(){
        this.props.fetchMessages(jwtDecode(localStorage.jwtToken)._id);
    }
    handleDelete(id){
        this.props.DeleteMessage(jwtDecode(localStorage.jwtToken)._id,id);
    }
    render(){
        const {messages,currentUser} = this.props;
        let Messages = messages.map(m=>{
            const Authorize = m.user.username === currentUser.user.username;
            return (
                <RenderMessages
                    key={m._id}
                    mId={m._id}
                    date={m.createdAt}
                    text={m.body}
                    username={m.user.username}
                    profileImg={m.user.profileImg}
                    handleDelete = {this.handleDelete}
                    Authorize={Authorize}
                />
            );
        })
        return (
            Messages
        );
    }
}

function mapStateToProps(state){
    return {
        messages : state.messages,
        currentUser:state.currentUser,
    }
}
export default connect(mapStateToProps,{fetchMessages,DeleteMessage})(MessagesList);