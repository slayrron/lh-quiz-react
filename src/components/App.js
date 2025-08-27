import Session from "./Session";
import { useState } from "react";
import "../styles/app.css"

function App() {

  const [isStarted, setIsStarted] = useState(false)

  return (
    <div className="App">
      {!isStarted && 
        <div>
          <h1 className="title">Unopermiso</h1>
          <button className="start-button" onClick={() => setIsStarted(true)}>Démarrer une session</button>
        </div>
      }
      {isStarted && <Session setIsStarted={setIsStarted}/>}
    </div>
  );
}

export default App;
