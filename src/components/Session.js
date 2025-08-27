import Question from "./Question";
import { useState } from "react";
import {questionList} from "../datas/questionList";
import "../styles/session.css"

function Session({setIsStarted}) {

    const [selectedAnswers, updateSelectedAnswers] = useState([])
    const [goodAnswer, setGoodAnswer] = useState("")
    const [isQuestionAnswered, setIsQuestionAnswered] = useState(false)

    const [nbQuestion, setNbQuestion] = useState(1)

    const [questionsCopy, setQuestionCopy] = useState(questionList.slice())
    const [index, setIndex] = useState(Math.floor(Math.random() * questionsCopy.length))
    

    function getNextQuestion() {
        updateSelectedAnswers([])
        setGoodAnswer("")
        setIsQuestionAnswered(false)

        setQuestionCopy(prev => {
            const newQuestions = prev.filter((_, i) => i !== index)
            setIndex(Math.floor(Math.random() * newQuestions.length))
            return newQuestions
        })
        setNbQuestion(nbQuestion+1)
    }

    return (
        <div>
            <div className="banner">
                Question {nbQuestion} / 3
            </div>
            <Question 
                q={questionsCopy[index]}
                selectedAnswers={selectedAnswers}
                updateSelectedAnswers={updateSelectedAnswers}
                goodAnswer={goodAnswer} 
                setGoodAnswer={setGoodAnswer}
                isQuestionAnswered={isQuestionAnswered}
                setIsQuestionAnswered={setIsQuestionAnswered}
            />
            {(isQuestionAnswered && nbQuestion < 3) && <button onClick={getNextQuestion}>Suivant</button>}
            {(isQuestionAnswered && nbQuestion >= 3) && 
                <div>
                    <span>Terminé !</span>
                    <button onClick={() => setIsStarted(false)}>Revenir au menu principal</button>
                </div>
            }
        </div>
    )
}

export default Session;