import React, { useState } from "react";
import MainButton from "./MainButton";

export default function FormAddFriend({ Friends, setFriends,setShowAddFriend,ShowAddFriend }) {
  const [Name, setName] = useState("");
  const [img, setImg] = useState("https://i.pravatar.cc/48");
  const id = crypto.randomUUID();
  function HandleSubmit(e) {
    e.preventDefault();
    if (!Name || !img) return;
    const newFriend = {
      id,
      Name,
      image: `${img}?=${id}`,
      balance: 0,
    };
    // console.log(newFriend);
    setFriends([...Friends, newFriend]);
    setShowAddFriend(!ShowAddFriend);
  }
  return (
    <form className="form-add-friend" onSubmit={HandleSubmit}>
      <label htmlFor="FN">👨‍❤️‍💋‍👨 friend Name</label>
      <input
        type="text"
        id="FN"
        value={Name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="IU">🖼️Image URL</label>
      <input
        type="text"
        id="IU"
        value={img}
        onChange={(e) => setImg(e.target.value)}
      />
      <MainButton>Add</MainButton>
    </form>
  );
}
