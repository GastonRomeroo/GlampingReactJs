import React from "react";

const Item = ({item}) => {
    return (
        <div className="card">
            <img src={item.img} alt={item.nombre} />
            <div className="card-body">
                <p className="card-text">{item.detalle}</p>
            </div>

        </div>
    );
};

export default Item;



