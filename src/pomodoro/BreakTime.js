import React from "react";
import { minutesToDuration } from "../utils/duration";

function BreakTime(props) {
  return (
    <div className="col">
      <div className="float-right">
        <div className="input-group input-group-lg mb-2">
          <span
          className="rounded-circle border-0 font-weight-bold mb-5"
          data-testid="duration-focus"
          style={{ backgroundColor: "green", color: "white", padding: "100px 125px", margin: "0px 100px"  }}
          >
            {/* TODO: Update this text to display the current 
                break session duration */}
            {/* break button label */}
            <p style={{ fontSize: "50px" }}>Break</p>
            <p style={{ fontSize: "100px" }}>{minutesToDuration(props.BreakTime)}</p>
          </span>
          <div className="input-group-append input-group-lg" style={{ marginLeft: "125px" }}>
            {/* TODO: Implement decreasing break duration and disable 
                during a focus or break session*/}

            {/* button for decreasing break time by 1 min */}
            <button
              type="button"
              style={{ fontSize: "80px", color: "white" }}
              className="btn m-4 px-4 py-3"
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
              style={{ fontSize: "80px", color: "white" }}
              className="btn m-4 px-2 py-3"
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
