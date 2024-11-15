import React from 'react';
import ReactDOM from 'react-dom/client';
const { pizzaData } = require('./data.js');


/** Rules to write functions in react ------
 * Always start the function name with capital letter / Upper case
 * Always return some Markup (either even its null.)
 * Nesting never means defining a function inside a function in React. (Although it works.)
 */

console.log(`pizzaData = ${pizzaData}`);


function App(){
  return (
    <div>
      {/* <h1>Welcome to the Pizza House!!!!!!!</h1> */}
      <Header />
      <Menu />
      <Footer/>
    </div>
  )
}

function Header() {
  return <h1>Pizza🍕 House</h1>
}

function Menu() {
  return (<div>
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </div>)
}

function Footer(){
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour
  console.log(isOpen);
  // if (hour >= openHour && hour <= closeHour){
  //   alert(`We're currently open!`);
  // }else{
  //   alert(`Sorry, We are closed.`);
  // }
  return (
    <footer>
      {
        new Date().toLocaleTimeString()
      }. We're currently open.
    </footer>
  )
}

function Pizza(){
  return <>
    <img src="./../pizzas/spinaci.jpg" alt="Pizza🍕 Spinaci"/>
    <h2>Pizza🍕 Spinaci</h2>
    <p>Tomato, Mozerella, Spinach, Recotta and cheese</p>
    {/* <p>
      {
        pizzaData.forEach(obj)
        // pizzaData.forEach((obj) => {
          // console.log(obj);
        // })
    }
    </p> */}
  </>
}

// React v18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before v18
// React.render(<App />, document.getELementById("root"));