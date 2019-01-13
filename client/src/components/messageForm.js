import React,{Component} from "react";
import {AddNewMessage} from "../store/actions/message";
class MessageFrom extends Component{
    constructor(props){
        super(props);
        this.state = {
            message:"",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value,
        })
    }
    handleSubmit(e){
        e.preventDefault();
        AddNewMessage(this.state.message)();
        this.props.history.push("/");
    }
    render(){
        return (
            <div className="messageForm">
            <form onSubmit={this.handleSubmit}>
                <h1>New Message</h1>
                <input type="text" placeholder="Write Your Message Here" name="message" value={this.state.message} onChange={this.handleChange} size="28"></input> <br/>
                <button type="submit" className="btn btn-primary">Post</button>
            </form>
            </div>
        );
    }
}

export default MessageFrom;