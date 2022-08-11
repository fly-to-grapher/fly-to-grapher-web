import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Nav1 = () => {
  
  const [nav, setNav] = useState(false);
  const changeNav = () => {
    
    if (window.scrollY >= 80) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", changeNav);

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
                src="./assert/flytogr.png"
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="155px"
                height="150px"
                loading="lazy"
              />
            : <img
                src="./assert/flytog_white.png"
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
                  <li>
                    {" "}<Link
                      to="/profile"
                      className="dropdown-item"
                      style={{ color: "black" }}
                    >
                      Your profile
                    </Link>
                  </li>
                  <li className="dropdown-item">Log Out</li>
                  <li>
                    {" "}<Link
                      to="/signup"
                      className="dropdown-item"
                      style={{ color: "black" }}
                    >
                      Sign Up
                    </Link>
                  </li>
                  <li>
                    {" "}<Link
                      to="/login"
                      className="dropdown-item"
                      style={{ color: "black" }}
                    >
                      Log In
                    </Link>{" "}
                  </li>
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
                  <li>
                    {" "}<Link
                      to="/profile"
                      className="dropdown-item"
                      style={{ color: "black" }}
                    >
                      Your profile
                    </Link>
                  </li>
                  <li className="dropdown-item">Log Out</li>
                  <li>
                    {" "}<Link
                      to="/signup"
                      className="dropdown-item"
                      style={{ color: "black" }}
                    >
                      Sign Up
                    </Link>
                  </li>
                  <li>
                    {" "}<Link
                      to="/login"
                      className="dropdown-item"
                      style={{ color: "black" }}
                    >
                      Log In
                    </Link>{" "}
                  </li>
                </ul>
              </div>}
          {nav
            ? <Link
                to="/upload"
                className="btn "
                style={{ color: "white", background: "#012848" }}
              >
                Upload
              </Link>
            : <Link
                to="/upload"
                className="btn "
                style={{ color: "black", background: "white" }}
              >
                Upload
              </Link>}
        </div>
      </div>
    </nav>
  );
};

export default Nav1;
