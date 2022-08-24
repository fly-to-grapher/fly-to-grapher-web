import React from "react"
import { useState, useRef, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/auth"
import { useRequest } from "../hooks/useRequest"
import Nav2 from "../navbar/Nav2";

const EditProfile = () => {
    const navigate = useNavigate()
    const sendRequest = useRequest()
    const auth = useContext(AuthContext)
    const [user, setUser] = useState({
        name: auth?.user?.name,
        username: auth?.user?.username,
        email: auth?.user?.email,
        bio: auth?.user?.bio,
        location: auth?.user?.location
    })
    const nameRef = useRef()
    const usernameRef = useRef()
    const emailRef = useRef()
    const bioRef = useRef()
    const locationRef = useRef()
    const editUser = () => {
        sendRequest(`${process.env.REACT_APP_API_URL}/users/update`, {}, {
            name: nameRef.current.value,
            username: usernameRef.current.value,
            email: emailRef.current.value,
            bio: bioRef.current.value,
            location: locationRef.current.value
        }, {
            type: 'json',
            auth: true
        }, 'put')
            .then((response) => {
                window.alert(response?.messages?.join(' '))
                if (response?.success) {
                    navigate('/myprofile')
                }
            });
    }
    return (
        <>
            <Nav2 />
            <div>
                <div className="d-flex justify-content-center mb-5 mt-5" >
                    <h4>
                        <b>
                            Edit your profile
                        </b>
                    </h4>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-12 d-flex justify-content-center">
                                <div className="row"><div className="col-md-12">
                                    <div className="form-group">
                                        <label className="d-flex justify-content-center mb-2 mt-2">
                                            <b>Name </b>
                                        </label>
                                        <input className="form-control" value={user?.name} onChange={(e) => { setUser({ ...user, name: e.target.value }) }} ref={nameRef} required="required" maxLength="255" type="text" style={{ backgroundColor: "#d5ecff" }} />
                                    </div>
                                    <div>
                                        <label className="d-flex justify-content-center mb-2 mt-2">
                                            <b>Username </b>
                                        </label>
                                        <input className="form-control " value={user?.username} onChange={(e) => { setUser({ ...user, username: e.target.value }) }} ref={usernameRef} required="required" maxLength="150" type="text" style={{ backgroundColor: "#d5ecff" }} />
                                    </div>
                                    <div>
                                        <label className="d-flex justify-content-center mb-2 mt-2">
                                            <b>Email </b>
                                        </label>
                                        <input className="form-control" value={user?.email} onChange={(e) => { setUser({ ...user, email: e.target.value }) }} ref={emailRef} required="required" maxLength="150" type="text" style={{ backgroundColor: "#d5ecff" }} />
                                    </div>
                                    <div className="form-group">
                                        <label className="d-flex justify-content-center mb-2 mt-2">
                                            <b>Location </b>
                                        </label>
                                        <input className="form-control" value={user?.location} onChange={(e) => { setUser({ ...user, location: e.target.value }) }} ref={locationRef} required="required" maxLength="150" type="text" style={{ backgroundColor: "#d5ecff" }} />
                                    </div>
                                    <div className="form-group">
                                        <label className="d-flex justify-content-center mb-2 mt-2">
                                            <b>Bio </b>
                                        </label>
                                        <textarea className="form-control" value={user?.bio} onChange={(e) => { setUser({ ...user, bio: e.target.value }) }} ref={bioRef} required="required" cols="30" rows="3" style={{ backgroundColor: "#d5ecff" }}>
                                        </textarea>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mb-5 mt-2">
                        <Link to="/myprofile">
                            <button type="submit" className="btn btn-info btn-save-form " onClick={editUser} style={{ backgroundColor: "#012848", color: "white" }}>
                                <b>Save</b>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}


export default EditProfile;