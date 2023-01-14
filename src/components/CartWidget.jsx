import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./Context/CartContext";

const CartWidget = () => {
    const {cartTotal} = useContext(CartContext);


    return cartTotal() ?
        <Link to={"/cart"} type="button" className="btn body position-relative" title="Ir al carrito">
            <img src={"/images/icons/cart.svg"} alt={"Carrito"} width={25} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
        </Link> : "";
    
};

export default CartWidget;