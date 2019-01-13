import React,{Component} from "react";

class MessageFrom extends Component{
    render(){
        return (
            <div className="messageForm">
            <form onSubmit={this.handleSubmit}>
                <h1>New Message</h1>
                <input type="text" placeholder="Write Your Message Here" size="28"></input> <br/>
                <button type="submit" className="btn btn-primary">Post</button>
            </form>
            </div>
        );
    }
}

export default MessageFrom;