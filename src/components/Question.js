import { useState } from "react";
import {questionList} from "../datas/questionList";
import "../styles/image.css"

function Question() {

    const [goodAnswer, setGoodAnswer] = useState("")
    const q = questionList[0]

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
            {goodAnswer && <div>Bonne réponse !</div>}
            {goodAnswer === false && <div>Mauvaise réponse, la bonne réponse était : {q.answers[q.goodAnswerIndex]}</div>}
        </div>
    )
}

export default Question;