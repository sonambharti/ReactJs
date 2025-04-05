import Options from "./Options";
function Question({question, dispatch, answer}) {
  // console.log(question.options);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer}/>
      {/* <div className="options">
        {question.options.map((option) => {
          return (
            <button className='btn btn-option' key={option}>
              {option}
            </button>
          )
        })}
      </div> */}
    </div>
  )
}

export default Question;