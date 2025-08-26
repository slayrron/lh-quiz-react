import Session from "./Session";
import { useState } from "react";

function App() {

  const [isStarted, setIsStarted] = useState(false)

  return (
    <div className="App">
      {!isStarted && <button onClick={() => setIsStarted(true)}>Démarrer une session</button>}
      {isStarted && <Session setIsStarted={setIsStarted}/>}
    </div>
  );
}

export default App;
