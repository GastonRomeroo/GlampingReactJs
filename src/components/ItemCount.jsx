import React,  { useState, useEffect }  from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {
    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [vendido, setVendido] = useState(false)


    const increaseStock = () =>{
        if (counter < itemStock) {
            setCounter(counter + 1); 
        }
    }
    const decreaseStock = () =>{
        if( counter > 1) {
        setCounter(counter - 1);
        };
    }
    const addToCart = (quantity) => {
        setItemStock (itemStock - counter);
        setCounter(1);
        setVendido(true);
        onAdd(quantity);
    }; 

    useEffect(() => {
        setItemStock(stock);
    },[stock])

    return (
        <div className="container">
            <div className="row mb-3">
                <div className="cold-md-2">
                    <div className="btn-group" role="group" aria-label="Basec putlined example">
                        <button type="button" className="btn btn-outline-primary" onClick={decreaseStock}>-</button>
                        <button type="button" className="btn btn-outline-primary">{counter}</button>
                        <button type="button" className="btn btn-outline-primary" onClick={increaseStock}>+</button>
                    </div>
                </div> 
            </div>
            <div className="row">
                <div className="cold-md-2">
                    {vendido ? <Link to={"/cart"} className="btn btn-outline-primary"> Finalizar la compra</Link>:<button type="button" className="btn btn-outline-primary" onClick={()=> {addToCart(counter)}}>Agregar al carrito</button>}
                </div>
            </div>
        </div>
    )
}

export default ItemCount;