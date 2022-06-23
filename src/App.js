import GlobalStyle from "./components/GlobalStyle";
import NavBar from "./components/NavBar";
import styled from "styled-components";
import CardComponent from "./components/CardComponents/CardComponent";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        <NavBar />
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
