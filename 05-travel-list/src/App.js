import { useState } from 'react';

let initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];


function Logo(){
  return <h1>🏝️ Far Away 💼</h1>
}

function Form({onAddItems}){
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  
  function handleSubmit(e) {
    e.preventDefault(); // preventing default page rendering on submit (a html feature)
    // console.log(e);
    
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    // console.log(newItem);
    // initialItems.push(newItem);
    // handleAddItems(newItem);
    onAddItems(newItem);
    


    // After submission set all state to default
    setDescription("");
    setQuantity(1);
  }

  function handleClick(){
    // alert('Hey');
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={(e) => {setQuantity(e.target.value)}}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map
          ((num) => (
          <option 
            value={num} key={num}> {num} 
          </option>
          ))}
        {/* <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option> */}
      </select>
      <input type="text" placeholder="Item..." value={description} onChange={(e) => {
        // console.log(e.target.value);
        setDescription(e.target.value)
      }} />
      <button onClick={handleClick}>Add</button>
    </form>
  );
}

function Item({ item, onDeleteItem, onToggleItems }) {
  return (
    <li>
      <input type='checkbox' value={item.packed} onChange={() => onToggleItems(item.id)}/>
      <span style={item.packed ? {textDecoration: 'line-through'} : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function PackingList({items, onDeleteItem, onToggleItems}){
  // initialItems.push(items);
  return (
    <div className="list">
      <ul>
        {items.map(item => 
          <Item item={item} 
            key={item.id} 
            onDeleteItem={onDeleteItem} 
            onToggleItems={onToggleItems}
          />
        )}
        {/* {initialItems.map(item => 
          <Item item={item} key={item.id} />
        )} */}
      </ul>
    </div>
  )
}

function Stats() {
  return (
    <footer className="stats">
      <em>💼 You have X items on your list, and you already packed X (X%)</em>
    </footer>
  )
}

export default function App() {
  // const [items, setItems] = useState([]);
  const [items, setItems] = useState(initialItems);

  function handleAddItems(item){
    /**
     * Note: React is all about immutability. We are not allowed to mutate state.
     *       So, we cannot directly push and update the items object directly.
     *       Examples: setItems((items) => items.push(item));
     *       i.e. instead of updating data in original data, always return new data.
     */
    setItems((items) => [...items, item]);

  }

  function handleDeleteItems(id){
    setItems(items => items.filter(item=>item.id !== id));
  }

  function handleToggleItems(id) {
    setItems(items => items.map(item => item.id === id ? {...item, packed: !item.packed} : item))
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems}/>
      <PackingList items={items} onDeleteItem={handleDeleteItems} onToggleItems={handleToggleItems}/>
      <Stats />
    </div>
  );
}


