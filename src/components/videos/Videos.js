import React from "react";
import "./Videos.css";
import { Link } from "react-router-dom";
import Nav1 from "../navbar/Nav1";
import { useEffect, useState } from "react";
import { useRequest } from "../hooks/useRequest";
import { MDBSpinner } from 'mdb-react-ui-kit';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Favorite from '@mui/icons-material/Favorite';








const Videos = ({ video, i }) => {

    const [videos, setVideos] = useState([]);
    const sendRequest = useRequest();

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const addRemoveLike = () => {
        sendRequest(`${process.env.REACT_APP_API_URL}/likes/${i}`, {}, {}, {
            type: 'json',
            auth: true
        }, 'post')
            .then((response) => {
                console.log(response)
            });
    }
    const addRemoveSave = () => {
        sendRequest(`${process.env.REACT_APP_API_URL}/save/${i}`, {}, {}, {
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
                <div className="d-flex flex-wrap justify-content-between gap-2 p-4">
                    {videos && videos.length ? (
                        videos.map((video, i) => {
                            return (
                                <div>
                                    <video src={video.file_name} width="400" height="300" controls></video>
                                    <div className=" d-flex justify-content-end align-items-center gap-2">
                                        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} onClick={addRemoveLike} />
                                        <Checkbox {...label} icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} onClick={addRemoveSave} />
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





