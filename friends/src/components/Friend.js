import React from "react";
import "./Friend.css";
import axios from "axios";

class Friend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      updatedPost: {
        name: "",
        age: "",
        email: ""
      }
    };
  }

  deleteItem = event => {
    console.log(`${this.props.friend.name} has been deleted!`);
    //Deletes the object that is associated with the specific id
    axios
      .delete(`http://localhost:5000/friends/${this.props.friend.id}`)
      .then(res => {
        this.props.updateFriends(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  putFriend = updatedPost => {
    axios
      .put(`http://localhost:5000/friends/${this.props.friend.id}`, updatedPost)
      .then(res => {
        this.props.updateFriends(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  changeHandler = event => {
    //Changes the state/tracks the value of the friendPost whatever is being inputed on the form
    this.setState({
      updatedPost: {
        ...this.state.updatedPost,
        //Since on the inputs theres a "name" value it can be used as a key to change
        //All the inputs dynamically instead of creating a handler for all of em
        [event.target.name]: event.target.value
      }
    });
  };

  submitEditFriend = event => {
    event.preventDefault();
    //Runs the postMessage fxn in App.js, and adds the friendPost
    //object into the database
    this.putFriend(this.state.updatedPost);
    this.setState({
      friendPost: {
        name: "",
        age: "",
        email: ""
      }
    });
  };

  render() {
    return (
      <div className="friend-card">
        <div
          className={this.state.edit === false ? "display-on" : "display-off"}
        >
          <div className="friend-card-buttons">
            <button onClick={this.editItem}>Edit</button>
            <span onClick={this.deleteItem}>X</span>
          </div>
          <h2>{`Name: ${this.props.friend.name}`}</h2>
          <p>{`ID: ${this.props.friend.id}`}</p>
          <p>{`Age: ${this.props.friend.age}`}</p>
          <p>{`Email: ${this.props.friend.email}`}</p>
        </div>

        <div>
          <h2>Edit Friend</h2>
          <form onSubmit={this.submitEditFriend}>
            <input
              changeHandler={this.changeHandler}
              type="text"
              name="name"
              onChange={this.changeHandler}
              placeholder={`${this.props.friend.name}`}
            />
            <input
              changeHandler={this.changeHandler}
              type="text"
              name="age"
              onChange={this.changeHandler}
              placeholder={`${this.props.friend.age}`}
            />
            <input
              changeHandler={this.changeHandler}
              type="text"
              name="email"
              onChange={this.changeHandler}
              placeholder={`${this.props.friend.email}`}
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Friend;
