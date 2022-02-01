import React from "react";
import { minutesToDuration } from "../../utils/duration";
import "./FocusTime.css";

function FocusTime(props) {
  return (
    <span data-testid="duration-focus" className="focus-time-column">
      <p className="focus-title">Focus</p>
      <p className="focus-time-timer">{minutesToDuration(props.FocusTime)}</p>
      <div className="focus-time-buttons-container">
        {/* button that decreases focus time by 5 mins */}
        <button
          className="focus-time-button focus-time-minus-button"
          type="button"
          data-testid="decrease-focus-time"
          onClick={props.downByFive}
        >
          <span className="oi oi-minus modify-focus-time-symbol" />
        </button>

        {/* button that increases focus time by 5 mins */}
        <button
          className="focus-time-button focus-time-plus-button"
          type="button"
          data-testid="increase-focus-time"
          onClick={props.upByFive}
        >
          <span className="oi oi-plus modify-focus-time-symbol" />
        </button>
      </div>
    </span>
  );
}

export default FocusTime;
