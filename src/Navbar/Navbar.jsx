import React from 'react';
import './Navbar.css'
import axxelio from './axxelio.png'
export default function Navbar(props) {
    const myStyle =
    {
        gridTemplateColumns: "1fr 2fr",
    }
    const style = {
        marginRight: "27px",
        marginLeft: "40px"
    }
    return (
        <>
            <header className="py-3 mb-3 border-bottom">
                <div className="container-fluid d-grid  align-items-center" style={myStyle}>
                    <div className="container-fluid" style={{ width: "90%", margin: "0px", padding: "0px" }}>
                        <a className="navbar-brand" href="/">
                            <img src={axxelio} alt="logo" style={{ height: "50px" }}></img>
                        </a>
                    </div>

                    <div className="d-flex align-items-center">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Catergories
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Category1</a></li>
                                    <li><a className="dropdown-item" href="/">Category2</a></li>
                                    <li><a className="dropdown-item" href="/">Category3</a></li>
                                    <li><a className="dropdown-item" href="/">Category4</a></li>
                                    <li><a className="dropdown-item" href="/">Category5</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="w-100 me-3 mr-100" role="search" style={{ marginLeft: "10px" }}>
                            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" style={{ width: "50%" }} />
                        </form>

                        <a href="/" className="d-block link-dark text-decoration-none" aria-expanded="false" style={style}>
                            <i className="fa-solid fa-cart-shopping" style={{ fontSize: "larger" }}></i>
                        </a>
                        <div className="flex-shrink-0 dropdown">
                            <a href="/" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{ marginRight: "10px" }}>
                                <i className="fa-solid fa-user" style={{ fontSize: "larger" }}></i>
                            </a>
                            <ul className="dropdown-menu text-small shadow">
                                <li><a className="dropdown-item" href="/">Login/ Sign Up</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}