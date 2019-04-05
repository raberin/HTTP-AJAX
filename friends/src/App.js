import React, { Component } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import Friends from "./components/Friends";
import { Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="App">
        <Route
          path="/"
          render={props => <Friends {...props} friends={this.state.friends} />}
        />
      </div>
    );
  }
}

export default App;
