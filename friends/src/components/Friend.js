import React from "react";

const Friend = props => {
  return (
    <div className="friend-card">
      <h2>{`ID: ${props.friends.id}`}</h2>
      <p>{`Name: ${props.friend.name}`}</p>
      <p>{`Age: ${props.friend.age}`}</p>
      <p>{`Email: ${props.friend.email}`}</p>
    </div>
  );
};

export default Friend;
