import React,{Component} from 'react';
import { connect } from 'react-redux';
import fetchMessages from "../store/actions/message";
import jwtDecode from "jwt-decode";
import RenderMessages from "../components/renderMessage";

class MessagesList extends Component{
    componentDidMount(){
        this.props.fetchMessages(jwtDecode(localStorage.jwtToken)._id);
    }
    render(){
        const {messages} = this.props;
        let Messages = messages.map(m=>{
            return (
                <RenderMessages
                    key={m._id}
                    date={m.createdAt}
                    text={m.body}
                    username={m.user.username}
                    profileImg={m.user.profileImg}
                />
            );
        })
        return (
            Messages
        );
    }
}

function mapStateToProps(state){
    return {messages : state.messages,}
}
export default connect(mapStateToProps,{fetchMessages})(MessagesList);