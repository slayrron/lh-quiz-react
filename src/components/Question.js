import { useState } from "react";
import "../styles/image.css"

function Question({q, selectedAnswers, updateSelectedAnswers, goodAnswer, setGoodAnswer, setIsQuestionAnswered}) {

    const toggle = (value) => {
        updateSelectedAnswers((prev) =>
        prev.includes(value)
            ? prev.filter((v) => v !== value)
            : [...prev, value]
        );
    };
    
    function checkAnswers() {
        setGoodAnswer(JSON.stringify(selectedAnswers.sort()) === JSON.stringify(q.goodAnswerIndex.sort()))
        setIsQuestionAnswered(true)
    }



    return (
        <div>
            <img src={q.image} className="question-img"></img>
            <div>
                {q.question}
            </div>
            <div>
                {q.answers.map(((answer,index) => (
                    <label>
                        <input
                            type="checkbox"
                            checked={selectedAnswers.includes(index)}
                            onChange={() => toggle(index)}
                        />
                        {answer}
                    </label>
                )))}
            </div>
            <button onClick={checkAnswers}>Valider</button>

            {goodAnswer && <div>Bonne réponse !</div>}
            {goodAnswer === false && 
                <div>Mauvaise réponse, les bonnes réponses étaient : <br/>
                    {q.goodAnswerIndex.map((index) => (<span>{q.answers[index]}<br/></span>))}
                </div>
            }
        </div>
    )
}

export default Question;