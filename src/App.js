import './App.css';
import ItemListConteiner from './components/ItemListContainer/ItemListConteiner';
import NavBar from './components/NavBar/NavBar';
import Saludo from './components/saludo/Saludo';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListConteiner />
      <Saludo />
    </div>
  );
}

export default App;
