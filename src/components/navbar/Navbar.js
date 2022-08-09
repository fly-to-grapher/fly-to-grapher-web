import React from "react";
import { Link } from "react-router-dom";




const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="navbar navbar-expand-lg navbar-dark d-flex justify-content-between">
                    <Link to="/">
                        <img src="./assert/flytogr.png" className="d-block mx-lg-auto img-fluid" alt="" width="155px" height="150px" />
                    </Link>
                </div>
            </nav>
        </div>
    )
}


export default Navbar;