import React from "react";

const Error404 = () => {
    return (
        <div className="d-flex align-items-center justify-content-center vh-80">
                <div className=" col-md-6 mt-5">
                    <p className="fs-3"> <span className="text-danger">Opps!</span> Page not found.</p>
                    <p className="lead">
                        The page you re looking for doesnt exist.
                    </p>
                </div>
        </div>
    )
}
export default Error404;