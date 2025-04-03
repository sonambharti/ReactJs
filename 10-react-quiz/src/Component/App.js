import { useEffect, useReducer, useState } from "react";
import Header from "./Header";
import Error from "./Error";
import Main from "./Main";
import Loader from "./Loader";
import StartScreen from "./StartScreen";
import Question from "./Question";
// import DateCounter from "./DateCounter";


const initialState = {
    questions: [],
    // 'loading', 'error', 'ready', 'active', 'finished'
    status: 'loading',
    index: 0,
}

function reducer(state, action) {
    switch (action.type){
        case 'dataReceived':
            return {
                ...state,
                questions: action.payload,
                status: 'ready',
            };
        case 'dataFailed':
            return {
                ...state,
                status: 'error',
            };
        case 'start':
            return {
                ...state,
                status: 'active',
            };
        default:
            throw new Error ('Unknown Error/Action')
    }
}
export default function App(){
    const [state, dispatch] = useReducer(reducer, initialState);
    const {questions, status, index} = state;
    const numQuestions = questions.length;
    
    useEffect(function () {
        fetch('http://localhost:8000/questions')
        .then((res) => 
            res.json()
        )
        .then((data) => {
            // console.log(data);
            dispatch({type: "dataReceived", payload: data});
        })
        .catch((err) => {
            // console.log(err);
            dispatch({type: "dataFailed"})
        })
    }, []);

    return ( 
        <div className="app">
            {/* <DateCounter /> */}
            <Header />
            <Main>
                { status === "loading" && <Loader />}
                { status === "error" && <Error />}
                { status === "ready" && <StartScreen numQuestions={numQuestions} dispatch={dispatch}/>}
                { status === "active" && <Question question={questions[index]} />}
            </Main>
            
            
        </div>
    )
}