import React from "react";
import MainButton from "./MainButton";

export default function FriendList({Friends ,HandleSelected,SelectedFriend}) {

  return (
    <ul>
      {Friends.map((friend) => (
        <Friend friend={friend} key={friend.id} HandleSelected={HandleSelected}  SelectedFriend={SelectedFriend}></Friend>
      ))}
    </ul>
  );
}

function Friend({ friend ,HandleSelected,SelectedFriend }) {
    const isSelected=SelectedFriend?.id===friend.id ;
  return (
    <>
      <li className={isSelected?"selected":""}>
        <img src={friend.image} alt={friend.Name} />
        <h3>{friend.Name}</h3>
        {friend.balance < 0 && (
          <p className="red">
            you owe {friend.Name} ${Math.abs(friend.balance)}{" "}
          </p>
        )}
        {friend.balance > 0 && (
          <p className="green">
            {friend.Name} owes you ${Math.abs(friend.balance)}{" "}
          </p>
        )}
        {friend.balance === 0 && <p>you and {friend.Name} Are Even</p>}

       <MainButton onClick={()=>HandleSelected(friend)} >{isSelected?"close":"select"}</MainButton>
      </li>
    </>
  );
}
