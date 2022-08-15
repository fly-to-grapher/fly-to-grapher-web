import React from "react";
import Nav2 from "../navbar/Nav2";
import { Link } from "react-router-dom"



const Profile = () => {
    return (
        <>
            <Nav2 />
            <div>
                hiiiiiiiii
            </div>
            <Link to='/edit-profile'>
                <h1>Edit your profile</h1>
            </Link>
            
        </>
    )
}


export default Profile;