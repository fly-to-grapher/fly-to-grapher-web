import Nav2 from "../navbar/Nav2";
import { Link } from "react-router-dom";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { useRequest } from "../hooks/useRequest";
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import Box from "@mui/material/Box";
import MyProfileImage from "./MyProfileImage";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { MDBSpinner } from "mdb-react-ui-kit";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Favorite from "@mui/icons-material/Favorite";

const MyProfile = () => {
  const [profile, setProfiles] = useState([]);
  const [pictures, setPictures] = useState([]);
  const [videos, setVideos] = useState([]);
  const [likes, setLikes] = useState([]);
  const [saves, setSaves] = useState([]);
  const [count, setCount] = useState(0);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

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

  const deleteFile = (id) => {
    if (window.confirm("Do you want to delete this file ?")) {
      sendRequest(
        `${process.env.REACT_APP_API_URL}/files/${id}`,
        {},
        {},
        {
          auth: true
        },
        "DELETE"
      ).then((response) => {
        if (response?.success) {
          window.location.reload();
        }
      });
    }
  };

  const sendRequest = useRequest();
  useEffect(() => {
    sendRequest(
      "http://localhost:5000/users/myprofile",
      {},
      {},
      {
        auth: true
      },
      "GET"
    ).then((response) => {
      if (response?.success) {
        setProfiles(response.data);
        setPictures(response.data.pictures);
        setVideos(response.data.videos);
        setLikes(response.data.likes);
        setSaves(response.data.save);
      }
    });
  }, [count]);
  const [clickedPictures, setClickedPictures] = useState(true);
  const [clickedVideos, setClickedVideos] = useState(false);
  const [clickedSaves, setClickedSaves] = useState(false);
  const showPictures = () => {
    setClickedPictures(true);
    setClickedSaves(false);
    setClickedVideos(false);
  };
  const showVideos = () => {
    setClickedVideos(true);
    setClickedPictures(false);
    setClickedSaves(false);
  };
  const showSaves = () => {
    setClickedSaves(true);
    setClickedPictures(false);
    setClickedVideos(false);
  };
  return (
    <>
      <Nav2 />

      <div className="container-fluid">
        <div className="row mt-2">
          <div className="offset-2 col-8 d-flex justify-content-center align-items-center">
            <img
              src={profile?.user?.avatar}
              alt="avatar"
              style={{ width: "10em", height: "10em", borderRadius: "50%" }}
            />
          </div>
          <div className="offset-1 col-1 d-flex justify-content-center align-items-center flex-column gap-3">
            <Link to="/edit-profile" alt="edit your profile">
              <ModeEditOutlineOutlinedIcon />
            </Link>
            <Link to="/password">
              <KeyOutlinedIcon />
            </Link>
            <Link to="/avatar">
              <AccountCircleOutlinedIcon />
            </Link>
          </div>
        </div>
        <div className="d-flex justifiy-content-center align-items-center flex-column my-3">
          <div>{profile?.user?.name}</div>
          <div className="d-flex gap-1">
            <LocationOnOutlinedIcon />
            <span>{profile?.user?.location}</span>
          </div>
          <div>{profile?.user?.bio}</div>
        </div>
        <Divider />
        {clickedPictures ? (
          <div className="d-flex flex-column text-center gap-5 my-3">
            <div className="d-flex justify-content-center align-items-center gap-5">
              <Button variant="contained" onClick={showPictures}>
                pictures
              </Button>
              <Button variant="outlined" onClick={showVideos}>
                Videos
              </Button>
              <Button variant="outlined" onClick={showSaves}>
                Saves
              </Button>
            </div>
            <div>
              <Box
                sx={{
                  width: "96%",
                  height: "100%",
                  boxSizing: "border-box",
                  marginX: "2%"
                }}
              >
                <ImageList variant="masonry" cols={3} gap={8}>
                  {pictures && pictures.length ? (
                    pictures.map((post, i) => {
                      return (
                        <MyProfileImage
                          picture={post}
                          key={i}
                          user={profile.user}
                          likes={likes}
                          saves={saves}
                        />
                      );
                    })
                  ) : (
                    <b>
                      <p>{profile?.user?.name} has no photos yet 😔</p>
                    </b>
                  )}
                </ImageList>
              </Box>
            </div>
          </div>
        ) : clickedVideos ? (
          <div className="d-flex flex-column text-center gap-5 my-3">
            <div className="d-flex justify-content-center align-items-center gap-5">
              <Button variant="outlined" onClick={showPictures}>
                pictures
              </Button>
              <Button variant="contained" onClick={showVideos}>
                Videos
              </Button>
              <Button variant="outlined" onClick={showSaves}>
                Saves
              </Button>
            </div>
            {/* <div className="mt-3"> */}
            <div className="d-flex flex-wrap justify-content-between gap-2 p-4">
              {videos && videos.length ? (
                videos.map((video, i) => {
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
                            <button
                              onClick={() => deleteFile(video.id)}
                              style={{
                                width: "5em",
                                height: "auto",
                                cursor: "pointer"
                              }}
                              className="justify-content-end btn btn-danger mb-2"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <b>
                  <p>{profile?.user?.name} has no videos yet 😔</p>
                </b>
              )}
            </div>
          </div>
        ) : (
          <div className="d-flex flex-column text-center gap-5 my-3">
            <div className="d-flex justify-content-center align-items-center gap-5">
              <Button variant="outlined" onClick={showPictures}>
                pictures
              </Button>
              <Button variant="outlined" onClick={showVideos}>
                Videos
              </Button>
              <Button variant="contained" onClick={showSaves}>
                Saves
              </Button>
            </div>
            <div>
              <Box
                sx={{
                  width: "96%",
                  height: "100%",
                  boxSizing: "border-box",
                  marginX: "2%"
                }}
              >
                <ImageList variant="masonry" cols={3} gap={8}>
                  {saves && saves.length ? (
                    saves.map((save, i) => {
                      return (
                        <MyProfileImage
                          picture={save.File}
                          key={i}
                          user={profile.user}
                          likes={likes}
                          saves={saves}
                        />
                      );
                    })
                  ) : (
                    <p>No saves yet</p>
                  )}
                </ImageList>
              </Box>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MyProfile;
