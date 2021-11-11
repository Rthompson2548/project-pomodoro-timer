import React from "react";
import { minutesToDuration, secondsToDuration } from "../utils/duration";

function Timer(props) {
  // if the timer is in session, set the display to show the running timer
  // if not, do not show it
  const sessionDisplay = { display: "block" };
  // props.inSession || props.onBreak
  // ? { display: "block" }
  // : { display: "none" };

  // while in session...
  // if the timer is on break, display a statement that shows remaning break time
  // if not, display statement that shows remaining focus time
  const sessionTitle = props.onBreak
    ? `${minutesToDuration(props.BreakTime)}`
    : `${secondsToDuration(props.timeRemainingState)}`;
  // if the timer is paused, display a header that says "paused"
  // if not, don't display anything
  const pauseLabel = props.isPaused ? <p style={{ color: "white" }}></p> : null;

  // set the progress bar to progress through break time if on break
  // set it to progress through focus time if not
  // const progressPercentage = props.onBreak
  //   ? (1 - props.timeRemainingState / (props.BreakTime * 60)) * 100
  //   : (1 - props.timeRemainingState / (props.FocusTime * 60)) * 100;

  // make the width of the progress bar to fill the portion of time completed
  // out of full time
  // const progressBarStyle = { width: progressPercentage + "%" };

  return (
    <div style={sessionDisplay} className="mt-5 pt-5">
      {/* TODO: This area should show only when a focus 
            or break session is running or pauses */}
      {/* <div className="row d-flex justify-content-center mb-5 pb-4">
        <p style={{ fontSize: "60px" }} className="font-weight-bold">
          Study
        </p>
      </div> */}
      <div className="">
        <div className="col">
          {/* TODO: Update message below to include current session 
                    (Focusing or On Break) and total duration */}
          <span
            className="rounded-circle border-0 font-weight-bold"
            data-testid="duration-focus"
            style={{
              backgroundColor: "#DA33EF",
              color: "white",
              padding: "115px 50px",
              fontSize: "125px",
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
