import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Nav1 from "../navbar/Nav1";
import { useEffect, useState } from "react";
import { useRequest } from "../hooks/useRequest";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";




const Home = () => {
    const [pictures, setPictures] = useState([]);
    const [hover, setHover] = useState({ is: false, index: -1 });
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
                        <input
                            type="search"
                            placeholder="Search for free photos "
                            className="find"
                        />
                    </div>
                </div>
                <navbar>
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
                <Box sx={{ width: "100%", height: "100%" }}>
                    <ImageList variant="masonry" cols={3} gap={8}>
                        {pictures && pictures.length ? (
                            pictures.map((picture, i) => {
                                return (
                                    <ImageListItem style={{}} key={i}>
                                        <img
                                            onMouseEnter={() => setHover({ is: true, index: i })}
                                            onMouseLeave={() => setHover({ is: false, index: i })}
                                            style={{
                                                width: "100%",
                                                cursor: "pointer",
                                                opacity: hover && i == hover.index ? 0.7596 : 1,
                                            }}
                                            src={`${picture.file_name}?w=248&fit=crop&auto=format`}
                                            srcSet={`${picture.file_name}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        />
                                    </ImageListItem>
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