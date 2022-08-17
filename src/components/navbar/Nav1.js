import { Link } from "react-router-dom";
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/auth"


const Nav1 = () => {
  const auth = useContext(AuthContext)
    const navigate = useNavigate()
    const logout = () => {
        
        if (window.confirm('Are you sure you want to log out ?')) {
            auth.logout()
            navigate('/login')
        } 
    }
  const [nav, setNav] = useState(false);
  const changeNav = () => {
    
    if (window.scrollY >= 80) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  const checkIfLoggedIn = () => {
    if(auth?.isAuthenticated) navigate('/upload')
    else{
      navigate("/login")
      alert("Please login first")
    } 
  }

  window.addEventListener("scroll", changeNav);

  // const notLogin = () => {
  //   if (!auth.isAuthenticated) {
  //     navigate('/login')
  //   }
  // }

  return (
    <nav
      className={
        nav
          ? "container-fluid px-5 fixed-top bg-white"
          : "container-fluid px-5 fixed-top"
      }
    >
      <div className="navbar navbar-expand-lg navbar-dark d-flex justify-content-between">
        <Link to="/">
          {nav
            ? <img
                src="./assert/ftg2.png"
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="155px"
                height="150px"
                loading="lazy"
              />
            : <img
                src="./assert/ftg1w.png"
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="155px"
                height="150px"
                loading="lazy"
              />}
        </Link>
        <div className="d-flex justify-content-center">
          {nav
            ? <div
                className="nav-item dropdown d-flex justify-content-center align-items-center me-4"
                style={{ color: "#012848" }}
              >
                <li
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "#012848" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fillRule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                </li>
                <ul
                  className="dropdown-menu "
                  style={{}}
                  aria-labelledby="navbarDropdown"
                >
                  {auth.isAuthenticated && <>
                  <li>
                    {" "}<Link
                      to="/profile"
                      className="dropdown-item"
                      style={{ color: "black" }}
                    >
                      Your profile
                    </Link>
                  </li>
                    </>}
                  {auth.isAuthenticated && <>
                  <li onClick={() => logout()} className="dropdown-item" style={{ color: "black" }} >Log out</li>
                  </>}
                  {!auth.isAuthenticated && <>
                  <li>
                    {" "}<Link
                      to="/signup"
                      className="dropdown-item"
                      style={{ color: "black" }}
                    >
                      Sign Up
                    </Link>
                  </li>
                  </>}
                  {!auth.isAuthenticated && <>
                  <li>
                    {" "}<Link
                      to="/login"
                      className="dropdown-item"
                      style={{ color: "black" }}
                    >
                      Log In
                    </Link>{" "}
                  </li>
                  </>}
                </ul>
              </div>
            : <div
                className="nav-item dropdown d-flex justify-content-center align-items-center me-4"
                style={{ color: "white" }}
              >
                <li
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "white" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    fill="currentColor"
                    className="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fillRule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                </li>
                <ul
                  className="dropdown-menu "
                  style={{}}
                  aria-labelledby="navbarDropdown"
                >
                  {auth.isAuthenticated && <>
                  <li>
                    {" "}<Link
                      to="/profile"
                      className="dropdown-item"
                      style={{ color: "black" }}
                    >
                      Your profile
                    </Link>
                  </li>
                  </>}
                  {auth.isAuthenticated && <>
                  <li onClick={() => logout()} className="dropdown-item" style={{ color: "black" }} >Log out</li>
                  </>}
                  {!auth.isAuthenticated && <>
                  <li>
                    {" "}<Link
                      to="/signup"
                      className="dropdown-item"
                      style={{ color: "black" }}
                    >
                      Sign Up
                    </Link>
                  </li>
                  </>}
                  {!auth.isAuthenticated && <>
                  <li>
                    {" "}<Link
                      to="/login"
                      className="dropdown-item"
                      style={{ color: "black" }}
                    >
                      Log In
                    </Link>{" "}
                  </li>
                  </>}
                </ul>
              </div>}
          {nav
            ? <button
                className="btn "
                style={{ color: "white", background: "#012848" }}
                onClick={() => checkIfLoggedIn()}
              >
                Upload
              </button>
            : <button
                className="btn "
                style={{ color: "black", background: "white" }}
                onClick={() => checkIfLoggedIn()}
              >
                Upload
              </button>}
          
        </div>
      </div>
    </nav>
  );
};

export default Nav1;
