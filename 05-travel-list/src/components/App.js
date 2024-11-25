import { useState } from 'react';
import Stats from './Footer';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';

let initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];


export default function App() {
  // const [items, setItems] = useState([]);
  const [items, setItems] = useState(initialItems);
  // const [numItems, setNumItems] = useState(initialItems.length); // not a good way to use, instead use derived state

  function handleAddItems(item){
    /**
     * Note: React is all about immutability. We are not allowed to mutate state.
     *       So, we cannot directly push and update the items object directly.
     *       Examples: setItems((items) => items.push(item));
     *       i.e. instead of updating data in original data, always return new data.
     */
    setItems((items) => [...items, item]);
    // setNumItems((num) => num + 1);

  }

  function handleDeleteItems(id){
    setItems(items => items.filter(item=>item.id !== id));
  }

  function handleToggleItems(id) {
    setItems(items => items.map(item => item.id === id ? {...item, packed: !item.packed} : item))
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    )
    if (confirmed) setItems([]);
  }
  
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems}/>
      <PackingList items={items} onToggleItems={handleToggleItems} onDeleteItem={handleDeleteItems} onClearList={handleClearList}/>
      <Stats items={items}/>
    </div>
  );
}
