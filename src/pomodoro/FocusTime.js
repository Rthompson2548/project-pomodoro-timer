import React from "react";
import { minutesToDuration } from "../utils/duration";

function FocusTime(props) {
  return (
    <div className="col col-4 mr-4">
      <div className="float-right mr-4">
        <div className="input-group input-group-lg mb-2">
          <span
            className="input-group-text"
            data-testid="duration-focus"
            style={{ fontSize: "60px" }}
          >
            {/* TODO: Update this text to display the current focus session duration 
              (in minutes) */}
            Focus Duration: {minutesToDuration(props.FocusTime)}
          </span>
          <div className="input-group-append input-group-lg mr-4 ml-4">
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
