import GlobalStyle from "./components/GlobalStyle";
import ItemListContainer from "./components/list-components/ItemListContainer";
import NavBar from "./components/NavBar";
import lamp1 from "./imgs/lamp1.jpg";
import styled from "styled-components";
import { useState } from "react";

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
          <ItemListContainer
            title="Lamp 1"
            img={lamp1}
            paragraph="Item Height: 144.5 cm |
            Material: Wood"
            stock={stock1}
          />
          <ItemListContainer
            title="Lamp 2"
            img={lamp1}
            paragraph="Item Height: 144.5 cm |
            Material: Wood"
            stock={stock2}
          />
          <ItemListContainer
            title="Lamp 3"
            img={lamp1}
            paragraph="Item Height: 144.5 cm |
            Material: Wood"
            stock={stock3}
          />
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
