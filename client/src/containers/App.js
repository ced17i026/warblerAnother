import React, { Component } from 'react';
import {configureStore} from "../store";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";
import jwtDecode from "jwt-decode";
import {setCurrentUser,setAuthorizationHeader} from "../store/actions/auth";
const store = configureStore();
if(localStorage.jwtToken){
  setAuthorizationHeader(localStorage.jwtToken);
  try{
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken))); 
  }catch(err){
    setCurrentUser({});
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Main />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
