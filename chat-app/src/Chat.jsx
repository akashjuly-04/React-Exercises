import { useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { v4 as uuidv4 } from "uuid";

const Chat = ({ username }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (message.trim() === "") return;
    
    const newMessage = { id: uuidv4(), user: username, text: message };
    setMessages([...messages, newMessage]); // Update the chat in real-time
    setMessage(""); // Clear input field
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 border rounded-lg shadow-lg">
      <h2 className="text-lg font-bold mb-2">Chat Room</h2>
      <ScrollToBottom className="h-60 overflow-auto border p-2 mb-2">
        {messages.map((msg) => (
          <p key={msg.id} className="p-1">
            <strong>{msg.user}:</strong> {msg.text}
          </p>
        ))}
      </ScrollToBottom>
      <div className="flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="border p-2 flex-grow rounded"
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-2 rounded">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
