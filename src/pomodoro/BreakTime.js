import React from "react";
import { minutesToDuration } from "../utils/duration";

function BreakTime(props) {
  return (
    <div className="col-4 col">
      <div className="float-right ml-4">
        <div className="input-group input-group-lg mb-2">
          <span
            className="input-group-text"
            data-testid="duration-focus"
            style={{ fontSize: "60px" }}
          >
            {/* TODO: Update this text to display the current 
                break session duration */}
            {/* break button label */}
            Break Duration: {minutesToDuration(props.BreakTime)}
          </span>
          <div className="input-group-append input-group-lg" >
            {/* TODO: Implement decreasing break duration and disable 
                during a focus or break session*/}

            {/* button for decreasing break time by 1 min */}
            <button
              type="button"
              style={{ fontSize: "60px" }}
              className="btn btn-secondary m-4 px-4 py-3"
              data-testid="decrease-break-time"
              onClick={props.downByOne}
            >
              <span className="oi oi-minus" />
            </button>

            {/* TODO: Implement increasing break duration and 
                disable during a focus or break session*/}

            {/* button for increasing break time by 1 min */}
            <button
              type="button"
              style={{ fontSize: "60px" }}
              className="btn btn-secondary m-4 px-4 py-3"
              data-testid="increase-break-time"
              onClick={props.upByOne}
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BreakTime;
