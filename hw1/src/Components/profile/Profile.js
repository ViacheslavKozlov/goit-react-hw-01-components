import PropTypes from "prop-types";
import style from "./Profile.module.css";

const Profile = props => {
  const { name, avatar, location, stats, tag } = props;
  return (
    <div className={style.container}>
      <h2 className={style.headline}>User</h2>
      <div className={style.profile}>
        <img src={avatar} alt="User's avatar" className={style.avatar} />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
        <ul className={style.stats}>
          {Object.entries(stats).map(stat => (
            <li className={style.item} key={stat[0]}>
              <span className={style.label}>{stat[0]}</span>
              <span className={style.quantity}>{stat[1]}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  })
};

export default Profile;
