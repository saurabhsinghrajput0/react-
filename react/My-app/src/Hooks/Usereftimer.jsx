import React, { useContext, useRef, useState } from "react";
import { Themecontext } from "../Context/Themes";

const Usereftimer = () => {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);
  const { theme, toggleTheme } = useContext(Themecontext);

  const Start = () => {
    clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const Stop = () => {
    clearInterval(timerRef.current);
  };

  const Reset = () => {
    clearInterval(timerRef.current);
    setTime(0);
  };

  return (
    <div
      className="text-center mt-10 min-h-screen pt-10"
      style={{ backgroundColor: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white' }}
    >
      <h1 className="text-3xl font-bold">Timer</h1>

      <h2 className="text-2xl mt-5">{time} sec</h2>

      <button onClick={toggleTheme} className="border-2 px-4 py-2 m-3">
        Toggle Theme
      </button>

      <button onClick={Start} className="border-2 px-4 py-2 m-3">
        Start
      </button>

      <button onClick={Stop} className="border-2 px-4 py-2 m-3">
        Stop
      </button>

      <button onClick={Reset} className="border-2 px-4 py-2 m-3">
        Reset
      </button>
    </div>
  );
};

export default Usereftimer;