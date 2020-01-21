import React from "react";
import PropTypes from "prop-types";

import styles from "./friendList.module.css";

const FriendListItem = ({ friend }) => {
  const { isOnline, avatar, name } = friend;
  return (
    <li className={styles.item}>
      <span className={isOnline ? styles.online : styles.offline}></span>
      <img className={styles.avatar} src={avatar} alt="" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.defaultProps = {
  alt: "user avatar"
};

FriendListItem.propTypes = {
  friends: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
  })
};

export default FriendListItem;
