import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div>
      {/* Start hero*/}
      <div className="top">
        <a href="#">
          <img src="https://i.postimg.cc/63TNN04y/Fourth-Of-July.gif" alt="" />
        </a>
      </div>
      <div className="hero">
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
          <a href="#" className="upload">
            Upload
          </a>
        </nav>
        <div className="content">
          {/*     <h1>Royalty Free Stock Photos</h1> */}
          <h1>
            The best free stock photos and videos
          </h1>
          <input type="search" className="find" />

        </div>
      </div>
      {/* End hero*/}
      <navbar>
        <ul>
          <li className="active">Home</li>
          <li>Videos</li>
          <li>Categories</li>
        </ul>
      </navbar>
    </div>
  );
};

export default Nav;
