import React from "react";

export default function Result({ score, total }) {
  return (
    <div className="bg-white p-5 rounded-lg shadow-lg w-96 text-center">
      <h2 className="text-2xl font-bold">Quiz Completed!</h2>
      <p className="text-lg mt-3">
        Your Score: <span className="text-green-500">{score}</span> / {total}
      </p>
      <button
        onClick={() => window.location.reload()}
        className="mt-5 bg-green-500 text-white p-2 rounded hover:bg-green-600"
      >
        Restart Quiz
      </button>
    </div>
  );
}
