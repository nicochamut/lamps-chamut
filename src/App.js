import GlobalStyle from "./components/GlobalStyle";
import ItemListContainer from "./components/CardComponents/ItemListContainer";
import NavBar from "./components/NavBar";
import lamp1 from "./imgs/lamp1.jpg";
import styled from "styled-components";
import { useState } from "react";
import CardComponent from "./components/CardComponents/CardComponent";

function App() {
  const stock1 = 3;
  const stock2 = 6;
  const stock3 = 10;

  const [counterCart, setCounterCart] = useState(0);

  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        <NavBar counterCart={counterCart} />
      </header>
      <AppBody>
        <AppItemsList>
          <CardComponent />
        </AppItemsList>
      </AppBody>
    </div>
  );
}

const AppBody = styled.div`
  margin: 5rem;

  grid-template-rows: 25rem 3fr;
  border: 1px solid black;
`;

const AppItemsList = styled.div`
  display: flex;
  justify-content: space-around;
  border: 1px solid #989895;
  border-radius: 10px;
  width: 100%;
`;

export default App;
