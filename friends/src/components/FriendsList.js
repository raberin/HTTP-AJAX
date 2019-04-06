import React from "react";
import "./FriendList.css";
import Friend from "./Friend";

const FriendsList = props => {
  return (
    <div className="friends-list">
      {props.friendsList.map(friend => {
        return <Friend friend={friend} />;
      })}
    </div>
  );
};

export default FriendsList;
