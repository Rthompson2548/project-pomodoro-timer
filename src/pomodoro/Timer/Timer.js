import React from "react";
import { minutesToDuration, secondsToDuration } from "../../utils/duration";
import "./Timer.css";

function Timer(props) {
  /** if the timer is in session, set the display to show the running timer
  if not, do not show it */
  const sessionDisplay = { display: "block" };

  /**  if the timer is on break, display a statement that shows remaning break time
  if not, display statement that shows remaining focus time */
  const sessionTitle = props.onBreak
    ? `${minutesToDuration(props.BreakTime)}`
    : `${secondsToDuration(props.timeRemainingState)}`;
  /* if the timer is paused, display a header that says "paused"
    if not, don't display anything */
  const pauseLabel = props.isPaused ? <p style={{ color: "white" }}></p> : null;

  /** set the progress bar to progress through break time if on break
  set it to progress through focus time if not
  const progressPercentage = props.onBreak
    ? (1 - props.timeRemainingState / (props.BreakTime * 60)) * 100
    : (1 - props.timeRemainingState / (props.FocusTime * 60)) * 100;

  make the width of the progress bar to fill the portion of time completed
  out of full time
  const progressBarStyle = { width: progressPercentage + "%" }; */

  return (
    <div>
      <div>
        <span className="timer-time" data-testid="duration-focus">
          {sessionTitle}
        </span>
        {pauseLabel}
      </div>
    </div>
  );
}

export default Timer;
