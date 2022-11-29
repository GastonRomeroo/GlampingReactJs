import React from "react";

const Footer = () =>{
    return (
        <div className="container-fluid footer">
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-5 text-center">
                        <p>Proyecto React Js Gaston Romero</p>
                    </div>
                    <div className="col-md-6 ms-0 d-flex justify-content-end  text-center">
                       <a className="table-hover"><ion-icon name="logo-html5"></ion-icon></a>
                       <a className="table-hover"><ion-icon name="logo-css3"></ion-icon></a>
                       <a className="table-hover"><ion-icon name="logo-sass"></ion-icon></a>
                       <a className="table-hover"><ion-icon name="logo-javascript"></ion-icon></a>
                       <a className="table-hover"><ion-icon name="logo-react"></ion-icon></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer