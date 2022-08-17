import React from "react"
import {  useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
// import { AuthContext } from "../context/auth"
import { useRequest } from "../hooks/useRequest"
import Nav2 from "../navbar/Nav2";

const Password = () => {
    const navigate = useNavigate()
    const sendRequest = useRequest()
    // const auth = useContext(AuthContext)
    // const [user, setUser] = useState({password: auth?.user.password})
    // const crrPaswordRef = useRef()
    // const newPasswordRef = useRef()


    
    const [password, setPassword] = useState({
        currentPassword: "",
        newPassword: ""
        })
        
        
        const handleInputChange = (e) => {
            password[e.target.name] = e.target.value;
            };



    const changePass = () => {
        console.log(password)
        sendRequest(`${process.env.REACT_APP_API_URL}/users/password`, {}, {
            currentPassword: password.currentPassword,
            newPassword: password.newPassword,
        }, {
            type: 'json',
            auth: true
        }, 'put')
            .then((response) => {
                window.alert(response?.messages)
                if (response?.success?.join(' ')) {
                    navigate('/password')
                }
            });
        }
    return(
        <>
            <Nav2 />
            <div className="d-flex justify-content-center mb-5 mt-5" >
                    <h4>
                        <b>
                            Change your password
                        </b>
                    </h4>
                </div>
                <div className="card ">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-12 d-flex justify-content-center">
                                <div className="row"><div className="col-md-12 ">
                                    <div className="form-group" >
                                        <label className="d-flex justify-content-center">
                                                <b>Current password </b>
                                        </label>
                                        <input className="form-control mt-2" name="currentPassword" onChange={handleInputChange} required="required" maxLength="255" type="password" style={{backgroundColor: "#d5ecff"}} />
                                    </div>
                                    <div className="form-group mt-4">
                                        <label className="d-flex justify-content-center">
                                                <b>New password </b>
                                        </label>
                                        <input className="form-control mt-2" name="newPassword" onChange={handleInputChange} required="required" maxLength="255" type="password" style={{backgroundColor: "#d5ecff"}}/>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mb-4 mt-2">
                        <button type="submit" className="btn btn-info btn-save-form " onClick={changePass}  style={{ backgroundColor: "#012848", color : "white" }}>
                            <b>Save</b>
                        </button>
                    </div>
                </div>
        </>
    )
}

export default Password