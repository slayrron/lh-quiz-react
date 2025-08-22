import { useState } from "react";

function Question() {

    const [goodAnswer, setGoodAnswer] = useState("")
    return (
        <div>
            <div>
                Hors agglomération, la limitation est à 80 km/h
            </div>
            <div>
                <button onClick={() => setGoodAnswer(true)}>Vrai</button>
                <button onClick={() => setGoodAnswer(false)}>Faux</button>
            </div>
            {goodAnswer && <div>Bonne réponse !</div>}
            {goodAnswer === false && <div>Mauvaise réponse...</div>}
        </div>
    )
}

export default Question;