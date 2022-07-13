//STYLE
import GlobalStyle from "./components/GlobalStyle";
import styled from "styled-components";

// CONTEXT
import { CtxProvider } from "./context/CartContext/CartContext";
import ProductsProvider from "./context/ProductsContext/ProductsContext";

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
  return (
    <BrowserRouter>
      <CtxProvider>
        <ProductsProvider>
          <div className="App">
            <GlobalStyle />
            <header className="App-header">
              <NavBar />
            </header>
            <AppS>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/detail/:id" element={<DetailSection />} />
                <Route path="/category/:id" element={<Category />} />
                <Route path="/cart" element={<CartView />} />
              </Routes>
            </AppS>
          </div>
        </ProductsProvider>
      </CtxProvider>
    </BrowserRouter>
  );
}

const AppS = styled.div``;

export default App;
