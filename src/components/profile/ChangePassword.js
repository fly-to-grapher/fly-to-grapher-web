import React from "react"
import {  useState, useRef, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/auth"
import { useRequest } from "../hooks/useRequest"
import Nav2 from "../navbar/Nav2";

const Password = () => {
    return(
        <>
            <Nav2 />
                <div className="form-group">
                    <label>
                        <b>Current password :</b>
                    </label>
                    <input name="data[User][crrpassword]" className="form-control" required="required" maxlength="150" type="password" />
                </div>
                <div className="form-group">
                    <label>
                        <b>New password :</b>
                    </label>
                    <input name="data[User][newpassword]" className="form-control" required="required" maxlength="150" type="password" />
                </div>
        </>
    )
}

export default Password