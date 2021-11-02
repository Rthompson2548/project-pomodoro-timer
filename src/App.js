import React from "react"
import "./App.css"
import Pomodoro from "./pomodoro/Pomodoro"

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#081949" }}>
      <div className="container vh-100 d-flex flex-column justify-content-center" >
        <div className="row">
          <div className="col">
            <header className="App-header container">
              <h1 className="text-wrap font-weight-bold d-flex justify-content-center" style={{ fontSize: "300px", color: "red", marginBottom: "500px" }}>Pomodoro Timer</h1>
            </header>
            <Pomodoro />
          </div>  
        </div>
      </div>
    </div>
  )
}

export default App
