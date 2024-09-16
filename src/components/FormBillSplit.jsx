import React from "react";
import MainButton from "./MainButton";

export default function FormBillSplit({
  SelectedFriend,
  Bill,
  setBill,
  YourPay,
  setYourPay,
  WhoIsPay,
  setWhoIsPay,
  PaidByFriend,
  HandleSplitBill,
}) {
  function HandleSubmit(e) {
    e.preventDefault();
    if (!Bill || !YourPay) return;
    HandleSplitBill(WhoIsPay === "user" ? PaidByFriend : -YourPay);
  }

  return (
    <form className="form-split-bill" onSubmit={HandleSubmit}>
      <h2>Split Bill With Friend {SelectedFriend.Name} </h2>
      <label htmlFor="BV">💰Bill Value</label>
      <input
        type="text"
        id="BV"
        value={Bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label htmlFor="YEX">💰Your Expense </label>
      <input
        type="text"
        id="YEX"
        value={YourPay}
        onChange={(e) =>
          setYourPay(
            Number(e.target.value) > Bill ? YourPay : Number(e.target.value)
          )
        }
      />
      <label htmlFor="FEX">💰{SelectedFriend.Name}'s Expense</label>
      <input type="text" id="FEX" disabled value={PaidByFriend} />
      <label htmlFor="WWP">💰Who Will Pay The Bill??</label>
      <select onChange={(e) => setWhoIsPay(e.target.value)}>
        <option value="user">You </option>
        <option value="friend">{SelectedFriend.Name} </option>
      </select>
      <MainButton>Split Bill</MainButton>
    </form>
  );
}
