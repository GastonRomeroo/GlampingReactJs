import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./Context/CartContext"


const Cart = () => {
    const { cart, removeItem, clear, sumaTotal, cartTotal } = useContext(CartContext);

    if (cartTotal() === 0) {
        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="alert alert-info" role="alert">
                            No se escontraron productos en el carrito.
                        </div>
                        <div>
                        <Link className="btn btn-outline-primary" to={"/"}>Volver a la pagina principal</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">&nbsp;</th>
                                <th scope="col">Producto</th>
                                <th scope="col" className="text-center">Precio Unitario</th>
                                <th scope="col" className="text-center">Cantidad</th>
                                <th scope="col" className="text-center">Precio</th>
                                <th scope="col">&nbsp;</th>
                            </tr>

                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.img} alt={item.nombre} width={64} title={item.nombre} /></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="text-center align-middle">${item.precio}</td>
                                    <td className="text-center align-middle">{item.quantity}</td>
                                    <td className="text-center align-middle">${item.quantity * item.precio}</td>
                                    <td className="text-end align-middle"><Link onClick={() => { removeItem(item.id) }} title="Eliminar Producto"><img src={"images/icons/trash.svg"} alt={"Eliminar Producto"} width={24} /></Link></td>
                                </tr>
                            ))}

                            <tr>
                                <td>&nbsp;</td>
                                <td className="text-end" colSpan={3}>Suma Total</td>
                                <td className="text-center">ARS ${sumaTotal()}</td>
                                <td>&nbsp;</td>
                            </tr>
                        </tbody>
                        <tr>
                            <th scope="col" colSpan={5}><Link onClick={clear} className="btn btn-outline-danger" title="Vaciar Carrito">Vaciar Carrito</Link></th>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;