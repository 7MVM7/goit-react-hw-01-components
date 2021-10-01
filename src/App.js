import "./App.css";
import Stat from "./components/statistics/Statistics";
import statisticalData from "./data/statistical-data.json";
import Profile from "./components/profile/SocialProfile";
import user from "./data/user.json";
import friends from "./data/friends.json";
import FriendsList from "./components/FriendsList/FriendsList";
import TransactionList from "./components/TransactionHistory/TransactionHistory";
import transactions from "./data/transactions.json";

function App() {
  return (
    <>
      <Stat title="Upload Stats" stats={statisticalData} />
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendsList data={friends} />
      <TransactionList items={transactions} />;
    </>
  );
}

export default App;

// const Vlad = {
//   name: "Vladislaw",
//   age: 26,
//   city: "Chervograd",
// };
// // деструкт.,
// const { name, age, city } = Vlad;

// console.log(name + " Makhnyk");
