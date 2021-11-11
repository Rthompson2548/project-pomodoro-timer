import React from "react";
import { minutesToDuration } from "../utils/duration";

function BreakTime(props) {
  return (
    <div className="col">
      <div className="float-right">
        <div className="input-group input-group-lg">
          <span
          className="rounded-circle border-0 font-weight-bold mb-1 px-5"
          data-testid="duration-focus"
          style={{ backgroundColor: "#F4755A", color: "white" }}
          >
            {/* TODO: Update this text to display the current 
                break session duration */}
            {/* break button label */}
            <p class="mt-3" style={{ fontSize: "32px" }}>Break</p>
            <p style={{ fontSize: "70px" }}>{minutesToDuration(props.BreakTime)}</p>
            <div className="input-group-append input-group-lg d-flex justify-content-center pb-2">
            {/* TODO: Implement decreasing break duration and disable 
                during a focus or break session*/}

            {/* button for decreasing break time by 1 min */}
            <button
              type="button"
              style={{ fontSize: "32px" }}
              className="btn text-white"
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
              style={{ fontSize: "32px" }}
              className="btn text-white"
              data-testid="increase-break-time"
              onClick={props.upByOne}
            >
              <span className="oi oi-plus" />
            </button>
          </div>
            
          </span>
        </div>
      </div>
    </div>
  );
}

export default BreakTime;
