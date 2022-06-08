import GlobalStyle from './components/GlobalStyle';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import lamp1 from './imgs/lamp1.jpg'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        <NavBar />
        <ItemListContainer title="Nordic Lamp" img={lamp1} paragraph="Item Height: 144.5 cm
        Material: Wood"/>
      </header>
    </div>
  );
}

export default App;
