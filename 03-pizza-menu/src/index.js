import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
// const getPizzaData = require('./data.js');
const {pizzaData} = require('./data.js');

/** Rules to write functions in react ------
 * Always start the function name with capital letter / Upper case
 * Always return some Markup (either even its null.)
 * Nesting never means defining a function inside a function in React. (Although it works.)
 */

// let pizzaData = JSON.parse(getPizzaData);
// console.log(pizzaData);

function App(){
  return (
    <div className="container">
      {/* <h1>Welcome to the Pizza House!!!!!!!</h1> */}
      <Header />
      <Menu />
      <Footer/>
    </div>
  )
}

function Header() {
  const style = {color: "red", fontSize: "48px", textTransform: "uppercase"};
  return (
          <header className='header'>
            {/* <h1 style={{color: "red", fontSize: "48px", textTransform: "uppercase"}}>Pizza🍕 House🏠</h1> */}
            <h1 style={style}>Pizza🍕 House🏠</h1>
          </header>
        )
}

function Menu() {
  // const pizzaData = pizzaData;
  // const pizzaData = []
  // console.log(`pizzaData.length  = ${pizzaData.length}`)
  // pizzaData.map(pizza => console.log(pizza));
  return (
    <div className='menu'>
      <h2>Our Menu</h2>
      
      {/*  Conditional rendering with terneries */}
      {pizzaData.length > 0  ? (
        // wrapped in a react fragment - it doesn't leave any trace to HTML DOM tree
        // To add any key if required we can use <React.Fragment key=""></React.Fragment>
        <>
          <p>
            Authentic Italian cuisine. 6 creatives dishes to choose from.
            All from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza)=> (
              <Pizza pizzaObj={pizza} key={pizza.name}/>
            ))}
          </ul>
        </>
      ): 
      <p>We'are working on our menu. Please come back later 😊.</p>
      }

      {/* {pizzaData.length > 0  && 
        <ul className="pizzas">
          {pizzaData.map((pizza)=> (
            <Pizza pizzaObj={pizza} key={pizza.name}/>
          ))}
        </ul>
      } */}
     

      {/* {pizzaData && pizzaData.length > 0  && 
        <ul className="pizzas">
          {pizzaData.map((pizza)=> (
            <li className='pizza'>
            <img src={pizza.photoName} alt={pizza.name}/>
            <div >
              <h3>{pizza.name}</h3>
              <p>{pizza.ingredients}</p>
              <span>Rs. {pizza.price * 15}</span>
            </div>
          </li>
          ))}
        </ul>
      } */}
      {/* <Pizza 
        name="Pizza🍕 Spinaci"
        ingredients="Tomato, Mozerella, Spinach, and Recotta cheese"
        photoName="./../pizzas/spinaci.jpg"
        price={300}
      />

      <Pizza 
        name="Pizza🍕 Funghi"
        ingredients="Tomato, and Mushrooms"
        photoName="./../pizzas/funghi.jpg"
        price={250}
      />

      <Pizza 
        name="Pizza🍕 Margherita"
        ingredients="Tomato, and Cottage cheese"
        photoName="./../pizzas/margherita.jpg"
        price={450}
      />

      <Pizza 
        name="Pizza🍕 Focaccia"
        ingredients="Tomato, and Mushrooms"
        photoName="./../pizzas/focaccia.jpg"
        price={250}
      />

      <Pizza 
        name="Pizza🍕 Prosciutto"
        ingredients="Tomato, and Mushrooms"
        photoName="./../pizzas/prosciutto.jpg"
        price={550}
      />

      
      <Pizza 
        name="Pizza🍕 Salamino"
        ingredients="Tomato, and Mushrooms"
        photoName="./../pizzas/salamino.jpg"
        price={350}
      />

      <Pizza 
        name="Pizza🍕 Spinaci"
        ingredients="Tomato, Spinach and Mushrooms"
        photoName="./../pizzas/spinaci.jpg"
        price={300}
      /> */}

      

    </div>)
}

function Footer(){
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  // console.log(isOpen);
  // if (hour >= openHour && hour <= closeHour){
  //   alert(`We're currently open!`);
  // }else{
  //   alert(`Sorry, We are closed.`);
  // }
  // return (
  //   <footer className='footer'>
  //     {
  //       new Date().toLocaleTimeString()
  //     }. We're currently open.
  //   </footer>
  // )
  if (!isOpen){
    return <h3>We're available between {openHour}:00 and {closeHour}:00.</h3>
  }
  return <footer className='footer'>{
    isOpen && (
    <div className='order'>
      <p>
        We're open until {closeHour}:00. Come visit us or order online.
      </p> 
      <button className='btn'> Order Now </button>
      </div>)}
    </footer>
}

function Pizza(props){
  console.log(props)
  // return <div className='pizza'>
  //   <img src={props.photoName} alt={props.name}/>
  //   <h3>{props.name}</h3>
  //   <p>{props.ingredients}</p>
  //   <span>Rs. {props.price * 15}</span>
    
  // </div>
  // if (props.pizzaObj.soldOut) return null;

  // return <li className='pizza'>
  //   <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}/>
  //   <div >
  //     <h3>{props.pizzaObj.name}</h3>
  //     <p>{props.pizzaObj.ingredients}</p>
  //     <span>Rs. {props.pizzaObj.price * 15}</span>
  //   </div>
  // </li>

  return <li className={`pizza ${props.pizzaObj.soldOut ? "sold-out" : ""}`}>
    <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}/>
    <div >
      <h3>{props.pizzaObj.name}</h3>
      <p>{props.pizzaObj.ingredients}</p>

      {/* {props.pizzaObj.soldOut ? (
          <span>SOLD OUT</span> 
        ) : (
          <span>{"Rs. " + props.pizzaObj.price * 15}</span>
        )
      } */}
      <span>{props.pizzaObj.soldOut ? "SOLD OUT" : "Rs. " + props.pizzaObj.price * 15}</span>
    </div>
  </li>
}

// function Pizza(){
//   return <>
//     <img src="./../pizzas/spinaci.jpg" alt="Pizza🍕 Spinaci"/>
//     <h3>Pizza🍕 Spinaci</h3>
//     {/* <p>Tomato, Mozerella, Spinach,  and Recotta cheese</p> */}
//     {/* <p>
//       {
//         pizzaData.forEach(obj)
//         // pizzaData.forEach((obj) => {
//           // console.log(obj);
//         // })
//     }
//     </p> */}
//   </>
// }

// React v18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before v18
// React.render(<App />, document.getELementById("root"));