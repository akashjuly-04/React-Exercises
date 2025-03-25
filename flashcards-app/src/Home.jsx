import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold">Flashcards Learning App</h1>
      <Link to="/flashcards" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        View Flashcards
      </Link>
      <Link to="/add" className="mt-2 px-4 py-2 bg-green-500 text-white rounded">
        Add Flashcard
      </Link>
    </div>
  );
}

export default Home;
