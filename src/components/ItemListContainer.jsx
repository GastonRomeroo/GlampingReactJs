import React from "react";


const ItemListContainer = () => {

    const Productos =
        [{
            "id": 1,
            "nombre": "Carpa canadiese",
            "detalle": "Carpa canadiese 6 personas",
            "precio": 575.23,
            "stock": 15,
            "iva": 1.21,
            "cat": "carpas",
            "img": "public/images/productos/1 (9).jpg"
        },

        {
            "id": 2,
            "nombre": "Linterna Spinit",
            "detalle": "Linterna Spinit HL800R Frontal/Mano",
            "precio": 36.92,
            "stock": 30,
            "iva": 1.21,
            "cat": "camping",
            "img": "public/images/productos/1 (8).jpg"
        },

        {
            "id": 3,
            "nombre": "Navaja Trento",
            "detalle": "Navaja Trento Hunter Light 1.20",
            "precio": 39.35,
            "stock": 50,
            "iva": 1.21,
            "cat": "camping",
            "img": "public/images/productos/1 (2).jpg"
        }];



    return (
        <div className="row">
            <h1>Productos</h1>
            {Productos.map(item =>
                <div className="col-md-3">
                    <div ClassName="card" >
                        <img src={item.img} ClassName="img-fluid" alt={item.nombre} />
                        <div ClassName="card-body">
                            <h5 ClassName="card-title">{item.precio}</h5>
                            <p ClassName="card-text">{item.detalle}</p>
                            {/* <a ClassName="btn btn-primary">Agregar al carrito</a> */}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
};

export default ItemListContainer