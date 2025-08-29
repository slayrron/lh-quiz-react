import { useState } from "react";
import "../styles/question.css"

function Question({q, selectedAnswers, updateSelectedAnswers, goodAnswer, setGoodAnswer, isQuestionAnswered, setIsQuestionAnswered, nbHearts, setNbHearts}) {

    const toggle = (value) => {
        updateSelectedAnswers((prev) =>
        prev.includes(value)
            ? prev.filter((v) => v !== value)
            : [...prev, value]
        );
    };
    
    function checkAnswers() {
        setGoodAnswer(_ => {
            const answerbool = JSON.stringify(selectedAnswers.sort()) === JSON.stringify(q.goodAnswerIndex.sort())
            setNbHearts(nbHearts - (answerbool === false))
            return answerbool
        })
        setIsQuestionAnswered(true)
    }

    return (
        <div>
            <img src={q.image} alt="Image question" className="question-img"></img>
            <div>
                {q.question}
            </div>
            <div className="answers">
                {q.answers.map(((answer,index) => (
                    <label className="checkbox-button">
                        <input
                            type="checkbox"
                            checked={selectedAnswers.includes(index)}
                            onChange={() => toggle(index)}
                            disabled={isQuestionAnswered}
                        />
                        {!isQuestionAnswered && <span className="answer">{answer}</span>}
                        {(isQuestionAnswered && q.goodAnswerIndex.includes(index)) && <span className="goodAnswer">{answer}</span>}
                        {(isQuestionAnswered && !q.goodAnswerIndex.includes(index)) && <span className="badAnswer">{answer}</span>}
                    </label>
                )))}
            </div>
            {!isQuestionAnswered && <button onClick={checkAnswers} className="btnValider">Valider</button>}

            {goodAnswer && <div style={{color: "green"}}>Bonne réponse !</div>}
            {goodAnswer === false && 
                <div style={{color: "red"}}>Mauvaise réponse, les bonnes réponses étaient : <br/>
                    {q.goodAnswerIndex.map((index) => (<span>{q.answers[index]}<br/></span>))}
                </div>
            }
        </div>
    )
}

export default Question;