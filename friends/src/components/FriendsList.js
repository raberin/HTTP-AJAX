import React from "react";
import Friend from "./Friend";

const FriendsList = props => {
  return props.friendsList.map(friend => {
    return <Friend friend={friend} />;
  });
};

export default FriendsList;
