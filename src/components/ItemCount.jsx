import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ItemCount = ({stockItems}) => {
    const [counter, setCounter] = useState(1);
    const [stock, setStock] = useState(stockItems);

    useEffect(() => {
        setStock(stockItems);
    }, [stockItems])

    const increaseStock = () =>{
        if (counter < stock) {
            setCounter(counter + 1);
        }
    }
    const decreaseStock = () =>{
        if( counter > 1) {
        setCounter(counter - 1);
        };
    }
    const onAdd = () => {
        if((stock > 0) && (counter <= stock)){
            setStock(stock - counter);
            setCounter(counter);
        };
    }; 


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
                    <button type="button" className="btn btn-outline-primary" onClick={onAdd}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;