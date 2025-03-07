import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App-v1';
import App from './App-v2';
// import App from './App-v3';
// import App from './Components/App';
// import StarRating from './Components/StarRating';

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating color='blue' maxRating={10} onSetRating={setMovieRating}/>
//       <p>This movie was rated {movieRating} stars.</p>
//     </div>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5}  messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}/> */}
    {/* <StarRating maxRating={10}/> */}
    {/* This can create a problem due to not sending any datat for props. SO, we need to set some default value.  */}
    {/* <StarRating />  */}
    {/* <StarRating size={24} color='red'/> */}
    {/* <Test /> */}
  </React.StrictMode>
);
