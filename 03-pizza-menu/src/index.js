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
      <h1>Welcome to the Pizza House!!!!!!!</h1>
      <Pizza />
    </div>
  )
}

function Pizza(){
  return <>
    <h2>Pizza🍕 Menu</h2>
    {/* <p>{ pizzaData }</p> */}
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