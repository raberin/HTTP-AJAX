import React from "react";

const FriendForm = props => {
  return (
    <form>
      <h2>Add a friend</h2>
      <input type="text" name="name" placeholder="Name" />
      <input type="number" name="age" placeholder="Age" />
      <input type="text" name="email" placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FriendForm;
