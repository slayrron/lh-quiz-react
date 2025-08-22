import Question from "./Question";
import { useState } from "react";
import {questionList} from "../datas/questionList";

function App() {

  const [isStarted, setIsStarted] = useState(false)

  function getOneQuestion() {
    return Math.floor(Math.random() * questionList.length)
  }

  return (
    <div className="App">
      {!isStarted && <button onClick={() => setIsStarted(true)}>Start</button>}
      {isStarted && <Question q={questionList[getOneQuestion()]}/>}
    </div>
  );
}

export default App;
