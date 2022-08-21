import Nav2 from "../navbar/Nav2";
import { Link , useParams} from "react-router-dom"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Divider from '@mui/material/Divider';
import Button from "@mui/material/Button"
import { useEffect, useState ,useContext } from "react";
import { useRequest } from "../hooks/useRequest"
import { AuthContext } from "../context/auth"


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

        const {id} = useParams()
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
                            alt="avatar" style={{width:"10em", height: "10em", borderRadius: "50%"}}/>
                    </div>
                </div>
                <div className="d-flex justifiy-content-center align-items-center flex-column my-3">
                    <div>
                        Mohannad
                    </div>
                    <div className="d-flex gap-1">
                        <LocationOnOutlinedIcon/>
                        <span>Yemen</span>
                    </div>
                    <div>
                        Hi i am mohannad
                    </div>
                </div>
                <Divider/>
                    <div className="d-flex flex-column text-center gap-5 my-3">
                        HI I AM SHOWING ALL POSTS
                    </div>
            </div>
        </>
    )
}


export default UserProfile;