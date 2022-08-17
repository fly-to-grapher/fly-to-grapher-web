<<<<<<< HEAD:src/components/profile/myProfile.js
=======
import { useState } from "react";
>>>>>>> 07baa040320f992dc9729b972e1d48eb522b487f:src/components/profile/Profile.js
import Nav2 from "../navbar/Nav2";
import { Link } from "react-router-dom"
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Divider from '@mui/material/Divider';
import Button from "@mui/material/Button"
import { useEffect, useState } from "react";
import { useRequest } from "../hooks/useRequest"

const MyProfile = () => {
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


    const [profile, setProfile] = useState([]);


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
<<<<<<< HEAD:src/components/profile/myProfile.js
                        <img 
                            src='https://firebasestorage.googleapis.com/v0/b/flytographer-a1fa1.appspot.com/o/avatar%2Fprofile-icon-png-908.png?alt=media&token=3d4fc76e-e162-4074-b8d8-d7b4cd8c3ad4'
                            alt="avatar" style={{width:"10em", height: "10em", borderRadius: "50%"}}/>
=======
                        <img
                            src="https://cdn.dribbble.com/users/772985/screenshots/9247897/media/59b9f4624886350945af7b7fd2ee318f.png?compress=1&resize=400x300&vertical=top"
                            alt="avatar" style={{ width: "10em", height: "10em", borderRadius: "50%" }} />
>>>>>>> 07baa040320f992dc9729b972e1d48eb522b487f:src/components/profile/Profile.js
                    </div>
                    <div className="offset-1 col-1 d-flex justify-content-center align-items-center flex-column gap-3">
                        <Link to='/edit-profile'><ModeEditOutlineOutlinedIcon /></Link>
                        <Link to='/password'><KeyOutlinedIcon /></Link>
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