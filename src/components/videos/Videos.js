import React from "react";
import "./Videos.css";
import { Link } from "react-router-dom";
import Nav1 from "../navbar/Nav1";
import { useEffect, useState } from "react";
import { useRequest } from "../hooks/useRequest";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import HomeImage from "../homeImages/HomeImage";


const Videos = () => {
    const [videos, setVideos] = useState([]);
    const sendRequest = useRequest();
    
    useEffect(() => {
        sendRequest(
            process.env.REACT_APP_API_URL + "/files/videos",
            {},
            {},
            {
                auth: true
            },
            "GET"
        ).then((response) => {
            if (response?.success) {
                setVideos(response.data);
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
                <h1 className="d-flex justify-content-center">Free Stock Videos</h1>
                <Box sx={{ width: "96%", height: "100%", boxSizing: "border-box", marginX: "2%" }}>
                    <video variant="masonry" cols={3} gap={8}>
                        {videos && videos.length ? (
                            videos.map((video, i) => {
                                return (
                                    <video>video={video} i={i}</video>
                                );
                            })
                        ) : (
                            <p>No videos available</p>
                        )}
                    </video>
                </Box>
            </div>
        </div>
    );
};
export default Videos;