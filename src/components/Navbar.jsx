import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
const Navbar = () => {
    return (
        <div className='row'>
            <div className='col-md-6'>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to={"/"}><img src={"/images/logo_glamping.png"} alt={"Logo"} /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={"/category/Carpas"}>Carpas</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={"/category/Linternas"}>Linternas</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={"/category/Navajas"}>Navajas</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={"/category/camping"}>Camping</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className='col-md-6 d-flex justify-content-end align-items-center'>
                <CartWidget />
            </div>
        </div>

    );
}
export default Navbar;