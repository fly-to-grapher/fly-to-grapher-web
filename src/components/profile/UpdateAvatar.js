import React from "react"
import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { useRequest } from "../hooks/useRequest"
import Nav2 from "../navbar/Nav2";

const Avatar = () => {
    const navigate = useNavigate()
    const sendRequest = useRequest()
    const avatarRef = useRef()
    const [loading, setLoading] = useState(false);

    const changeAvatar = async () => {
        setLoading(true);
        const formdata = new FormData();
        formdata.append('avatar', avatarRef.current.files[0])
        await sendRequest(process.env.REACT_APP_API_URL + "/users/avatar", {}, formdata, { auth: true }, 'put')
            .then((response) => {
                window.alert(response?.messages?.join(' '))
                if (response?.success) {
                    navigate('/myprofile')
                }
            })
        setLoading(false);
    }
    return (
        <>
            <Nav2 />
            <div className="d-flex justify-content-center mb-5 mt-5" >
                <h4>
                    <b>
                        Change your Avatar
                    </b>
                </h4>
            </div>
            <div className="card ">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-12 d-flex justify-content-center">
                            <div className="row"><div className="col-md-12 ">
                                <div className="form-group mt-4">
                                    <label className="d-flex justify-content-center">
                                        <b>Choose your avatar</b>
                                    </label>
                                    <input className="form-control mt-2" ref={avatarRef} name="newPassword"  required="required" maxLength="255" type="file" style={{ backgroundColor: "#d5ecff" }} accept="image/*" />
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center mb-4 mt-2">
                    <button type="submit" className="btn btn-info btn-save-form " onClick={changeAvatar} style={{ backgroundColor: "#012848", color: "white" }}>
                        <b>Save</b>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Avatar