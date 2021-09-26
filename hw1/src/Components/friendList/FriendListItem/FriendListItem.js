import style from "./FriendListItem.module.css";
import PropTypes from "prop-types";

const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <li className={style.item}>
      <span className={isOnline ? style.active : style.nonActive}> </span>
      <img src={avatar} alt={name} width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired
    })
  )
};

export default FriendListItem;
