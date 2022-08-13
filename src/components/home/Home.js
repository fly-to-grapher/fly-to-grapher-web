import React from "react";
import './Home.css';
import { Link } from "react-router-dom"
import Nav1 from "../navbar/Nav1"
import { useEffect, useState } from 'react';
import { useRequest } from '../hooks/useRequest'



const Home = () => {
    const [pictures, setPictures] = useState([]);
    const sendRequest = useRequest()
    useEffect(() => {
        sendRequest(process.env.REACT_APP_API_URL + '/files/pictures', {}, {}, {
            auth: true,
        }, 'GET').then((response) => {
            if (response?.success) {
                setPictures(response.data)
            }
        })
    }, [])
    console.log(pictures);
    {pictures && pictures.length ? pictures.map((picture, i) => {
    return (
        <>
            <Nav1 />
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
                            src={picture.file_name}
                            alt="free to use"
                        />
                    </div>
                    <div className="explore d-flex justify-content-center">Load more</div>
                </main>
            </div>
        </>
    )
        })
    :
        <p>No pictures available</p>
    }
}



export default Home;






