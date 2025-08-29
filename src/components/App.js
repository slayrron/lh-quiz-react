import Session from "./Session";
import { useState } from "react";
import "../styles/app.css"

function App() {

  const [isStarted, setIsStarted] = useState(false)
  const [isSession1Done, setIsSession1Done] = useState(false)

  return (
    <div className="App">
      {!isStarted && 
        <div>
          <h1 className="title">Unocodigo</h1>
          <button className="start-button" onClick={() => setIsStarted(true)}>1</button>
          <button className="start-button" disabled={!isSession1Done} onClick={() => setIsStarted(true)}>2</button>
        </div>
      }
      {isStarted && <Session setIsStarted={setIsStarted} setIsSessionDone={setIsSession1Done}/>}
    </div>
  );
}

export default App;
