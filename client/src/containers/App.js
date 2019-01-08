import React, { Component } from 'react';
import {configureStore} from "../store";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>Hello World</div>
        </Router>
      </Provider>
    );
  }
}

export default App;
