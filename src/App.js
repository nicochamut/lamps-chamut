//STYLE
import GlobalStyle from "./components/GlobalStyle";
import styled from "styled-components";

// CONTEXT
import { CtxProvider } from "./context/CartContext/CartContext";

// COMPONENTS
import NavBar from "./components/NavBar";
import { useState } from "react";

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAGES
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import DetailSection from "./pages/DetailSection/DetailSection";
import Category from "./pages/Category/Category";
import CartView from "./pages/Cart/CartView";

function App() {
  const [counterCart, setCounterCart] = useState(0);

  return (
    <BrowserRouter>
      <CtxProvider>
        <div className="App">
          <GlobalStyle />
          <header className="App-header">
            <NavBar counterCart={counterCart} />
          </header>
          <AppS>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="category/:id/item/:id"
                element={
                  <DetailSection
                    setCounterCart={setCounterCart}
                    counterCart={counterCart}
                  />
                }
              />
              <Route path="/category/:id" element={<Category />} />
              <Route path="/cart" element={<CartView />} />
            </Routes>
          </AppS>
        </div>
      </CtxProvider>
    </BrowserRouter>
  );
}

const AppS = styled.div``;

export default App;
