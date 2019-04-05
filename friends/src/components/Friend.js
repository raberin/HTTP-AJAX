import React from "react";

const Friend = props => {
  return (
    <div className="friend-card">
      <h2>{`Name: ${props.friend.name}`}</h2>
      <p>{`ID: ${props.friend.id}`}</p>
      <p>{`Age: ${props.friend.age}`}</p>
      <p>{`Email: ${props.friend.email}`}</p>
    </div>
  );
};

export default Friend;
