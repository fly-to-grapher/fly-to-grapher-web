import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Nav1 from "../navbar/Nav1";
import { useEffect, useState } from "react";
import { useRequest } from "../hooks/useRequest";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import HomeImage from "../homeImages/HomeImage";


const Home = () => {
    const [pictures, setPictures] = useState([]);
    const sendRequest = useRequest();

    useEffect(() => {
        sendRequest(
            process.env.REACT_APP_API_URL + "/files/pictures",
            {},
            {},
            {
                auth: true
            },
            "GET"
        ).then((response) => {
            if (response?.success) {
                setPictures(response.data);
                console.log("images: ", response.data)
            }
        });
    }, []);




    return (
        <div>
            <Nav1 />
            <div>
                <div className="herro">
                    <div className="content">
                        <h1>The best free stock photos and videos</h1>
                    </div>
                </div>
                    <div>
                        <ul className="nav justify-content-center mt-3 mb-2">
                            <Link
                                to="/"
                                className="nav-item"
                                style={{ textDecoration: "none" }}
                            >
                                <a className="nav-link" style={{ color: "black" }}>
                                    <b>
                                        <h4>
                                            <u>Home</u>
                                        </h4>
                                    </b>
                                </a>
                            </Link>
                            <Link
                                to="/videos"
                                className="nav-item"
                                style={{ textDecoration: "none" }}
                            >
                                <a className="nav-link" style={{ color: "black" }}>
                                    <b>
                                        <h4>
                                            <u>Videos</u>
                                        </h4>
                                    </b>
                                </a>
                            </Link>
                            <Link
                                to="/categories"
                                className="nav-item"
                                style={{ textDecoration: "none" }}
                            >
                                <a className="nav-link" style={{ color: "black" }}>
                                    <b>
                                        <h4>
                                            <u>Categories</u>
                                        </h4>
                                    </b>
                                </a>
                            </Link>
                        </ul>
                    </div>
            </div>
            <div>
                <a href="#" className="prev">
                    &lt;
                </a>
                <a href="#" className="next">
                    &gt;
                </a>
                <h1 className="d-flex justify-content-center">Free Stock Photos</h1>
                <Box sx={{ width: "96%", height: "100%", boxSizing: "border-box", marginX: "2%" }}>
                    <ImageList variant="masonry" cols={3} gap={8}>
                        {pictures && pictures.length ? (
                            pictures.map((picture, i) => {
                                return (
                                    <HomeImage picture={picture} i={i} />
                                );
                            })
                        ) : (
                            <p>No pictures available</p>
                        )}
                    </ImageList>
                </Box>
            </div>
        </div>
    );
};
export default Home;