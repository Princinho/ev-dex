import './App.css';
import Header from './Components/Header';
import Sidebar from "./Components/Sidebar"
import Catalog from "./Components/Catalog"
import PriceRange from './Components/PriceRange';
function App() {
  return (
    <>
      <Sidebar/>
      <Header/>
      <Catalog/>
    </>
  );
}

export default App;
