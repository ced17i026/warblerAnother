import React, { Component } from 'react';
import {configureStore} from "../store";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import {Navbar} from "../containers/Navbar";
const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Navbar />
        </Router>
      </Provider>
    );
  }
}

export default App;
