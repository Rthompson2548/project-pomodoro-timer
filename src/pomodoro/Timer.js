import React from "react";
import { minutesToDuration, secondsToDuration } from "../utils/duration";

function Timer(props) {
  // if the timer is in session, set the display to show the running timer
  // if not, do not show it
  const sessionDisplay =
    props.inSession || props.onBreak
      ? { display: "block" }
      : { display: "none" };

  // while in session...
  // if the timer is on break, display a statement that shows remaning break time
  // if not, display statement that shows remaining focus time
  const sessionTitle = props.onBreak
    ? `${minutesToDuration(props.BreakTime)}`
    : `${secondsToDuration(props.timeRemainingState)}`;
  // if the timer is paused, display a header that says "paused"
  // if not, don't display anything
  const pauseLabel = props.isPaused ? (
    <h1 style={{ color: "white" }}></h1>
  ) : null;

  // set the progress bar to progress through break time if on break
  // set it to progress through focus time if not
  const progressPercentage = props.onBreak
    ? (1 - props.timeRemainingState / (props.BreakTime * 60)) * 100
    : (1 - props.timeRemainingState / (props.FocusTime * 60)) * 100;

  // make the width of the progress bar to fill the portion of time completed
  // out of full time
  const progressBarStyle = { width: progressPercentage + "%" };

  return (
    <div style={sessionDisplay} className="mb-5">
      {/* TODO: This area should show only when a focus 
            or break session is running or pauses */}
      <div className="row mb-2">
        <div className="col">
          {/* TODO: Update message below to include current session 
                    (Focusing or On Break) and total duration */}
          <h1
            className="mb-4 pb-4 font-weight-normal"
            style={{ fontSize: "200px", color: "white" }}
            data-testid="session-title"
          >
            {sessionTitle}
          </h1>
          {pauseLabel}
        </div>
      </div>
      <div className="row mb-2">
        <div className="col col-12 d-flex justify-content-center">
          <div className="progress" style={{ height: "50px", width: "200%" }}>
            {/* <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        aria-valuenow={progressPercentage} 
                        style={progressBarStyle} 
                    />
                     */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timer;

//  style={{ outline: "25px solid red", backgroundColor: "#081949", color: "white", padding: "200px 175px", fontSize: "100px"  }}
