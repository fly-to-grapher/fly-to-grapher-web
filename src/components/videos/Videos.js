import React from "react";
import "./Videos.css";
import { Link } from "react-router-dom";
import Nav1 from "../navbar/Nav1";
import { useEffect, useState } from "react";
import { useRequest } from "../hooks/useRequest";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import { MDBSpinner } from 'mdb-react-ui-kit';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Favorite from '@mui/icons-material/Favorite';








const Videos = ({ video, i }) => {

    const [videos, setVideos] = useState([]);
    // console.log("videos: ",videos)
    const sendRequest = useRequest();

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const addRemoveLike = (id) => {
        sendRequest(`${process.env.REACT_APP_API_URL}/likes/${id}`, {}, {}, {
            type: 'json',
            auth: true
        }, 'post')
            .then((response) => {
                console.log(response)
            });
    }
    const addRemoveSave = (id) => {
        sendRequest(`${process.env.REACT_APP_API_URL}/save/${id}`, {}, {}, {
            type: 'json',
            auth: true
        }, 'post')
            .then((response) => {
                console.log(response)
            });
    }

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
                console.log("data: ", response.data)
                setVideos(response.data.files);
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
                <h1 className="d-flex justify-content-center">Free Stock Videos</h1>
                <div className="d-flex flex-wrap justify-content-between gap-2 p-4">
                    {videos && videos.length ? (
                        videos.map((video, i) => {
                            return (
                                <div>
                                    <video src={video.file_name} width="400" height="300" controls></video>
                                    <div className=" d-flex justify-content-between align-items-center">
                                        <div className="">
                                            <Link to={"/profile/" + video?.User?.id} className="d-flex gap-3 align-items-center text-decoration-none">
                                                <img
                                                    src={video?.User?.avatar}
                                                    alt="avatar" style={{ width: "3em", height: "3em", borderRadius: "50%" }} />
                                                <span style={{ color: "black" }}>{video?.User?.username}</span>
                                            </Link>
                                        </div>
                                        <div>
                                            <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} onClick={() => addRemoveLike(video.id)} />
                                            <Checkbox {...label} icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} onClick={() => addRemoveSave(video.id)} />
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="d-flex justify-content-center" >
                            <MDBSpinner grow color='rgb(29, 94, 147)' style={{ color: 'rgb(29, 94, 147)' }}>
                            </MDBSpinner>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};




export default Videos;





