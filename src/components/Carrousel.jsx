import React from "react";

const Carrousel = () => {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner container-lg">
                <div className="carousel-item active">
                    <img src={"/images/Carrousel/carrousel1.jpg"} className="d-block w-100" alt={"carousel"}></img>
                </div>
                <div className="carousel-item">
                    <img src={"/images/Carrousel/carrousel2.jpg"} className="d-block w-100" alt={"carousel"}></img>
                </div>
                <div className="carousel-item">
                    <img src={"/images/Carrousel/carrousel3.jpg"} className="d-block w-100" alt={"carousel"}></img>
                </div>
                <div className="carousel-item">
                    <img src={"/images/Carrousel/carrousel4.jpg"} className="d-block w-100" alt={"carousel"}></img>
                </div>
                <div className="carousel-item">
                    <img src={"/images/Carrousel/carrousel5.jpg"} className="d-block w-100" alt={"carousel"}></img>
                </div>
                <div className="carousel-item">
                    <img src={"/images/Carrousel/carrousel6.jpg"} className="d-block w-100" alt={"carousel"}></img>
                </div>
            </div>
        </div>
    );
};

export default Carrousel;