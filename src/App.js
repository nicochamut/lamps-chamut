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
import { AnimateRoutes } from "./components/AnimateRoutes/AnimateRoutes";

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
              <AnimateRoutes />
            </AppS>
          </div>
        </ProductsProvider>
      </CtxProvider>
    </BrowserRouter>
  );
}

const AppS = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
