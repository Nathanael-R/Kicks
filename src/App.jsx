import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const darkModeToggle = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? "dark" : null}>
      <ApolloProvider client={client}>
        <NavBar darkModeToggle={darkModeToggle} darkMode={darkMode} />
        <Routes>
          <Route index element={<Home darkMode={darkMode} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </ApolloProvider>
    </div>
  );
}

export default App;
