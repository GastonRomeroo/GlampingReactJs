import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import ArraydeProductos from "./json/ArrayDeProductos.json"


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(ArraydeProductos.find(item => item.id === parseInt(id)));
            }, 2000)
        });

        promesa.then((data) => {
            setItem(data);
        });

    }, [id]);
    return (
        <div>
            <h3>{item.nombre}</h3>
            <div className="container">
                <ItemDetail item={item} />
            </div>
        </div>
    )
}

export default ItemDetailContainer;