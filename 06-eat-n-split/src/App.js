import { useState } from "react";
const {initialFriends} = require('./data.js');

// console.log(initialFriends);
// initialFriends.map(e => console.log(e));


function Button({children, onClick}){
  return <button className="button" onClick={onClick}>{children}</button>
}

function FormSplitBill({selectedFriend, onSplitBill}) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState('');
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const paidByFriend = bill ? bill - paidByUser : "";     // Derived state

  function handleSubmit(e) {
    e.preventDefault();

    if(!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser);

  }



  return <form className="form-split-bill" onSubmit={handleSubmit}>
    <h2>Split a bill with {selectedFriend.name}</h2>

    <label>💰 Bill Value</label>
    <input type="text" 
      value={bill}
      onChange={(e) => setBill(Number(e.target.value))}
    />

    <label>👩‍🦰 Your expenses </label>
    <input type="text" 
      value={paidByUser}
      onChange={(e) => setPaidByUser(Number(e.target.value) > bill ? paidByUser : Number(e.target.value))}
    />

    <label>🧑‍🤝‍🧑 {selectedFriend.name}'s expense</label>
    <input type="text" disabled value={paidByFriend} />

    <label>🤑 Who is paying the bills💸?</label>
    <select 
      value={whoIsPaying}
      onChange={(e) => setWhoIsPaying(Number(e.target.value))}
    >
      <option value="user">You</option>
      <option value="friend">{selectedFriend.name}</option>
    </select>

    <Button>Split Bill</Button>
  </form>
}

function FormAddFriend({onAddFriend}){
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  
  
  
  const id = crypto.randomUUID();
  
  function handleSubmit(e) {
    e.preventDefault(); 

    if (!name || !image) return;

    const newFriend = {
      id,
      name,
      image,
      // image: `${image}?=${id}`,
      balance: 0
    };

    onAddFriend(newFriend);

    // console.log(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48")
  }

  return <form className="form-add-friend" onSubmit={handleSubmit}>
    <label>🧑‍🤝‍🧑 Friend Name</label>
    <input type='text'
      value={name}  
      onChange={(e) => setName(e.target.value)}
    />

    <label>😍 Image URL</label>
    <input type="text"
      value={image}  
      onChange={(e) => setImage(e.target.value)}
    />

    <Button>Add</Button>
  </form>
}

function Friend({friend, onSelection, selectedFriend}){
  const isSelected = selectedFriend?.id === friend.id;  // conditional change

  return (
    <li className={isSelected ? 'selected' : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className='red'>
          You owe {friend.name} ₹{Math.abs(friend.balance)}💸.
        </p>
      )}

      {friend.balance > 0 && (
        <p className='green'>
          {friend.name} owes you ₹{Math.abs(friend.balance)}💸.
        </p>
      )}

      {friend.balance === 0 && (
        <p>
          You and {friend.name} are even.
        </p>
      )}
      <Button onClick={() => onSelection(friend)}>{isSelected ? "Close" : "Select"}</Button>
      {/* <button className="button">Select</button> */}
    </li>
  )
}


function FriendsList({ friends, onSelection, selectedFriend }) {
  // const friends = initialFriends;
  return (
  <ul>
    {
      friends.map((friend) => (
          <Friend friend={friend} key={friend.id} selectedFriend={selectedFriend} onSelection={onSelection} />
      ))
    }
  </ul>)
}


export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectFriend, setSelectFriend] = useState(null);

  function handleShowAddFriend(){
    setShowAddFriend((show) => !show);
  }
  console.log(showAddFriend);

  function handleAddFriend(friend){
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }
  
  function handleSelection(friend){
    // setSelectFriend(friend);
    setSelectFriend((curr) => (
      curr?.id ===friend.id ? null : friend
    ));
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    // console.log(value);
    setFriends(friends => friends.map(friend => (
      friend.id === selectFriend.id ? {...friend, balance: friend.balance + value} : friend
    )))

    setSelectFriend(null);
  }

  return (
    <div className="app">
      {/* <h1>Let's split the bills💸</h1> */}
      <div className='sidebar'>
        <FriendsList friends={friends} 
          selectedFriend={selectFriend}
          onSelection={handleSelection}

        />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend}/>}
        <Button onClick={handleShowAddFriend}>{showAddFriend ? 'Close' : 'Add Friend'}</Button>
      </div>
      {selectFriend && <FormSplitBill selectedFriend={selectFriend} onSplitBill={handleSplitBill} key={selectFriend.id} />}
    </div>
  );
}


