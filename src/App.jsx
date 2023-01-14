import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carrousel from './components/Carrousel';
import Error404 from './components/Error404';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';
import CartContextProvider from './components/Contex/CartContext';
import Cart from './components/Cart';



function App() {
  return (
    <CartContextProvider>
      <div className='container'>
        <BrowserRouter>
          <Navbar />
          <Carrousel />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />;
            <Route path={"/category/:id"} element={<ItemListContainer />} />;
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />;
            <Route path={"/cart"} element={<Cart />} />;
            <Route path={"*"} element={<Error404 />} />;
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </CartContextProvider>
  );
}

export default App;
