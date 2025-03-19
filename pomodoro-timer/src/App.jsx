import { useState, useEffect } from "react";
import { FaPlay, FaPause, FaRedo } from "react-icons/fa";

const WORK_TIME = 25 * 60; // 25 minutes
const BREAK_TIME = 5 * 60; // 5 minutes

function App() {
  const [timeLeft, setTimeLeft] = useState(WORK_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsBreak(!isBreak);
      setTimeLeft(isBreak ? WORK_TIME : BREAK_TIME);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft, isBreak]);

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold">{isBreak ? "Break Time" : "Work Time"}</h1>
      <p className="text-6xl font-mono my-6">{formatTime(timeLeft)}</p>
      <div className="flex gap-4">
        <button onClick={() => setIsRunning(!isRunning)} className="bg-blue-500 px-4 py-2 rounded text-white">
          {isRunning ? <FaPause size={24} /> : <FaPlay size={24} />}
        </button>
        <button onClick={() => { setIsRunning(false); setTimeLeft(WORK_TIME); setIsBreak(false); }} className="bg-red-500 px-4 py-2 rounded text-white">
          <FaRedo size={24} />
        </button>
      </div>
    </div>
  );
}

export default App;
