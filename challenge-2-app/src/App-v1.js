import './App.css';
import { useState } from 'react';
 

function Counter() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    // const date = new Date().toLocaleTimeString();
    const date = new Date("June 21 2026");
    date.setDate(date.getDate() + count);
    
    function handleReset() {
        setCount(0);
        setStep(1);
    }

    return (
        <div>
            <div className='step-div'>

                <input 
                    type="range" 
                    min="0"
                    max="10"
                    value={step}
                    onChange={(e) => setStep(Number(e.target.value))}
                >

                </input>
                <span className='step-span'> Step: {step} </span>
            </div>

            <div className='count-div'>
                <button className='negCount' onClick={() => setCount((c) => c - step)}>-</button>
                {/* <span className='count-span'> Count: {count} </span> */}
                <input 
                    type="text" 
                    value={count}
                    onChange={(e) => setCount(Number(e.target.value))}
                ></input>
                <button className='posCount' onClick={() => setCount((c) => c + step)}>+</button>
            </div>

            <p>
                {/* <span>{count===0 ? "Today is " : ""}</span> */}
                <span>{count===0 ? "Today is " : count > 0 ? `${count} days from today is ` : `${Math.abs(count)} days ago was`}</span>
                <span>{date.toDateString()}</span>
            </p>

            {count !== 0 || step !== 1 ? (
                <div>
                    <button onClick={handleReset}>Reset</button>
                </div>
            ) : null

            }

        </div>
    );
}


export default function App() {
    return (
        <div className="App">
            <Counter />
        </div>
    )
}