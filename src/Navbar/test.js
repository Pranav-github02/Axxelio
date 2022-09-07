const myStyle =
    {
        gridTemplateColumns: "1fr 2fr",
    }
    const style = {
        marginRight: "27px",
        marginLeft: "17px"
    }
    return (
        <>
            <header className="py-3 mb-3 border-bottom">
                <div className="container-fluid d-grid gap-3 align-items-center" style={myStyle}>
                    {/* <div className="dropdown">
                    <a href="/" className="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    </a>
                    <ul className="dropdown-menu text-small shadow">
                        <li><a className="dropdown-item active" href="/" aria-current="page">Overview</a></li>
                        <li><a className="dropdown-item" href="/">Inventory</a></li>
                        <li><a className="dropdown-item" href="/">Customers</a></li>
                        <li><a className="dropdown-item" href="/">Products</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="/">Reports</a></li>
                        <li><a className="dropdown-item" href="/">Analytics</a></li>
                    </ul>
                </div> */}
                    {/* <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                        <img src="./" alt="" />
                    </a> */}
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <i className="fa-solid fa-user"></i>
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
                        <form className="w-100 me-3 mr-100" role="search" style={{ marginLeft: "10px", width: "60% !important" }}>
                            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" style={{}} />
                        </form>

                        <a href="/" className="d-block link-dark text-decoration-none mx-100" aria-expanded="false" style={style}>
                            <i class="fa-solid fa-cart-shopping"></i>
                        </a>
                        <div className="flex-shrink-0 dropdown">
                            <a href="/" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fa-solid fa-user"></i>
                            </a>
                            <ul className="dropdown-menu text-small shadow">
                                <li><a className="dropdown-item" href="/">Login/ Sign Up</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>