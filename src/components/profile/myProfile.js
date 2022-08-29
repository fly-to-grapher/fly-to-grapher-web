import Nav2 from "../navbar/Nav2";
import { Link } from "react-router-dom"
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Divider from '@mui/material/Divider';
import Button from "@mui/material/Button"
import { useEffect, useState } from "react";
import { useRequest } from "../hooks/useRequest"
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
// import HomeImage from "../homeImages/HomeImage";
import MyProfileImage from "./MyProfileImage";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';




const MyProfile = () => {
    const [profile, setProfiles] = useState([]);
    const [posts, setPosts] = useState([]);
    const [savess, setSavess] = useState([]);
    const [likes, setLikes] = useState([]);
    const [saves, setSaves] = useState([]);

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
                console.log(`res`,response);
                setProfiles(response.data);
                setPosts(response.data.files);
                setSavess(response.data.saves);
                setLikes(response.data.likes);
                setSaves(response.data.save);
                // setItemData(response.data.files)
            }
        });
    }, []);
    const [clickedPosts, setClickedPosts] = useState(true);
    const [clickedSaves, setClickedSaves] = useState(false);
    const showPosts = () => {
        setClickedPosts(true);
        setClickedSaves(false);
        // setItemData(saves)
    }
    const showSaves = () => {
        setClickedPosts(false);
        setClickedSaves(true);
        // setItemData(posts)
    }
    return (
        <>
            <Nav2 />

            <div className="container-fluid">
                <div className="row mt-5">
                    <div className="offset-2 col-8 d-flex justify-content-center align-items-center">
                        <img
                            src={profile?.user?.avatar}
                            alt="avatar" style={{ width: "10em", height: "10em", borderRadius: "50%" }} />
                    </div>
                    {/* <Link to='/avatar' className="text-decoration-none">
                    <div>
                    <span>Change your Avatar</span>
                    </div>
                    </Link> */}
                    <div className="offset-1 col-1 d-flex justify-content-center align-items-center flex-column gap-3">
                        <Link to='/edit-profile' alt='edit your profile'><ModeEditOutlineOutlinedIcon /></Link>
                        <Link to='/password'><KeyOutlinedIcon /></Link>
                        <Link to='/avatar'><AccountCircleOutlinedIcon /></Link>
                    </div>
                </div>
                <div className="d-flex justifiy-content-center align-items-center flex-column my-3">
                    <div>
                        {profile?.user?.name}
                    </div>
                    <div className="d-flex gap-1">
                        <LocationOnOutlinedIcon />
                        <span>{profile?.user?.location}</span>
                    </div>
                    <div>
                        {profile?.user?.bio}
                    </div>
                </div>
                <Divider />
                {clickedPosts ?
                    <div className="d-flex flex-column text-center gap-5 my-3">
                        <div className="d-flex justify-content-center align-items-center gap-5">
                            <Button variant="contained" onClick={showPosts}>Posts</Button>
                            <Button variant="outlined" onClick={showSaves}>Saves</Button>
                        </div>
                        <div>
                            {/* <ImageList sx={{ width: 1320, height: 950 }} cols={4}>
                                {posts.map((item) => (
                                    <ImageListItem key={item.file_name}>
                                        <img
                                            src={`${item.file_name}?w=164&h=164&fit=crop&auto=format`}
                                            srcSet={`${item.file_name}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                            // alt={item.title}
                                            loading="lazy"
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList> */}
                            <Box sx={{ width: "96%", height: "100%", boxSizing: "border-box", marginX: "2%" }}>
                    <ImageList variant="masonry" cols={3} gap={8}>
                        {posts && posts.length ? (
                            posts.map((post, i) => {
                                return (
                                    <MyProfileImage picture={post} i={i} user={profile.user} likes={likes} saves={saves}/>
                                );
                            })
                        ) : (
                            <p>No posts available</p>
                        )}
                    </ImageList>
                </Box>
                        </div>
                    </div>
                    :
                    <div className="d-flex flex-column text-center gap-5 my-3">
                        <div className="d-flex justify-content-center align-items-center gap-5">
                            <Button variant="outlined" onClick={showPosts}>Posts</Button>
                            <Button variant="contained" onClick={showSaves}>Saves</Button>
                        </div>
                        <div>
                        <Box sx={{ width: "96%", height: "100%", boxSizing: "border-box", marginX: "2%" }}>
                    <ImageList variant="masonry" cols={3} gap={8}>
                        {savess && savess.length ? (
                            savess.map((save, i) => {
                                return (
                                    <MyProfileImage picture={save.File} i={i} user={profile.user}/>
                                );
                            })
                        ) : (
                            <b><p>{profile?.user?.name}has no photos or videos yet 😔</p></b> 
                        )}
                    </ImageList>
                </Box>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}


export default MyProfile;