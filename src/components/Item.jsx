import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return (
        <Link to={"/item/" + item.id} className="text-decoration-none text-dark ">
            <img src={item.img} width={190} height={234.33} alt={item.nombre} />
            <p className="card-text">{item.nombre}</p>
        </Link>
    );
};

export default Item;



