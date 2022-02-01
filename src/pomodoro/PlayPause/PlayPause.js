import React from "react";
import classNames from "../../utils/class-names/";
import "./PlayPause.css";

function PlayPause(props) {
  return (
    <div>
      <div role="group" aria-label="Timer controls">
        <div className="play-pause-row">
          {/* play/pause button */}
          <div>
            <p> Click play to start studying!</p>
          </div>
          <div className="play-pause-button-row">
            <button
              className="play-pause-button stop"
              type="button"
              data-testid="play-pause"
              title="Start or pause timer"
              onClick={props.playPause}
            >
              <div>
                <span
                  className={classNames({
                    oi: true,
                    "oi-media-play": !props.isTimerRunning,
                    "oi-media-pause pr-2": props.isTimerRunning,
                  })}
                />
              </div>
            </button>

            {/* stop session button */}

            <button
              className="play-pause-button play-pause"
              type="button"
              title="Stop the session"
              onClick={props.stopSession}
            >
              <span
                /** keep this style so the stop button is not miniature */
                className="oi oi-media-stop play-pause-button-symbol"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayPause;
