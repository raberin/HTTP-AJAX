import React from "react";
import { throws } from "assert";

class FriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friendPost: {
        name: "",
        age: "",
        email: ""
        // id: props.friendsDB.length
      }
    };
  }

  changeHandler = event => {
    this.setState({
      ...this.state.friendPost,
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <form>
        <h2>Add a friend</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={this.changeHandler}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          onChange={this.changeHandler}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={this.changeHandler}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default FriendForm;
