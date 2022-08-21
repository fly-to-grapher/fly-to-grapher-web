import Nav2 from "../navbar/Nav2";
import { Link } from "react-router-dom"
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Divider from '@mui/material/Divider';
import Button from "@mui/material/Button"
import { useEffect, useState } from "react";
import { useRequest } from "../hooks/useRequest"

const MyProfile = (profile) => {
const [profiles, setProfiles] = useState([]);

const sendRequest = useRequest();
    useEffect(() => {
        sendRequest(
            process.env.REACT_APP_API_URL + "/users/myprofile",
            {},
            {},
            {
                auth: true
            },
            "GET"
        ).then((response) => {
            if (response?.success) {
                setProfiles(response.data);
            }
        });
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
                            src={profile.avatar}
                            alt="avatar" style={{ width: "10em", height: "10em", borderRadius: "50%" }} />
                    </div>
                    <div className="offset-1 col-1 d-flex justify-content-center align-items-center flex-column gap-3">
                        <Link to='/edit-profile'><ModeEditOutlineOutlinedIcon /></Link>
                        <Link to='/password'><KeyOutlinedIcon /></Link>
                    </div>
                </div>
                <div className="d-flex justifiy-content-center align-items-center flex-column my-3">
                    <div>
                        {profile.name}
                    </div>
                    <div className="d-flex gap-1">
                        <LocationOnOutlinedIcon />
                        <span>{profile.location}</span>
                    </div>
                    <div>
                        {profile.bio}
                    </div>
                </div>
                <Divider />
                {clickedPosts ?
                    <div className="d-flex flex-column text-center gap-5 my-3">
                        <div className="d-flex justify-content-center align-items-center gap-5">
                            <Button variant="contained" onClick={showPosts}>Posts</Button>
                            <Button variant="outlined" onClick={showSaves}>Saves</Button>
                        </div>
                        HI I AM SHOWING ALL POSTS
                    </div>
                    :
                    <div className="d-flex flex-column text-center gap-5 my-3">
                        <div className="d-flex justify-content-center align-items-center gap-5">
                            <Button variant="outlined" onClick={showPosts}>Posts</Button>
                            <Button variant="contained" onClick={showSaves}>Saves</Button>
                        </div>
                        HI I AM SHOWING ALL SAVES
                    </div>
                }
            </div>
        </>
    )
}


export default MyProfile;