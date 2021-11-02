import React, { useState } from "react";
import useInterval from "../utils/useInterval";
import BreakTime from "./BreakTime";
import FocusTime from "./FocusTime";
import PlayPause from "./PlayPause";
import Timer from "./Timer";

function Pomodoro() {
  // default pomodoro timer states

  // timer is off
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  // timer is not paused
  const [isPaused, setIsPaused] = useState(false);
  // timer is not running
  const [inSession, setInSession] = useState(false);
  // timer is not on break
  const [BreakTimeState, setBreakTimeState] = useState(5);
  // break duration is set to 5 mins
  const [onBreak, setOnBreak] = useState(false);
  // focus duration is set to 25 mins
  const [FocusTimeState, setFocusTimeState] = useState(25);
  // minutes remaining is set to 25 mins
  const [timeRemainingState, setTimeRemainingState] = useState(
    FocusTimeState * 60
  );
  // alarm state
  const alarm = new Audio(
    "https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg"
  );

  // FOCUS TIME CHANGES

  // increase focus time by 5 mins
  const increaseFiveMinutes = () => {
    if (inSession) return;
    if (FocusTimeState === 60) return;
    setFocusTimeState((current) => current + 5);
    setTimeRemainingState((current) => current + 300);
  };

  // decrease focus time by 5 mins
  const decreaseFiveMinutes = () => {
    if (inSession) return;
    if (FocusTimeState === 5) return;
    setFocusTimeState((current) => current - 5);
    setTimeRemainingState((current) => current - 300);
  };

  // increase break time by 1 min
  const increaseOneMinute = () => {
    if (inSession) return;
    if (BreakTimeState === 15) return;
    setBreakTimeState((current) => current + 1);
  };

  // decrease break time by 1 min
  const decreaseOneMinute = () => {
    if (inSession) return;
    if (BreakTimeState === 1) return;
    setBreakTimeState((current) => current - 1);
  };

  // WHAT HAPPENS EVERY 1 SECOND

  // use useInterval() to run function every 1 second
  useInterval(
    () => {
      // ToDo: Implement what should happen when the timer is running
      setTimeRemainingState((current) => current - 1);
      // if there are no minutes remaining, set the timer to paused
      if (timeRemainingState <= 0) {
        setIsPaused(() => !isPaused);
        alarm.play();
        // if timer is running, keep break off
        if (onBreak === false) {
          setOnBreak(() => !onBreak);
          setTimeRemainingState(BreakTimeState * 60);
          //  otherwise, keep break off, and set time to the
          //  remaining time left
        } else {
          setOnBreak(() => !onBreak);
          setTimeRemainingState(FocusTimeState * 60);
        }
      }
    },

    // if the timer is running, run this in intervals of 1 second
    isTimerRunning ? 1000 : null
  );

  // POMODORO SESSION RUN STATE

  function playPause() {
    // if the timer is running, set it to be in session
    if (!isTimerRunning) setInSession(true);
    // if the session is running
    // change the state of the pause button
    // set the timer to be running
    if (inSession) setIsPaused((prevState) => !prevState);
    setIsTimerRunning((prevState) => !prevState);
  }

  // POMODORO SESSION STOP STATE

  function stopSession() {
    // if the session is running
    // turn off break
    // turn off pause button
    // turn off timer running
    // display number of minutes remaining in the session
    if (!inSession) return;
    setInSession(false);
    setOnBreak(false);
    setIsPaused(false);
    setIsTimerRunning(false);
    setTimeRemainingState(FocusTimeState * 60);
  }

  return (
    <div className="pomodoro m-5">
      <div
        className="row d-flex justify-content-center"
      >
        {/* focus component */}
        <div className="text-center row">
          <div className="d-flex justify-content-center col col-12">
            <FocusTime
              FocusTime={FocusTimeState}
              inSession={inSession}
              upByFive={increaseFiveMinutes}
              downByFive={decreaseFiveMinutes}
            />
         

          <BreakTime
            BreakTime={BreakTimeState}
            upByOne={increaseOneMinute}
            downByOne={decreaseOneMinute}
          />
          </div>
        </div>
      </div>

      {/* timer component */}
      <div className="mt-5 pt-5">
        <Timer
          timeRemainingState={timeRemainingState}
          inSession={inSession}
          onBreak={onBreak}
          isPaused={isPaused}
          FocusTime={FocusTimeState}
          BreakTime={BreakTimeState}
        />
      </div>

      {/* play and pause component */}
      <div className="d-flex justify-content-center mb-5 pb-5">
        <PlayPause
          playPause={playPause}
          stopSession={stopSession}
          isTimerRunning={isTimerRunning}
        />
      </div>
    </div>
  );
}

export default Pomodoro;
