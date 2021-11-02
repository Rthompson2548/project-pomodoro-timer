import React from "react"
import "./App.css"
import Pomodoro from "./pomodoro/Pomodoro"

function App() {
  return (
    <div className="App" style={{ backgroundColor: "black"}}>
      <div className="container vh-100 d-flex flex-column justify-content-center" >
        <div className="row">
          <div className="col">
            <header className="App-header container">
              <h1 className="text-nowrap font-weight-bold d-flex justify-content-center" style={{ fontSize: "200px", color: "white", marginBottom: "150px" }}>Pomodoro Timer</h1>
            </header>
           <div>
           <Pomodoro />
           </div>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default App
