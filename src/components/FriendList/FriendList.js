import React from "react";
import PropTypes from "prop-types";

import FriendListItem from "./FriendListItem";
import styles from "./friendList.module.css";

const FriendsList = ({ friends, children }) => (
  <ul className={styles.friendList}>
    {friends.map(({ avatar, name, id, isOnline }) => (
      <FriendListItem key={id} friends={friends} />
    ))}
  </ul>
);

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired
    })
  )
};

export default FriendsList;
