import React from "react";
import classNames from "../utils/class-names";

function PlayPause(props) {
  return (
    <div className="row mb-5">
      <div className="col">
        <div
          className="btn-group btn-group-lg mb-2"
          role="group"
          aria-label="Timer controls"
        >
          <div className="mt-5 pt-5">
            {/* play/pause button */}
            <button
              type="button"
              className="rounded-circle btn btn-success pr-2 mr-5"
              style={{ fontSize: "130px", width: "200px", height: "200px" }}
              data-testid="play-pause"
              title="Start or pause timer"
              onClick={props.playPause}
            >
              <span
                className={classNames({
                  oi: true,
                  "oi-media-play": !props.isTimerRunning,
                  "oi-media-pause": props.isTimerRunning,
                })}
              />
            </button>

            {/* stop session button */}

            {/* TODO: Implement stopping the current focus or break 
            session and disable when there is no active session */}
            <button
              type="button"
              className="btn rounded-circle btn-danger mr-5"
              style={{ fontSize: "125px", width: "200px", height: "200px" }}
              title="Stop the session"
              onClick={props.stopSession}
            >
              <span className="oi oi-media-stop" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayPause;
