import { React, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={
        darkMode
          ? "bg-gray-900 text-white min-h-screen"
          : "bg-white text-black min-h-screen"
      }
    >
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-5 right-5 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded font-bold shadow-lg"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};
export default App;
