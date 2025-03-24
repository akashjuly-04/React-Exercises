import { useTheme } from "./ThemeProvider";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`h-screen flex flex-col justify-center items-center transition-all duration-300 ${
      theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
    }`}>
      <h1 className="text-3xl font-bold">Theme Switcher</h1>
      <button 
        onClick={toggleTheme} 
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};

export default App;
