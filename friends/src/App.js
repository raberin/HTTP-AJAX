import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { Route } from "react-router-dom";

import FriendsList from "./components/FriendsList";
import FriendForm from "./components/FriendForm";

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

  postMessage = friend => {
    axios
      //POST requests takes in a body of data the second parameter
      .post("http://localhost:5000/friends", friend)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <FriendForm postMessage={this.postMessage} />
        <Route
          path="/"
          render={props => (
            <FriendsList {...props} friendsList={this.state.friends} />
          )}
        />
      </div>
    );
  }
}

export default App;
