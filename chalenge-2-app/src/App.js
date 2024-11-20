import './App.css';
import { useState } from 'react';

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
};


function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);
  
  const date = new Date("June 21 2027");
  date.setDate(date.getDate() + count);

  function handlePos() {
    setCount((c) => c+1);
  }
  function handleNeg() {
    setCount((c) => c-1);
  }
  return (
    <div>
      <div className='step-div'>
        <button className='negStep' onClick={() => {
          setStep((s) => s-1)
        }}>-</button>
        <span className='step-span'> Step: {step} </span>
        <button className='posStep' onClick={() => {
          setStep((s) => s+1)
        }}>+</button>
      </div>

      <div className='count-div'>
        <button className='negCount' onClick={handleNeg}>-</button>
        <span className='count-span'> Count: {count} </span>
        <button className='posCount' onClick={handlePos}>+</button>
      </div>

      <p>
        {/* <span>{count===0 ? "Today is " : ""}</span> */}
        <span>{count===0 ? "Today is " : count > 0 ? `${count} days from today was ` : ``}</span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  )
}