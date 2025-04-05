import { useEffect, useReducer, useState } from "react";
import Header from "./Header";
import Error from "./Error";
import Main from "./Main";
import Loader from "./Loader";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishedScreen from "./FinishedScreen";
// import DateCounter from "./DateCounter";


const initialState = {
    questions: [],
    // 'loading', 'error', 'ready', 'active', 'finished'
    status: 'loading',
    index: 0,
    answer: null,
    points: 0,
    highscore: 0,
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
        case 'newAnswer':
            const question = state.questions.at(state.index);

            return {
                ...state,
                answer: action.payload,
                points:
                action.payload === question.correctOption
                  ? state.points + question.points
                  : state.points,
            };
        case "nextQuestion":
            return {
                ...state,
                index: state.index + 1,
                answer: null,
            };
        case "finish":
            return {    
                ...state,
                status: 'finished',
                highscore:
                state.points > state.highscore ? state.points : state.highscore,
            };
        case "restart":
            return {
                ...initialState,
                questions: state.questions,
                status: 'ready'
            }
            // return {
            //     ...state,
            //     points: 0,
            //     highscore: 0,
            //     index: 0,
            //     answer: null,
            //     status: 'ready',
            // }
            
        default:
            throw new Error ('Unknown Error/Action')
    }
}
export default function App(){
    const [state, dispatch] = useReducer(reducer, initialState);
    const {questions, status, index, answer, points, highscore} = state;
    const numQuestions = questions.length;
    const maxPossiblePoints = questions.reduce(
        (prev, cur) => prev + cur.points,
        0
      );
    
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
    }, []); // dependency array should be here.

    return ( 
        <div className="app">
            {/* <DateCounter /> */}
            <Header />
            <Main>
                { status === "loading" && <Loader />}
                { status === "error" && <Error />}
                { status === "ready" && <StartScreen numQuestions={numQuestions} dispatch={dispatch}/>}
                { status === "active" && 
                    <>
                        <Progress index={index} 
                            numQuestions={numQuestions} 
                            points={points} 
                            maxPossiblePoints={maxPossiblePoints} 
                            answer={answer}
                        />
                        <Question question={questions[index]} dispatch={dispatch} answer={answer} />
                        <NextButton index={index} numQuestions={numQuestions} dispatch={dispatch} answer={answer} />
                    </>
                }
                { status === "finished" && (
                    <FinishedScreen points={points} maxPossiblePoints={maxPossiblePoints} dispatch={dispatch} highscore={highscore}/>
                )}
            </Main>
            
            
        </div>
    )
}