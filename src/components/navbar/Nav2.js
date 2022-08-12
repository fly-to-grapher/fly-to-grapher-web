import { Link } from "react-router-dom";
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/auth"


const Nav2 = () => {
    const auth = useContext(AuthContext)
    const navigate = useNavigate()
    const logout = () => {
        auth.logout()
        if (window.confirm('Are you sure you want to log out ?')) {
            navigate('/login')
        } 
    }
    const notLogin = () => {
      if (!auth.login) {
        navigate('/login')
      }
    }
    return (
        <nav className=" container-fluid px-5 " style={{ backgroundColor: "#012848" }}>
            <div className="navbar navbar-expand-lg navbar-dark d-flex justify-content-between">
                <Link to="/" className="">
                <img
                src="./assert/flytog_white.png"
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="155px"
                height="150px"
                loading="lazy"
              />
                </Link>
                <div className="d-flex justify-content-center">
                    <Link to="/" className="btn " style={{ color: "white" }} >Home</Link>
                    <div className="nav-item dropdown d-flex justify-content-center align-items-center" style={{ color: "white" }}>
                        <li className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "white" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                            </svg>
                        </li>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            {auth.isAuthenticated && <>
                                <li> <Link to="/profile" className="dropdown-item" style={{ color: "black" }} >Your profile</Link></li>
                                <li onClick={() => logout()} className="dropdown-item" style={{ color: "black" }} >Log out</li>
                            </>}
                            {!auth.isAuthenticated && <>
                                <li> <Link to="/signup" className="dropdown-item" style={{ color: "black" }} >Sign Up</Link></li>
                                <li> <Link to="/login" className="dropdown-item" style={{ color: "black" }} >Log In</Link> </li>
                            </>}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Nav2;