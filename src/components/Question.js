import { useState } from "react";
import "../styles/image.css"

function Question({q, goodAnswer, setGoodAnswer, setIsQuestionAnswered}) {

    return (
        <div>
            <img src={q.image} className="question-img"></img>
            <div>
                {q.question}
            </div>
            <div>
                {q.answers.map(((answer,index) => (
                    index === q.goodAnswerIndex ? 
                        <button onClick={() => setGoodAnswer(true)}>{answer}</button>
                        : <button onClick={() => setGoodAnswer(false)}>{answer}</button>
                )))}
            </div>
            {goodAnswer !== "" && setIsQuestionAnswered(true)}
            {goodAnswer && <div>Bonne réponse !</div>}
            {goodAnswer === false && <div>Mauvaise réponse, la bonne réponse était : {q.answers[q.goodAnswerIndex]}</div>}
        </div>
    )
}

export default Question;