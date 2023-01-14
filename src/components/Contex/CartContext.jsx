import React, { createContext } from "react";

export const CartContext = createContext();
const CartContextProvider = ({children}) => {

    const Saludar = () => {
        alert("holis")
    }

    return(
        <CartContext.Provider value={{Saludar}}>
            {children}
        </CartContext.Provider>
        
        
        )
}

export default CartContextProvider