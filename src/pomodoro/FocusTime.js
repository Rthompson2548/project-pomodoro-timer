import React from "react";
import { minutesToDuration } from "../utils/duration";

function FocusTime(props) {
  return (
    <div className="col">
      <div>
        <div className="input-group input-group-lg">
         
          <span
          className="rounded-circle border-0 font-weight-bold mb-1 px-5"
            data-testid="duration-focus"
            style={{ backgroundColor: "#189E83", color: "white" }}
          >
            {/* Focus: */}
            <p class="mt-3" style={{ fontSize: "32px" }}>Focus</p>
             <p style={{ fontSize: "70px" }}>{minutesToDuration(props.FocusTime)}</p>
             <div className="input-group-append input-group-lg d-flex justify-content-center pb-2">
            {/* TODO: Implement decreasing focus duration and disable during 
              a focus or break session */}

            {/* button that decreases focus time by 5 mins */}
            <button
              type="button"
              className="btn text-white"
              style={{ fontSize: "32px" }}
              data-testid="decrease-focus-time"
              onClick={props.downByFive}
            >
              <span className="oi oi-minus" />
            </button>

            {/* TODO: Implement increasing focus duration and disable during 
              a focus or break session */}

            {/* button that increases focus time by 5 mins */}
            <button
              type="button"
              style={{ fontSize: "32px" }}
              className="btn text-white"
              data-testid="increase-focus-time"
              onClick={props.upByFive}
            >
              <span className="oi oi-plus" />
            </button>
          </div>
          </span>
         
        </div>
      </div>
    </div>
  );
}

export default FocusTime;