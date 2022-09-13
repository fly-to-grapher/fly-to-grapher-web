import React from "react";
import "./Videos.css";
import { Link } from "react-router-dom";
import Nav1 from "../navbar/Nav1";
import { useEffect, useState, useContext } from "react";
import { useRequest } from "../hooks/useRequest";
import { MDBSpinner } from "mdb-react-ui-kit";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Favorite from "@mui/icons-material/Favorite";
import { AuthContext } from "../context/auth";

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [likes, setLikes] = useState([]);
  const [saves, setSaves] = useState([]);
  const [count, setCount] = useState(0);
  const sendRequest = useRequest();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const auth = useContext(AuthContext);

  const addRemoveLike = (id) => {
    sendRequest(
      `${process.env.REACT_APP_API_URL}/likes/${id}`,
      {},
      {},
      {
        type: "json",
        auth: true
      },
      "post"
    ).then((response) => {
      console.log(response);
      setCount(count + 1);
    });
  };
  const addRemoveSave = (id) => {
    sendRequest(
      `${process.env.REACT_APP_API_URL}/save/${id}`,
      {},
      {},
      {
        type: "json",
        auth: true
      },
      "post"
    ).then((response) => {
      console.log(response);
      setCount(count + 1);
    });
  };

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
        setVideos(response.data.files);
        setLikes(response.data.likes);
        setSaves(response.data.saves);
      }
    });
  }, [count]);

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
              <li className="nav-link" style={{ color: "black" }}>
                <b>
                  <h4>
                    <u>Home</u>
                  </h4>
                </b>
              </li>
            </Link>
            <Link
              to="/videos"
              className="nav-item"
              style={{ textDecoration: "none" }}
            >
              <li className="nav-link" style={{ color: "black" }}>
                <b>
                  <h4>
                    <u>Videos</u>
                  </h4>
                </b>
              </li>
            </Link>
            <Link
              to="/categories"
              className="nav-item"
              style={{ textDecoration: "none" }}
            >
              <li className="nav-link" style={{ color: "black" }}>
                <b>
                  <h4>
                    <u>Categories</u>
                  </h4>
                </b>
              </li>
            </Link>
          </ul>
        </div>
        <hr></hr>
      </div>
      <div>
        <li href="#" className="prev">
          &lt;
        </li>
        <li href="#" className="next">
          &gt;
        </li>
        <h1 className="d-flex justify-content-center">Free Stock Videos</h1>
        <div className="d-flex flex-wrap justify-content-between gap-2 p-3 mb-5">
          {videos && videos.length ? (
            videos.map((video , i) => {
              return (
                <div key={i}>
                  <video
                    src={video.file_name}
                    width="350"
                    height="250"
                    controls
                  ></video>
                  <div className=" d-flex justify-content-between align-items-center">
                    <div className="">
                      <Link
                        to={"/profile/" + video?.User?.id}
                        className="d-flex gap-3 align-items-center text-decoration-none"
                      >
                        <img
                          src={video?.User?.avatar}
                          alt="avatar"
                          style={{
                            width: "3em",
                            height: "3em",
                            borderRadius: "50%"
                          }}
                        />
                        <span style={{ color: "black" }}>
                          {video?.User?.username}
                        </span>
                      </Link>
                    </div>
                    <div className="mb-3 mt-4 d-flex justify-content-center align-items-center gap-3">
                      <div className="secondary">
                        <Checkbox
                          {...label}
                          icon={<FavoriteBorder />}
                          checked={
                            likes.find((like) => video?.id == like.file_id)
                              ? true
                              : false
                          }
                          checkedIcon={<Favorite />}
                          onClick={() => addRemoveLike(video.id)}
                        />
                      </div>
                      <div className="secondary">
                        <Checkbox
                          {...label}
                          icon={<BookmarkBorderIcon />}
                          checked={
                            saves.find((save) => video?.id == save.file_id)
                              ? true
                              : false
                          }
                          checkedIcon={<BookmarkIcon />}
                          onClick={() => addRemoveSave(video.id)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="d-flex justify-content-center">
              <MDBSpinner
                grow
                color="rgb(29, 94, 147)"
                style={{ color: "rgb(29, 94, 147)" }}
              ></MDBSpinner>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Videos;
