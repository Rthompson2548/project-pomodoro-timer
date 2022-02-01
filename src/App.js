import React from "react";
import "./App.css";
import Pomodoro from "./pomodoro/Pomodoro/Pomodoro";

function App() {
  return (
    <div className="App">
      <header className="pomodoro-header">
        <h1 className="pomodoro-title">Pomodoro Timer</h1>
      </header>
      <div>
        <Pomodoro />
      </div>
    </div>
  );
}

export default App;
