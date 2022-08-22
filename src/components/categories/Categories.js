import React from "react";
import Nav2 from "../navbar/Nav2";
import Divider from '@mui/material/Divider';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRequest } from "../hooks/useRequest";


const Categories = () => {

    const [categories, setCategories] = useState([]);
    const sendRequest = useRequest();

    useEffect(() => {
        sendRequest(
            process.env.REACT_APP_API_URL + "/categories",
            {},
            {},
            {
                auth: true
            },
            "GET"
        ).then((response) => {
            if (response?.success) {
                setCategories(response.data);
            }
        });
    }, []);




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
                    <div className="d-flex flex-wrap justify-content-between ">
                            {
                                categories && categories.length ? (
                                categories.map((category, i) => {
                                return (
                                <Link to={`/s-category/${i}`}>
                                            <div key={i} className="card bg-dark text-white my-2 col-md-4 col-lg-3" style={{ width: "300px", height: "250px" }}>
                                                    <img src={category.picture} className="card-img" alt="..." style={{ width: "aotu", height: "aotu" }} />
                                                <div className="card-img-overlay d-flex justify-content-center">
                                                        <h5 className="card-title align-self-center" style={{ color: "white" }}>{category.name}</h5>
                                                </div>
                                            </div>
                                </Link>
                        );
                            })
                        ) : (
                            <p>No categories available</p>
                        )}
                    </div>
            </din>
        </>
    )
}




export default Categories; 