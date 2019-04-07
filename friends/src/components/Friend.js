import React from "react";
import "./Friend.css";

class Friend extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="friend-card">
        <div className="friend-card-buttons">
          <button>Edit</button>
          <button>X</button>
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
