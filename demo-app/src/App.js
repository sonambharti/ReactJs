import { useState } from "react";
function click() {
  alert(`Button Click`);
}
export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  async function getAdvice() {
    const res = await fetch(`https://api.adviceslip.com/advice`);
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
    console.log(data);
  }
  return (
    <div>
      <h1>Hello World😍</h1>
      <button onClick={click}>Click Me!</button>
      <h3>{advice}</h3>
      <button onClick={getAdvice}> Get Advice </button>
      <p>
        You have read <strong>{count}</strong> pieces of advice.
      </p>
    </div>
  );
}
