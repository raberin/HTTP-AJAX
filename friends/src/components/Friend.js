import React from "react";
import "./Friend.css";
import axios from "axios";

class Friend extends React.Component {
  constructor(props) {
    super(props);
  }

  deleteItem = event => {
    console.log(`${this.props.friend.name} has been deleted!`);
    axios
      .delete(`http://localhost:5000/friends/${this.props.friend.id}`)
      .then(res => {
        this.props.updateFriends(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="friend-card">
        <div className="friend-card-buttons">
          <button>Edit</button>
          <span onClick={this.deleteItem}>X</span>
        </div>
        <h2>{`Name: ${this.props.friend.name}`}</h2>
        <p>{`ID: ${this.props.friend.id}`}</p>
        <p>{`Age: ${this.props.friend.age}`}</p>
        <p>{`Email: ${this.props.friend.email}`}</p>
      </div>
    );
  }
}

export default Friend;
