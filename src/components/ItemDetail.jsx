import React from "react";
import ItemCount from "./ItemCount"

const ItemDetail = ({item}) => {
    return(
        <div className="row my-5">
            <div className="col-md-4 offset-md-3 text-center">
                <img src={item.img1} className="img-fluid" alt={item.nombre} />
                <h3>{item.nombre}</h3>
                <p>{item.detalle1}</p>
                <p>Stock disponible: {item.stock} unidad/es</p>
                <h4>
                <p>ARS ${item.precio}</p>
                </h4>
            </div>
            <ItemCount stockItems={item.stock} />
        </div>
    )
};

export default ItemDetail;