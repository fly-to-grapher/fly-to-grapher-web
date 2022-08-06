import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 15) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", changeNav);

  return (
    <div>
      {/* Start hero*/}
      <div className="top">
        <a href="#">
          <img src="https://i.postimg.cc/63TNN04y/Fourth-Of-July.gif" alt="" />
        </a>
      </div>
      <div className={nav ? 'hero hero-scroll': 'hero'}>
      {/* <div className="hero"> */}
        <nav>
          <img
            src="https://i.postimg.cc/3JgD2Jyt/p2.png"
            alt="IMg NOt Found"
            className="logo"
          />
          <ul>
            <li>Explore</li>
            <li>Join</li>
          </ul>
          <Link to="/upload" href="#" className="upload">
            Upload
          </Link>
        </nav>
        
      </div>
    </div>
  );
};

export default Nav;
