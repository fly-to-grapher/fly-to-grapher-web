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
import ImageListItem from "@mui/material/ImageListItem";
import Box from "@mui/material/Box";
import UserProfileImage from "./UserProfileImage";
import { useParams } from "react-router-dom";
import { MDBSpinner } from "mdb-react-ui-kit";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Favorite from "@mui/icons-material/Favorite";

const UserProfile = () => {
  const [profile, setProfiles] = useState([]);
  const [pictures, setPictures] = useState([]);
  const [videos, setVideos] = useState([]);
  const [likes, setLikes] = useState([]);
  const [saves, setSaves] = useState([]);
  const [count, setCount] = useState(0);
  const { id } = useParams();
  // const [saved, setSaved] = useState([]);
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

  const sendRequest = useRequest();
  useEffect(() => {
    sendRequest(
      `http://localhost:5000/users/profile/${id}`,
      {},
      {},
      {
        auth: true
      },
      "GET"
    ).then((response) => {
      if (response?.success) {
        console.log(`res`, response);
        setProfiles(response.data);
        setPictures(response.data.pictures);
        setVideos(response.data.videos);
        setSaves(response.data.saves);
        setLikes(response.data.likes);
      }
    });
  }, [count]);
  const [clickedPictures, setClickedPictures] = useState(true);
  const [clickedVideos, setClickedVideos] = useState(false);
  const showPictures = () => {
    setClickedPictures(true);
    setClickedVideos(false);
  };
  const showVideos = () => {
    setClickedVideos(true);
    setClickedPictures(false);
  };
  return (
    <>
      <Nav2 />
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="offset-2 col-8 d-flex justify-content-center align-items-center">
            <img
              src={profile?.user?.avatar}
              alt="avatar"
              style={{ width: "10em", height: "10em", borderRadius: "50%" }}
            />
          </div>
          {/* <div className="offset-1 col-1 d-flex justify-content-center align-items-center flex-column gap-3">
                        <Link to='/edit-profile'><ModeEditOutlineOutlinedIcon /></Link>
                        <Link to='/password'><KeyOutlinedIcon /></Link>
                    </div> */}
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
        <div className="d-flex flex-column text-center gap-5 my-3">
          {clickedPictures ? (
            <div className="d-flex flex-column text-center gap-5 my-3">
              <div className="d-flex justify-content-center align-items-center gap-5">
                <Button variant="contained" onClick={showPictures}>
                  Pictures
                </Button>
                <Button variant="outlined" onClick={showVideos}>
                  Videos
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
                          <UserProfileImage
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
                        <p>{profile?.user?.name} has no pictures yet 😔</p>
                      </b>
                    )}
                  </ImageList>
                </Box>
              </div>
            </div>
          ) : (
            <div className="mt-3">
              <div className="d-flex justify-content-center align-items-center gap-5">
                <Button variant="outlined" onClick={showPictures}>
                  Pictures
                </Button>
                <Button variant="contained" onClick={showVideos}>
                  Videos
                </Button>
              </div>
              <div className="d-flex flex-wrap justify-content-between gap-2 p-4">
                {videos && videos.length ? (
                  videos.map((video, i) => {
                    return (
                      <div key={i}>
                        <video
                          src={video.file_name}
                          width="400"
                          height="300"
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
                          <div>
                            <div className="mb-3 mt-4 d-flex justify-content-center align-items-center gap-3">
                              <div className="secondary">
                                <Checkbox
                                  {...label}
                                  icon={<FavoriteBorder />}
                                  checked={
                                    likes.find(
                                      (like) => video?.id == like.file_id
                                    )
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
                                    saves.find(
                                      (save) => video?.id == save.file_id
                                    )
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
          )}
        </div>
      </div>
    </>
  );
};

export default UserProfile;
