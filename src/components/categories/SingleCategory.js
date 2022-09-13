import React from "react";
import { Link , useParams } from "react-router-dom";
import Nav1 from "../navbar/Nav1";
import { useEffect, useState } from "react";
import { useRequest } from "../hooks/useRequest";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import CategoryImage from "../categoryImage/CategoryImage";


const Home = () => {
    const [categories, setCategories] = useState([]);
    const sendRequest = useRequest();
    const [likes, setLikes] = useState([]);
    const [saves, setSaves] = useState([]);
    const { id } = useParams()

useEffect(() => {
    sendRequest(
        process.env.REACT_APP_API_URL + `/files/bycategory/${id}`,
            {},
            {},
            {
                auth: true
            },
            "GET"
        ).then((response) => {
            if (response?.success) {
                setCategories(response.data.category);
                setLikes(response.data.likes);
                setSaves(response.data.saves);
            }
        });
}, []);



    return (
        <div>
            <Nav1 />
            <div>
                <div className="herro">
                    <div className="content">
                        <h1>The best free stock photos and videos</h1>
                    </div>
                </div>
                    <div>
                        <ul className="nav justify-content-center mt-3 mb-2">
                            <Link
                                to="/"
                                className="nav-item"
                                style={{ textDecoration: "none" }}
                            >
                                <li className="nav-link" style={{ color: "black" }}>
                                    <b>
                                        <h4>
                                            <u>Home</u>
                                        </h4>
                                    </b>
                                </li>
                            </Link>
                            <Link
                                to="/videos"
                                className="nav-item"
                                style={{ textDecoration: "none" }}
                            >
                                <li className="nav-link" style={{ color: "black" }}>
                                    <b>
                                        <h4>
                                            <u>Videos</u>
                                        </h4>
                                    </b>
                                </li>
                            </Link>
                            <Link
                                to="/categories"
                                className="nav-item"
                                style={{ textDecoration: "none" }}
                            >
                                <li className="nav-link" style={{ color: "black" }}>
                                    <b>
                                        <h4>
                                            <u>Categories</u>
                                        </h4>
                                    </b>
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <hr></hr>
            </div>
            <div>
                <li href="#" className="prev">
                    &lt;
                </li>
                <li href="#" className="next">
                    &gt;
                </li>
                <h1 className="d-flex justify-content-center">Free Stock Photos</h1>
                <Box sx={{ width: "96%", height: "100%", boxSizing: "border-box", marginX: "2%" }}>
                    <ImageList variant="masonry" cols={3} gap={8}>
                        {categories && categories.length ? (
                            categories.map((file, i) => {
                                return (
                                    <CategoryImage file={file} key={i} likes={likes} saves={saves} />
                                );
                            })
                        ) : (
                            <p>No categories available</p>
                        )}
                    </ImageList>
                </Box>
            </div>
        </div>
    );
};
export default Home;