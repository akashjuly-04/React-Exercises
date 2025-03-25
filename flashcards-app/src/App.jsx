import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Flashcards from "./Flashcards";
import AddFlashcard from "./AddFlashcard";
import { FlashcardProvider } from "./FlashcardContext";

function App() {
  return (
    <FlashcardProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flashcards" element={<Flashcards />} />
          <Route path="/add" element={<AddFlashcard />} />
        </Routes>
      </Router>
    </FlashcardProvider>
  );
}

export default App;
