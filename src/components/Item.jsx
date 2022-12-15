import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return (
        <Link to={"/item/" + item.id} className="text-decoration-none text-dark ">
            <div className="card my-3">
                <img src={item.img} width={190} height={234.33} alt={item.nombre} />
                <div className="card-body">
                    <p className="card-text">{item.detalle}</p>
                </div>
            </div>
        </Link>
    );
};

export default Item; 



