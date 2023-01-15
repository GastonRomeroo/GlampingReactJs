import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carrousel from './components/Carrousel';
import Error404 from './components/Error404';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContextProvider from './components/Context/CartContext';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Checkout from './components/Checkout'



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
            <Route path={"/Checkout"} element={<Checkout />} />;
            <Route path={"*"} element={<Error404 />} />;
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </CartContextProvider>
  );
}

export default App;
