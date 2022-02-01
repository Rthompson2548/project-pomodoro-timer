import React from "react";
import { minutesToDuration } from "../../utils/duration";
import "./BreakTime.css";

function BreakTime(props) {
  return (
    <span data-testid="duration-focus" className="break-time-column">
      <p className="break-time-title">Break</p>
      <p className="break-time-timer">{minutesToDuration(props.BreakTime)}</p>
      <div>
        {/* button for decreasing break time by 1 min */}
        <button
          className="break-time-button break-time-minus-button"
          type="button"
          data-testid="decrease-break-time"
          onClick={props.downByOne}
        >
          <span className="oi oi-minus modify-break-time-symbol" />
        </button>

        {/* button for increasing break time by 1 min */}
        <button
          className="break-time-button break-time-plus-button"
          type="button"
          data-testid="increase-break-time"
          onClick={props.upByOne}
        >
          <span className="oi oi-plus modify-break-time-symbol" />
        </button>
      </div>
    </span>
  );
}

export default BreakTime;
