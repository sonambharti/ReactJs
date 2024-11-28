import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <>
    <Steps />
    </>
  )
}

function Steps() {
  // const step = 1;
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true); // If true show the step pannel, otherwise hide/don't show all.
  // const [test, setTest] = useState({ name: "Sonam" });
  
  // Note: Always treat state in react as immutable

  function handlePrevious(){
    // alert("Previous");
    if (step > 1){
      // setStep(step - 1);
      /**It's a good practice to use arrow function to update the current state of a state */
      setStep((s) => s - 1);
    }
    
  }
  
  function handleNext(){
    // alert("Nexts");
    if (step < 3){
      setStep((s) => s + 1);
      // setStep(step + 1);
      // setStep(step + 1); // returns 1 only. So, this is wrong way. We can instead use arrow funcn in the place of value
    }
    // test.name = "Fred";  // Bad practice to mutate a state object
    // setTest({ name: "Fred" });
  }


  return (
    <div>
      <button className="close" onClick={() => {
        setIsOpen(!isOpen)
      }}>&times;</button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            
            <div className={step >=1 ? "active" : ""}>1</div>
            <div className={step >=2 ? "active" : ""}>2</div>
            <div className={step >=3 ? "active" : ""}>3</div>

            {/* <div className={`${step >=1 ? "active" : ""}`}>1</div>
            <div className={`${step >=2 ? "active" : ""}`}>2</div>
            <div className={`${step >=3 ? "active" : ""}`}>3</div> */}
          </div>
          
      
          {/* <p className="message">
            Step {step} : {messages[step - 1]}

          </p> */}

          <StepMessage step={step}>
            {messages[step - 1]}
          </StepMessage>

          <div className="buttons">

          <Button textColor="#fff" bgColor="#7950f2" onClickFunc={handlePrevious}>
            <span>👈</span> Previous
          </Button>
            <Button textColor="#fff" bgColor="#7950f2" onClickFunc={handleNext}>
              Next <span>👉</span>
            </Button>

            {/* <Button textColor="#fff" bgColor="#7950f2" onClickFunc={handlePrevious} emoji="👈" text="Previous" />
            <Button textColor="#fff" bgColor="#7950f2" onClickFunc={handleNext} emoji="👉" text="Next" /> */}
            {/* <button style={{ backgroundColor: "#7950f2", color: "#fff"}} onClick={handlePrevious} >
              Previous
            </button>
            <button style={{ backgroundColor: "#7950f2", color: "#fff"}} onClick={handleNext}>
              Next
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
}

function StepMessage({step, children}){
  return <p className="message">
    <h3> Step {step} </h3>
    {children}
  </p>
}
function Button({textColor, bgColor, onClickFunc, children}) {
  return <button 
            style={{ backgroundColor: bgColor, 
            color: {textColor}}} 
            onClick={onClickFunc}
          >
            {children}
            {/* <span>{emoji} </span>{text} */}
         </button>
}

// function Button({textColor, bgColor, onClickFunc, emoji, text}) {
//   return <button 
//             style={{ backgroundColor: bgColor, 
//             color: {textColor}}} 
//             onClick={onClickFunc}
//           >

//             <span>{emoji} </span>{text}
//          </button>
// }