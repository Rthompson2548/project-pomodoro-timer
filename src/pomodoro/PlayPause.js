import React from "react";
import classNames from "../utils/class-names";

function PlayPause(props) {
  return (
    <div className="row mb-5" style={{ marginBottom: "10px" }}>
      <div className="col">
        <div
          className="btn-group btn-group-lg"
          role="group"
          aria-label="Timer controls"
        >
          <div className="mt-5 mb-5 pt-5">
            {/* play/pause button */}
            <h5 class="text-white pt-4 pb-3"> Click play to start studying!</h5>

            <button
              type="button"
              className="rounded-circle mr-2 btn pr-1 text-white"
              style={{
                fontSize: "60px",
                width: "100px",
                height: "100px",
                backgroundColor: "#189E83",
              }}
              data-testid="play-pause"
              title="Start or pause timer"
              onClick={props.playPause}
            >
              <span
                className={classNames({
                  oi: true,
                  "oi-media-play": !props.isTimerRunning,
                  "oi-media-pause pr-2": props.isTimerRunning,
                })}
              />
            </button>

            {/* stop session button */}

            {/* TODO: Implement stopping the current focus or break 
            session and disable when there is no active session */}
            <button
              type="button"
              className="btn rounded-circle ml-2"
              style={{
                fontSize: "60px",
                width: "100px",
                height: "100px",
                backgroundColor: "#F4755A",
              }}
              title="Stop the session"
              onClick={props.stopSession}
            >
              <span style={{ color: "white" }} className="oi oi-media-stop" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayPause;
