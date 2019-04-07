import React from "react";
import "./FriendsList.css";
import Friend from "./Friend";

const FriendsList = props => {
  return (
    <div className="friends-list">
      {props.friendsList.map(friend => {
        return <Friend friend={friend} updateFriends={props.updateFriends} />;
      })}
    </div>
  );
};

export default FriendsList;
