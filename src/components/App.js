import Session from "./Session";
import { useState } from "react";
import "../styles/app.css"

function App() {

  const [isStarted, setIsStarted] = useState(false)
  const [isSession1Done, setIsSession1Done] = useState(false)
  const [isSession2Done, setIsSession2Done] = useState(false)
  const [isSession3Done, setIsSession3Done] = useState(false)
  const [isSession4Done, setIsSession4Done] = useState(false)

  const [selectedCategory, setSelectedCategory] = useState("")

  var pathUnlock = [setIsSession1Done, setIsSession2Done, setIsSession3Done, setIsSession4Done]
  const [pathId, setPathId] = useState(0)

  function startSession(category, id) {
    setSelectedCategory(category)
    setPathId(id)
    setIsStarted(true)
  }

  return (
    <div className="App">
      {!isStarted &&
        <div>
          <h1 className="title">Unocodigo</h1>
          <div className="road">
            <button className="start-button left" onClick={() => startSession("Panneau 1", 0)}>1</button>
            <button className="start-button right" disabled={!isSession1Done} onClick={() => startSession("Panneau 2", 1)}>2</button>
            <button className="start-button left" disabled={!isSession2Done} onClick={() => startSession("Panneau", 2)}>3</button>
            <button className="start-button right" disabled={!isSession3Done} onClick={() => startSession("Route", 3)}>4</button>
            <button className="start-button left" disabled={!isSession4Done} onClick={() => startSession("", 3)}>5</button>
          </div>
        </div>
      }
      {isStarted &&
        <Session
          setIsStarted={setIsStarted}
          category={selectedCategory}
          setIsSessionDone={pathUnlock[pathId]}
        />
      }
    </div>
  );
}

export default App;
