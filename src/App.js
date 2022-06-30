//STYLE
import GlobalStyle from "./components/GlobalStyle";
import styled from "styled-components";

// COMPONENTS

import NavBar from "./components/NavBar";

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DetailSection from "./pages/DetailSection/DetailSection";
import Category from "./pages/Category";

function App() {
  return (
    <BrowserRouter>
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
            <Route path="/item/:id" element={<DetailSection />} />
            <Route path="/category/:id" element={<Category />} />
          </Routes>
        </AppS>
      </div>
    </BrowserRouter>
  );
}

const AppS = styled.div`
  border: 1px solid #989895;
  border-radius: 10px;
`;

export default App;
