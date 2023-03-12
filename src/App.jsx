import { useState } from "react";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const darkModeToggle = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? "dark" : null}>
      <NavBar darkModeToggle={darkModeToggle} darkMode={darkMode} />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
