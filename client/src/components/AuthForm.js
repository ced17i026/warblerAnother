import React,{Component} from 'react';
import './AuthForm.css';

export default class AuthForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            username:'',
            password:'',
            profileImg:""
        }
    }
    handleChange = e=>{
        this.setState({
            [e.target.name]:e.target.value,
        })
    }
    handleSubmit = e=>{
        e.preventDefault();
        let authType = this.props.signup ? "signup":"signin";
        this.props.onAuth(authType,this.state).then(()=>{
            this.props.history.push("/");
            //here we will redirect user to any other page
        })
    }
    render(){
        const {email,username,profileImg} = this.state;
        const {heading,error,history,removeError} = this.props;
        history.listen(()=>{
            removeError();
        })
        return(
            <div className="Form-Body">
                <h1>{heading}</h1>
                {error.message && 
                <div className="alert alert-danger">{error.message}</div>}
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        className="form-control"
                        id='email'
                        size={45}
                        onChange={this.handleChange}
                        value={email}
                        name="email"
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        id='password'
                        size={45}
                        onChange={this.handleChange}
                        name="password"
                    />
                    {
                        this.props.signup&&(
                            <div>
                                <label htmlFor="username">Username:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id='username'
                                    size={45}
                                    onChange={this.handleChange}
                                    value={username}
                                    name="username"
                                />
                                <label htmlFor="profileImg">ProfileImg:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id='profileImg'
                                    size={45}
                                    onChange={this.handleChange}
                                    value={profileImg}
                                    name="profileImg"
                                />
                            </div>
                        )
                    }
                    <button 
                    type="submit"
                    size={45}
                    className="btn btn-primary">
                    {heading}
                    </button>
                </form>
            </div>
        );
    }
}