import Nav2 from "../navbar/Nav2";
import { Link, useParams } from "react-router-dom"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Divider from '@mui/material/Divider';
import Button from "@mui/material/Button"
import { useEffect, useState, useContext } from "react";
import { useRequest } from "../hooks/useRequest"
import { AuthContext } from "../context/auth"
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';






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
  









const UserProfile = () => {
    const auth = useContext(AuthContext)
    const [clickedPosts, setClickedPosts] = useState(true);
    const [clickedSaves, setClickedSaves] = useState(false);
    // const showPosts = () => {
    //     setClickedPosts(true);
    //     setClickedSaves(false);
    // }
    // const showSaves = () => {
    //     setClickedPosts(false);
    //     setClickedSaves(true);
    // }



    const [profile, setProfile] = useState([]);

    const { id } = useParams()
    const sendRequest = useRequest();
    useEffect(() => {
        sendRequest(
            process.env.REACT_APP_API_URL + `/users/profile/${id}`,
            {},
            {},
            {
                auth: true
            },
            "GET"
        ).then((response) => {
            if (response?.success) {
                setProfile(response.data);
            }
        });
    }, []);
    return (
        <>
            <Nav2 />
            <div className="container-fluid">
                <div className="row mt-5">
                    <div className="offset-2 col-8 d-flex justify-content-center align-items-center">
                        <img
                            src='https://firebasestorage.googleapis.com/v0/b/flytographer-a1fa1.appspot.com/o/avatar%2Fprofile-icon-png-908.png?alt=media&token=3d4fc76e-e162-4074-b8d8-d7b4cd8c3ad4'
                            alt="avatar" style={{ width: "10em", height: "10em", borderRadius: "50%" }} />
                    </div>
                </div>
                <div className="d-flex justifiy-content-center align-items-center flex-column my-3">
                    <div>
                        Mohannad
                    </div>
                    <div className="d-flex gap-1">
                        <LocationOnOutlinedIcon />
                        <span>Yemen</span>
                    </div>
                    <div>
                        Hi i am mohannad
                    </div>
                </div>
                <Divider />
                <div className="d-flex flex-column text-center gap-5 my-5">
                    <div>
                        <ImageList sx={{ width: 1320, height: 950 }} cols={3}>
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
            </div>
        </>
    )
}


export default UserProfile;