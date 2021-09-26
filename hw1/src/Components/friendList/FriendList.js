import FriendListItem from "../friendList/FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul>
      <h2>Friends</h2>
      {friends.map(friend => (
        <FriendListItem isOnline={friend.isOnline} name={friend.name} avatar={friend.avatar} key={friend.id} />
      ))}
    </ul>
  );
};
export default FriendList;
