import { useState, useReducer } from "react";

const initialState = { count: 0, step: 1}
function reducer(state, action) { // state = initial state, action = updates from dispatch
  console.log(state, action);

  // if (action.type === 'increment') return state + 1; // return state + action.payload;
  // if (action.type === 'decrement') return state - 1;
  // if (action.type === 'setCount') return action.payload;
  switch (action.type) {
    case 'increment':
      // return {...state, count: state.count + action.payload}; // Use action.payload for increment
      return {...state, count: state.count + state.step}; 
    case 'decrement':
      // return {...state, count: state.count - action.payload}; // Use action.payload for decrement
      return {...state, count: state.count - state.step}; 
    case 'setCount':
      return {...state, count: action.payload}; // Use action.payload for decrement
    case 'setStep':
      return {...state, step: state.step + action.payload}; // Use action.payload for decrement
    case 'reset' :
      // return {...state, count: 0, step: 1};
      return initialState;
    default:
      return state; // Return the current state if no action matches
  }
  // return state + action;
}

function DateCounter() {
  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);
  // const [count, dispatch] = useReducer(reducer, 0); //useReducer takes 2 arguments. 1st => reducer function & initial state.
  // const initialState = { count: 0, step: 1}
  const [state, dispatch] = useReducer(reducer, initialState); //useReducer takes 2 arguments. 1st => reducer function & initial state.
  
  const {count, step} = state; // destructuring from state

  // This mutates the date object.
  const date = new Date("june 21 2024");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({type: 'decrement', payload: -1});
    // dispatch(-1);
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
  };

  const inc = function () {
    dispatch({type: 'increment', payload: 1});
    // dispatch(1);
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
  };

  const defineCount = function (e) {
    dispatch({type: 'setCount', payload: Number(e.target.value)});
    // setCount(Number(e.target.value));  
  };

  const defineStep = function (e) {
    dispatch({type: 'setStep', payload: Number(e.target.value)});
    // setStep(Number(e.target.value));
  };

  const reset = function () {
    dispatch({type: 'reset'});
    // setCount(0);
    // setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;