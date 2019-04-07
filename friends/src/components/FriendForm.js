import React from "react";

class FriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friendPost: {
        name: "",
        age: "",
        email: ""
      }
    };
  }

  changeHandler = event => {
    //Changes the state/tracks the value of the friendPost whatever is being inputed on the form
    this.setState({
      friendPost: {
        ...this.state.friendPost,
        //Since on the inputs theres a "name" value it can be used as a key to change
        //All the inputs dynamically instead of creating a handler for all of em
        [event.target.name]: event.target.value
      }
    });
  };

  postFriend = event => {
    event.preventDefault();
    //Runs the postMessage fxn in App.js, and adds the friendPost
    //object into the databasemkmkmknkn
    this.props.postFriend(this.state.friendPost);
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
      <div className="post-form-wrapper">
        <h2>Add a friend</h2>
        <form onSubmit={this.postFriend}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.changeHandler}
            value={this.state.friendPost.name}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            onChange={this.changeHandler}
            value={this.state.friendPost.age}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={this.changeHandler}
            value={this.state.friendPost.email}
          />
          <button type="submit">Post</button>
        </form>
      </div>
    );
  }
}

export default FriendForm;
