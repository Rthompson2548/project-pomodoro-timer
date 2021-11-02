import React from "react";
import { minutesToDuration } from "../utils/duration";

function FocusTime(props) {
  return (
    <div className="col">
      <div>
        <div className="input-group input-group-lg">
         
          <span
          className="rounded-circle border-0 font-weight-bold mb-5"
            // className="input-group-text border-0 p-4 font-weight-bold"
            data-testid="duration-focus"
            // style={{ fontSize: "100px", backgroundColor: "#081949", color: "white" }}
            style={{ backgroundColor: "red", color: "white", padding: "200px 175px", fontSize: "100px", margin: "0px 100px" }}
          >
            {/* Focus: */}
             <p>{minutesToDuration(props.FocusTime)}</p>
          </span>
          <div className="input-group-append input-group-lg" style={{ marginLeft: "125px" }}>
            {/* TODO: Implement decreasing focus duration and disable during 
              a focus or break session */}

            {/* button that decreases focus time by 5 mins */}
            <button
              type="button"
              className="btn m-4 px-4 py-3"
              style={{ fontSize: "100px", color: "white" }}
              data-testid="decrease-focus-time"
              onClick={props.subtractFiveMinutes}
            >
              <span className="oi oi-minus" />
            </button>

            {/* TODO: Implement increasing focus duration and disable during 
              a focus or break session */}

            {/* button that increases focus time by 5 mins */}
            <button
              type="button"
              style={{ fontSize: "100px", color: "white" }}
              className="btn m-4 px-4 py-3"
              data-testid="increase-focus-time"
              onClick={props.addFiveMinutes}
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FocusTime;