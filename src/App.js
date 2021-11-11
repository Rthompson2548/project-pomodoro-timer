import React from "react";
import "./App.css";
import Pomodoro from "./pomodoro/Pomodoro";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#172F63" }}>
      <div className="container text-wrap d-flex justify-content-center">
        <div className="row">
          <div>
            <header className="App-header">
              <nav class="row p-5 d-flex justify-content-center">
                <h1
                  class="font-weight-bold text-white mr-2"
                  style={{ fontSize: "100px" }}
                >
                  Pomodoro Timer
                </h1>
              </nav>
            </header>
            <div>
              <Pomodoro />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
