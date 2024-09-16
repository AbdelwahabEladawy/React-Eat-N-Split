import { useState } from "react";
import FormAddFriend from "./components/FormAddFriend";
import FormBillSplit from "./components/FormBillSplit";
import FriendList from "./components/FriendList";
import MainButton from "./components/MainButton";

const initialFriends = [
  {
    id: 118836,
    Name: "Mahmoud",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    Name: "Ahmed",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 20,
  },
  {
    id: 499476,
    Name: "Reem",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 0,
  },
];

function App() {
  const [Friends, setFriends] = useState(initialFriends);
  const [ShowAddFriend, setShowAddFriend] = useState(false);
  const [SelectedFriend, setSelectedFriend] = useState("");
  const [Bill, setBill] = useState("");
  const [YourPay, setYourPay] = useState("");
  const [WhoIsPay, setWhoIsPay] = useState("user");
  const PaidByFriend = Bill ? Bill - YourPay : "";

  function HandleShowAddFriend() {
    setShowAddFriend(!ShowAddFriend);
  }
  function HandleSelected(friend) {
    setSelectedFriend((curr) => (curr?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }
  function HandleSplitBill(value) {
    console.log(value);

    setFriends(
      Friends.map((friend) =>
        friend.id === SelectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
    setBill("");
    setYourPay("");
    setWhoIsPay("user");
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          Friends={Friends}
          SelectedFriend={SelectedFriend}
          setSelectedFriend={setSelectedFriend}
          HandleSelected={HandleSelected}
        ></FriendList>
        {ShowAddFriend && (
          <FormAddFriend
            Friends={Friends}
            setFriends={setFriends}
            ShowAddFriend={ShowAddFriend}
            setShowAddFriend={setShowAddFriend}
          ></FormAddFriend>
        )}
        <MainButton onClick={() => HandleShowAddFriend()}>
          {ShowAddFriend ? (
            <MainButton>Close</MainButton>
          ) : (
            <MainButton> Add Friend</MainButton>
          )}
        </MainButton>
      </div>
      {SelectedFriend && (
        <FormBillSplit
          PaidByFriend={PaidByFriend}
          SelectedFriend={SelectedFriend}
          setBill={setBill}
          Bill={Bill}
          YourPay={YourPay}
          setYourPay={setYourPay}
          WhoIsPay={WhoIsPay}
          setWhoIsPay={setWhoIsPay}
          HandleSplitBill={HandleSplitBill}
        ></FormBillSplit>
      )}
    </div>
  );
}

export default App;
