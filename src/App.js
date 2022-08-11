import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/navbar/Nav"
import Home from "./components/home/Home";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login"
import Videos from "./components/videos/Videos"
import Footer from "./components/footer/Footer";
import Upload from "./components/upload/Upload";
import Categories from "./components/categories/Categories"
import Profile from "./components/profile/Profile";
// import './Style.css';







const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;




















// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Nav.css";

// const Nav = () => {
  // const [nav, setNav] = useState(false);
  // const changeNav = () => {
  //   if (window.scrollY >= 500) {
  //     setNav(true);
  //   } else {
  //     setNav(false);
  //   }
  // };

  // window.addEventListener("scroll", changeNav);

//   return (
//     <div>
//       {/* Start hero*/}
//       <div className="top">
//         <a href="#">
//           <img src="https://i.postimg.cc/63TNN04y/Fourth-Of-July.gif" alt="" />
//         </a>
//       </div>
//       <div className={nav ? "hero hero-scroll" : "hero"}>
//         {/* <div className="hero"> */}
//         <nav>
          // <Link to="/">
          //   {nav ?
          //     <img src="./assert/flytog.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes"
          //       width="200px" height="200px" loading="lazy" />
          //     :
          //     <img src="./assert/flytog_white.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes"
          //       width="200px" height="200px" loading="lazy" />
          //   }
          // </Link>
//           <ul>
//             <li>
//               <div
//                 className="nav-item dropdown d-flex justify-content-center align-items-center"
//               >
//                 <li
//                   className="nav-link dropdown-toggle"
//                   id="navbarDropdown"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Explore
//                 </li>
//                 <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                   <p>
//                     {" "}<Link
//                       to="/"
//                       className="dropdown-item"
//                     >
//                       Discover photos
//                     </Link>
//                   </p>
//                   {/* <li onClick={() => logout()} className="dropdown-item" style={{ color: "black" }} >Log Out</li> */}

//                   <p>
//                     {" "}<Link
//                       to="/"
//                       className="dropdown-item"
//                     >
//                       Discover videos
//                     </Link>
//                   </p>
//                 </ul>
//               </div>
//             </li>
//             <li>
//               <div
//                 className="nav-item dropdown d-flex justify-content-center align-items-center"

//               >
//                 <li
//                   className="nav-link dropdown-toggle"
//                   id="navbarDropdown"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="23"
//                     height="23"
//                     fill="currentColor"
//                     className="bi bi-person-circle"
//                     viewBox="0 0 16 16"
//                   >
//                     <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
//                     <path
//                       fillRule="evenodd"
//                       d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
//                     />
//                   </svg>
//                 </li>
//                 <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                   <p>
//                     {" "}<Link
//                       to="/account"
//                       className="dropdown-item"
//                       style={{ color: "black" }}
//                     >
//                       Your profile
//                     </Link>
//                   </p>
//                   <p>
//                     {" "}<Link
//                       to="/account"
//                       className="dropdown-item"
//                       style={{ color: "black" }}
//                     >
//                       Logout
//                     </Link>
//                   </p>

//                   <p>
//                     {" "}<Link
//                       to="/signup"
//                       className="dropdown-item"
//                       style={{ color: "black" }}
//                     >
//                       Sign Up
//                     </Link>
//                   </p>
//                   <p>
//                     {" "}<Link
//                       to="/login"
//                       className="dropdown-item"
//                       style={{ color: "black" }}
//                     >
//                       Log In
//                     </Link>{" "}
//                   </p>
//                 </ul>
//               </div>
//             </li>
//           </ul>
//           <Link to="/upload" href="#" className="upload">
//             Upload
//           </Link>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Nav;
