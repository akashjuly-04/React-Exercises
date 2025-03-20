import { useState } from "react";
import Chat from "./Chat";

function App() {
  const [username, setUsername] = useState("");
  const [isJoined, setIsJoined] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {!isJoined ? (
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-lg font-bold mb-2">Enter your name</h2>
          <input
            type="text"
            placeholder="Your Name"
            className="border p-2 rounded mb-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            onClick={() => setIsJoined(true)}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Join Chat
          </button>
        </div>
      ) : (
        <Chat username={username} />
      )}
    </div>
  );
}

export default App;
