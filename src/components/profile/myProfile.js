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







const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
    },
];









const MyProfile = () => {
    const [profile, setProfiles] = useState([]);

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
            }
        });
        console.log(profile);
    }, []);
    const [clickedPosts, setClickedPosts] = useState(true);
    const [clickedSaves, setClickedSaves] = useState(false);
    const showPosts = () => {
        setClickedPosts(true);
        setClickedSaves(false);
    }
    const showSaves = () => {
        setClickedPosts(false);
        setClickedSaves(true);
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
                    <div className="offset-1 col-1 d-flex justify-content-center align-items-center flex-column gap-3">
                        <Link to='/edit-profile'><ModeEditOutlineOutlinedIcon /></Link>
                        <Link to='/password'><KeyOutlinedIcon /></Link>
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
                            <ImageList sx={{ width: 1320, height: 950 }} cols={4}>
                                {itemData.map((item) => (
                                    <ImageListItem key={item.img}>
                                        <img
                                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.title}
                                            loading="lazy"
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </div>
                    </div>
                    :
                    <div className="d-flex flex-column text-center gap-5 my-3">
                        <div className="d-flex justify-content-center align-items-center gap-5">
                            <Button variant="outlined" onClick={showPosts}>Posts</Button>
                            <Button variant="contained" onClick={showSaves}>Saves</Button>
                        </div>
                        <div>
                            <Box sx={{ width: 1320, height: 950, overflowY: 'scroll' }}>
                                <ImageList variant="masonry" cols={4} gap={8}>
                                    {itemData.map((item) => (
                                        <ImageListItem key={item.img}>
                                            <img
                                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.title}
                                                loading="lazy"
                                            />
                                        </ImageListItem>
                                    ))}
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