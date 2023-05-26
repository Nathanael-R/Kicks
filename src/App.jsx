import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import CartProvider from "./Context/CartContext";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const darkModeToggle = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? "dark" : null}>
      <CartProvider>
        <NavBar darkModeToggle={darkModeToggle} darkMode={darkMode} />
        <Routes>
          <Route index element={<Home darkMode={darkMode}/>} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
