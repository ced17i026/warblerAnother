import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../images/warbler-logo.png';
import {connect} from 'react-redux';
import './Navbar.css';

export class Navbar extends Component{
    render(){
        console.log(this.props);
        return(
            <nav className="navbar navbar-expand">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src={Logo} alt="Warbler"></img>
                    </Link>
                    {
                        this.props.currentUser.isAuthenticated ?(
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link to='#'> Create New Message</Link>
                            </li>
                        </ul>
                    ):(
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link to="/signup"> Sign Up</Link>
                            </li>
                            <li>
                                <Link to="/signin"> Sign In</Link>
                            </li>
                        </ul>
                        )
                    }
                </div>
            </nav> 
        );
    }
}
function mapStateToProps(state){
    return {
        currentUser: state.currentUser,
    };
}
export default connect(mapStateToProps)(Navbar);