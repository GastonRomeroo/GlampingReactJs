import React, { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./Contex/CartContext";
const ItemDetail = ({ item }) => {
    const { addItem } = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity);
    };
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={item.img1} className="img-fluid rounded-start" alt={item.nombre}></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.nombre}</h5>
                        <p className="card-text">{item.detalle1}</p>
                        <p className="card-text">Stock disponible: {item.stock} unidad/es</p>
                        <p className="card-text">ARS ${item.precio}</p>
                        <ItemCount stock={item.stock} onAdd={onAdd} />
                    </div>
                </div>
            </div>
        </div>

    )
};

export default ItemDetail;

