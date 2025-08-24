import Session from "./Session";
import { useState } from "react";

function App() {

  const [isStarted, setIsStarted] = useState(false)

  return (
    <div className="App">
      {!isStarted && <button onClick={() => setIsStarted(true)}>Start</button>}
      {isStarted && <Session/>}
    </div>
  );
}

export default App;
