import './App.css';
import NavBars from './components/NavBars';
import Carrousel from './components/Carrousel';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className='container'>
      <NavBars />
      <ItemListContainer greeting={'Aun no hay productos'}/>
      <Carrousel />
      <Footer />
    </div>
  );
}

export default App;
