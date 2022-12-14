import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import ArraydeProductos from "./json/ArrayDeProductos.json"

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(ArraydeProductos);
            }, 2000);
        });
        promesa.then((data) => {
            setItems(data);
        })
    }, [])


    return (
        <div className="container py-5">
            <ItemList items={items} />
            <ItemCount stock={items.stock} />
        </div>
    )
};

export default ItemListContainer