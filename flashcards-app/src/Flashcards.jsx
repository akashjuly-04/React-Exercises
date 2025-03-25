import { useContext } from "react";
import { FlashcardContext } from "./FlashcardContext";

function Flashcards() {
  const { flashcards, deleteFlashcard, toggleLearned } = useContext(FlashcardContext);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Flashcards</h2>
      {flashcards.length === 0 ? (
        <p>No flashcards available.</p>
      ) : (
        <ul>
          {flashcards.map((card) => (
            <li key={card.id} className="p-2 border-b flex justify-between items-center">
              <div>
                <p className="font-semibold">{card.question}</p>
                <p className="text-gray-600">{card.answer}</p>
                <button
                  onClick={() => toggleLearned(card.id)}
                  className={`mt-2 px-2 py-1 ${card.learned ? "bg-green-400" : "bg-gray-400"} text-white rounded`}
                >
                  {card.learned ? "Learned" : "Not Learned"}
                </button>
              </div>
              <button onClick={() => deleteFlashcard(card.id)} className="px-2 py-1 bg-red-500 text-white rounded">
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Flashcards;
