import React from "react";
import Nav2 from "../navbar/Nav2";
import Divider from '@mui/material/Divider';
import { Link } from "react-router-dom";



const Categories = () => {
    return (
        <>
            <Nav2 />
            <din>
                <div className="d-flex justify-content-center mt-5 mb-4">
                    <h2>
                        <b>Popular Searches</b>
                    </h2>
                </div>
                <div className="d-flex justify-content-center mt-4 mb-4">
                    <h5>
                        The most popular search terms on Fly To Grapher
                    </h5>
                </div>
                <Divider />
                <div className="d-flex justify-content-center mt-4 mb-4">
                    <div className="card bg-dark text-white" style={{ width: "300px", height: "250px" }}>
                        <Link to="/s-category">
                            <img src="https://i2.wp.com/www.nettecode.com/wp-content/uploads/2017/03/react_logo.png?fit=720%2C340&ssl=1" className="card-img" alt="..." style={{ width: "aotu", height: "aotu" }} />
                            <div className="card-img-overlay d-flex justify-content-center">
                                <h5 className="card-title align-self-center" style={{ color: "white" }}>Category Name</h5>
                            </div>
                        </Link>
                    </div>
                </div>
            </din>
        </>
    )
}




export default Categories; 