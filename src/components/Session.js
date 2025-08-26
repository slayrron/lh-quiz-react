import Question from "./Question";
import { useState } from "react";
import {questionList} from "../datas/questionList";
import "../styles/session.css"

var questionsCopy = questionList.slice()
var nb_q = 1

function Session({setIsStarted}) {
    const [selectedAnswers, updateSelectedAnswers] = useState([])
    const [goodAnswer, setGoodAnswer] = useState("")
    const [isQuestionAnswered, setIsQuestionAnswered] = useState(false)

    const [index, setIndex] = useState(Math.floor(Math.random() * questionsCopy.length))

    function getNextQuestion() {
        updateSelectedAnswers([])
        setGoodAnswer("")
        setIsQuestionAnswered(false)

        questionsCopy = questionsCopy.filter((_, i) => i !== index)
        setIndex(Math.floor(Math.random() * questionsCopy.length))
        nb_q++
    }

    return (
        <div>
            <div className="banner">
                Question {nb_q} / 3
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
            {(isQuestionAnswered && nb_q < 3) && <button onClick={getNextQuestion}>Suivant</button>}
            {(isQuestionAnswered && nb_q >= 3) && <div><span>Terminé !</span><button onClick={() => setIsStarted(false)}>Revenir au menu principal</button></div>}
            
        </div>
    )
}

export default Session;