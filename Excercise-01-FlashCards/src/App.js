import { useState } from 'react';
// import {questions} from './CardData';
const {questions} = require('./CardData.js');
console.log(questions);

function FlashCards () {
    const [selectedId, setSelectedId] = useState(null);
    
    function handleClick(id) {
        setSelectedId(id !== selectedId ? id : null);
    }
    return (
        <div className='flashcards'>
            {questions.map((question) => (
                <div 
                    key={question.id} 
                    onClick={() => handleClick(question.id)}
                    className={question.id === selectedId ? "selected" : ""}
                >
                        <p>
                            {question.id === selectedId ? question.answer : question.question}
                        </p>
                </div>
            ))}
        </div>
    );
}

export default function App() {
    return (
        <div className='App'>
            {/* <h1>FLASH CARDS</h1> */}
            <FlashCards />
        </div>
    )
}