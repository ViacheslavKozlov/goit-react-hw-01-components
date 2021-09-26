import React from "react";

import friends from "../data/friends.json";
import FriendList from "./friendList/FriendList";

import user from "../data/user.json";
import Profile from "./profile/Profile";

import transactions from "../data/transactions.json";
import TransactionHistory from "./transactionHistory/TransactionHistory";

import statistic from "../data/statistical-data.json";
import Statistics from "./statistics/Statistics";

const App = () => {
  return (
    <>
      <Profile name={user.name} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <Statistics title="upload stats" stats={statistic} />
    </>
  );
};

export default App;
