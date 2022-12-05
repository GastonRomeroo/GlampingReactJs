import './App.css';
import Navbar from './components/Navbar';
import Carrousel from './components/Carrousel';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className='container'>
      <Navbar />
      <Carrousel />
      <ItemListContainer/>
      <Footer />
    </div>
  );
}

export default App;
