import { createContext, useState } from "react";

export const FlashcardContext = createContext();

export const FlashcardProvider = ({ children }) => {
  const [flashcards, setFlashcards] = useState([
    { id: 1, question: "What is React?", answer: "A JavaScript library for UI", learned: false },
    { id: 2, question: "What is useState?", answer: "A React Hook for state management", learned: false },
  ]);

  const addFlashcard = (card) => {
    setFlashcards([...flashcards, { ...card, id: Date.now() }]);
  };

  const deleteFlashcard = (id) => {
    setFlashcards(flashcards.filter((card) => card.id !== id));
  };

  const toggleLearned = (id) => {
    setFlashcards(
      flashcards.map((card) =>
        card.id === id ? { ...card, learned: !card.learned } : card
      )
    );
  };

  return (
    <FlashcardContext.Provider value={{ flashcards, addFlashcard, deleteFlashcard, toggleLearned }}>
      {children}
    </FlashcardContext.Provider>
  );
};
