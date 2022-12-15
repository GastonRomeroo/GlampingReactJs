import React from "react";

const CartWidget = () => {
    return (
        <button type="button" className="btn body position-relative">
            <img src={"/images/icons/cart.svg"} alt={"Carrito"} width={25} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
        </button>
    )
}

export default CartWidget;