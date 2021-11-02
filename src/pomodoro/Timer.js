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
    <div style={sessionDisplay} className="mr-5 pr-5 mb-5">
      {/* TODO: This area should show only when a focus 
            or break session is running or pauses */}
             <div className="row d-flex justify-content-center pl-5">
      <p style={{color: "white", fontSize: "150px", marginBottom: "200px"}} className="font-weight-bold">Study</p>
      </div>
      <div className="row py-5 my-5 pr-5 mr-5">
     
        <div className="col mb-5">
          {/* TODO: Update message below to include current session 
                    (Focusing or On Break) and total duration */}
         
          <span
            className="rounded-circle border-0 font-weight-bold mb-5 mr-5"
            data-testid="duration-focus"
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "300px 200px",
              marginRight: "100px",
              fontSize: "200px",
            }}
          >
            {sessionTitle}
          </span>
          {pauseLabel}
        </div>
      </div>
    </div>
  );
}

export default Timer;
