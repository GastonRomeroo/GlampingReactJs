import React from 'react';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carrousel from './components/Carrousel';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Error404 from './components/Error404';
import Footer from './components/Footer';



function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Navbar />
        <Carrousel />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
