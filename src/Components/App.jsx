import React, {useState} from "react";
import Board from "./Board/Board";
import "./App.css";



function App() {
    const [startGame, setStart] = useState(false);
  
    function handleStart()
      {
          setStart(prevVal => {
              return !prevVal;
          });
          
      }
    
    return startGame?(
        <div className="App">
            <Board />
        </div>
    ):
    (<div className="App">
    <button onClick={handleStart}>Start Game</button>
    </div>);
}

export default App;