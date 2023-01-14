import React,{ useContext } from "react";
import CartContext from "./Contex/CartContext"

const Cart = () => {
    const {cart} = useContext(CartContext);

    return(
        <div className="container py-">
            <div className="row">
                <div className="col-md-">
                    
                </div>
            </div>
        </div>
    )
}

export default Cart;