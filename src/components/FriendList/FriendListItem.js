import React from "react";
import PropTypes from "prop-types";

import styles from "./friendList.module.css";

const FriendListItem = ({ friends }) => (
  <>
    {friends.map(({ id, avatar, name }) => {
      const spanStatus = () =>
        friends.isOnline ? styles.online : styles.offline;
      return (
        <li key={id} className={styles.item}>
          <span className={spanStatus()}></span>
          <img className={styles.avatar} src={avatar} alt="" width="48" />
          <p className={styles.name}>{name}</p>
        </li>
      );
    })}
  </>
);

FriendListItem.defaultProps = {
  alt: "user avatar"
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired
    })
  )
};

export default FriendListItem;
