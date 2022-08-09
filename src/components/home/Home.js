import React from "react";
import './Home.css';
import { Link } from "react-router-dom"
import Nav from "../navbar/Nav"


const Home = () => {

    return (
        <>
            <Nav />
            <div>
                {/* Start hero*/}
                <div className="herro">
                    <div className="content">
                        {/*     <h1>Royalty Free Stock Photos</h1> */}
                        <h1>The best free stock photos and videos</h1>
                        <input type="search" placeholder="Search for free photos " className="find" />
                    </div>
                </div>
                {/* End hero*/}
                <navbar>
                    <div>
                        <ul className="nav justify-content-center mt-3 mb-2">
                            <Link to="/" className="nav-item" style={{ textDecoration: 'none' }}>
                                <a className="nav-link" style={{ color: "black" }}><b><h4><u>Home</u></h4></b></a>
                            </Link>
                            <Link to="/videos" className="nav-item" style={{ textDecoration: 'none' }}>
                                <a className="nav-link" style={{ color: "black" }}><b><h4><u>Videos</u></h4></b></a>
                            </Link>
                            <Link to="/categories" className="nav-item" style={{ textDecoration: 'none' }}>
                                <a className="nav-link" style={{ color: "black" }}><b><h4><u>Categories</u></h4></b></a>
                            </Link>


                            {/* <li className="active">Home</li>
          <li className="active">Videos</li>
          <li className="active">Categories</li> */}
                        </ul>
                    </div>
                </navbar>
            </div>


            <div>
                <a href="#" className="prev">
                    &lt;
                </a>
                <a href="#" className="next">
                    &gt;
                </a>
                <h1 className="d-flex justify-content-center">Free Stock Photos</h1>
                <main className="container">
                    <div>
                        <img
                            src="https://i.postimg.cc/MGN0PM10/pexels-kelvin-valerio-617278.jpg"
                            alt=""
                        />
                    </div>
                    <div className="vertical">
                        <img
                            src="https://i.postimg.cc/1RcZhLb8/pexels-maksim-goncharenok-4596641.jpg"
                            alt=""
                        />
                    </div>
                    <div className="horizontal">
                        <img
                            src="https://i.postimg.cc/YStVt9FZ/pexels-matheus-bertelli-573298.jpg"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            src="https://i.postimg.cc/bJ6n560d/a-tattooed-hand-doing-the-sign-for-i-love-you.jpg"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            src="https://i.postimg.cc/PJgCG0Cf/pexels-wouter-de-jong-571169.jpg"
                            alt=""
                        />
                    </div>
                    <div className="big">
                        <img
                            src="https://i.postimg.cc/K8P4YTdz/pexels-life-of-wu-3381013.jpg"
                            alt=""
                        />
                    </div>
                    <div>
                        <img src="https://i.postimg.cc/rFXkR5tt/pic7.png" alt="" />
                    </div>
                    <div className="vertical">
                        <img src="https://source.unsplash.com/random" alt="" />
                    </div>
                    <div>
                        <img src="https://picsum.photos/id/29/800" alt="" />
                    </div>
                    <div className="horizontal">
                        <img src="https://picsum.photos/id/10/800" alt="" />
                    </div>
                    <div>
                        <img src="https://picsum.photos/id/11/800" alt="" />
                    </div>
                    <div className="big">
                        <img
                            src="https://i.postimg.cc/FRY8f6KQ/pexels-andrea-piacquadio-3776169.jpg"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            src="https://picsum.photos/id/1/200/300
"
                            alt=""
                        />
                    </div>
                    <div className="horizontal">
                        <img
                            src="https://source.unsplash.com/user/erondu/daily
"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            src="https://source.unsplash.com/weekly?landscape
"
                            alt=""
                        />
                    </div>
                    <div className="big">
                        <img
                            src="https://i.postimg.cc/cHyKbrbg/pexels-aleksandar-pasaric-325185.jpg
"
                            alt=""
                        />
                    </div>
                    <div className="explore">Explore</div>
                </main>
            </div>
        </>

    )
}



export default Home;






