import React from "react";
import { useParams, Link } from "react-router-dom";

const Agradecimiento = () => {
    const { id } = useParams();

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="alert alert-success" role="alert">
                        <h4 className="alert-heading">Felicitaciones!</h4>
                        <p>Tu numero de compra es: <b>{id}</b></p>
                    </div>
                    <Link to={"/"} className="btn btn-outline-success">Volver a la Página Principal</Link>
                </div>
            </div>
        </div>
    )
}


export default Agradecimiento