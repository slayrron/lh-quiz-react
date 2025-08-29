import Question from "./Question";
import { useState } from "react";
import {questionList} from "../datas/questionList";
import "../styles/session.css"
import back from "../assets/croix.png"

import heartimg from "../assets/heart.png"

function Session({setIsStarted}) {

    const [selectedAnswers, updateSelectedAnswers] = useState([])
    const [goodAnswer, setGoodAnswer] = useState("")
    const [isQuestionAnswered, setIsQuestionAnswered] = useState(false)

    const [nQuestion, setNQuestion] = useState(1)

    const [questionsCopy, setQuestionCopy] = useState(questionList.slice())
    const [index, setIndex] = useState(Math.floor(Math.random() * questionsCopy.length))

    const [nbHearts, setNbHearts] = useState(5)
    
    const sessionSize = 8
    function getNextQuestion() {
        updateSelectedAnswers([])
        setGoodAnswer("")
        setIsQuestionAnswered(false)

        setQuestionCopy(prev => {
            const newQuestions = prev.filter((_, i) => i !== index)
            setIndex(Math.floor(Math.random() * newQuestions.length))
            return newQuestions
        })
        setNQuestion(nQuestion+1)
    }

    return (
        <div>
            <div className="banner">
                <img src={heartimg} className="heartlogo"/><span className="hearttext">{nbHearts}</span>
                <span className="nbQuestion">Question {nQuestion} / {sessionSize}</span>
                <img src={back} onClick={() => setIsStarted(false)} className="backlogo"/>
            </div>
            <Question 
                q={questionsCopy[index]}
                selectedAnswers={selectedAnswers}
                updateSelectedAnswers={updateSelectedAnswers}
                goodAnswer={goodAnswer}
                setGoodAnswer={setGoodAnswer}
                isQuestionAnswered={isQuestionAnswered}
                setIsQuestionAnswered={setIsQuestionAnswered}
                nbHearts={nbHearts}
                setNbHearts={setNbHearts}
            />
            {nbHearts === 0 && <div>Plus de vie ! <button onClick={() => setIsStarted(false)}>Revenir au menu principal</button></div>}
            {(nbHearts !== 0 && isQuestionAnswered && nQuestion < sessionSize) && <button onClick={getNextQuestion} className="btnSuivant">Suivant</button>}
            {(nbHearts !== 0 && isQuestionAnswered && nQuestion >= sessionSize) && 
                <div>
                    <span>Terminé !</span>
                    <button onClick={() => setIsStarted(false)} className="btnSuivant">Revenir au menu principal</button>
                </div>
            }
        </div>
    )
}

export default Session;