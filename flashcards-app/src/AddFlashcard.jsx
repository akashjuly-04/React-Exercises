import { useState, useContext } from "react";
import { FlashcardContext } from "./FlashcardContext";
import { useNavigate } from "react-router-dom";

function AddFlashcard() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const { addFlashcard } = useContext(FlashcardContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question && answer) {
      addFlashcard({ question, answer });
      navigate("/flashcards");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Add Flashcard</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Enter Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="border p-2"
        />
        <input
          type="text"
          placeholder="Enter Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="border p-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add</button>
      </form>
    </div>
  );
}

export default AddFlashcard;
