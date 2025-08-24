import Question from "./Question";
import { useState } from "react";
import {questionList} from "../datas/questionList";

function Session() {
    const [goodAnswer, setGoodAnswer] = useState("")
    const [isQuestionAnswered, setIsQuestionAnswered] = useState(false)
    const [index, setIndex] = useState(0)

    function getOneQuestion() {
        return Math.floor(Math.random() * questionList.length)
    }

    function getNextQuestion() {
        setGoodAnswer("")
        setIsQuestionAnswered(false)
        setIndex(index+1)
    }

    return (
        <div>
            <Question 
                q={questionList[index]} 
                goodAnswer={goodAnswer} 
                setGoodAnswer={setGoodAnswer} 
                setIsQuestionAnswered={setIsQuestionAnswered}
            />
            {(isQuestionAnswered && index < questionList.length - 1) && <button onClick={getNextQuestion}>Suivant</button>}
            {(isQuestionAnswered && index >= questionList.length - 1) && <span>Terminé !</span>}
            
        </div>
    )
}

export default Session;