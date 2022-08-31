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
                setCategories(response.data);
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
                                <a className="nav-link" style={{ color: "black" }}>
                                    <b>
                                        <h4>
                                            <u>Home</u>
                                        </h4>
                                    </b>
                                </a>
                            </Link>
                            <Link
                                to="/videos"
                                className="nav-item"
                                style={{ textDecoration: "none" }}
                            >
                                <a className="nav-link" style={{ color: "black" }}>
                                    <b>
                                        <h4>
                                            <u>Videos</u>
                                        </h4>
                                    </b>
                                </a>
                            </Link>
                            <Link
                                to="/categories"
                                className="nav-item"
                                style={{ textDecoration: "none" }}
                            >
                                <a className="nav-link" style={{ color: "black" }}>
                                    <b>
                                        <h4>
                                            <u>Categories</u>
                                        </h4>
                                    </b>
                                </a>
                            </Link>
                        </ul>
                    </div>
            </div>
            <div>
                <a href="#" className="prev">
                    &lt;
                </a>
                <a href="#" className="next">
                    &gt;
                </a>
                <h1 className="d-flex justify-content-center">Free Stock Photos</h1>
                <Box sx={{ width: "96%", height: "100%", boxSizing: "border-box", marginX: "2%" }}>
                    <ImageList variant="masonry" cols={3} gap={8}>
                        {categories && categories.length ? (
                            categories.map((file, i) => {
                                return (
                                    <CategoryImage file={file} i={i} />
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

// import React from "react";
// import { Link , useParams } from "react-router-dom";
// import Nav1 from "../navbar/Nav1";
// import { useEffect, useState } from "react";
// import { useRequest } from "../hooks/useRequest";


// const SingleCategory = () => {

//     // const [categories, setCategories] = useState([]);
//     // const sendRequest = useRequest();
// 	// const { id } = useParams()


//     // useEffect(() => {
//     //     sendRequest(
//     //         process.env.REACT_APP_API_URL + `/categories/bycategory/${id}`,
//     //         {},
//     //         {},
//     //         {
//     //             auth: true
//     //         },
//     //         "GET"
//     //     ).then((response) => {
//     //         if (response?.success) {
//     //             setCategories(response.data);
//     //         }
//     //     });
//     // }, []);


//     return (
//         <>
//             <Nav1 />
//             <div>
//                 <div>
//                     <div className="herro">
//                         <div className="content">
//                             <h1>The best free stock photos and videos</h1>
//                         </div>
//                     </div>
//                     <navbar>
//                         <div>
//                             <ul className="nav justify-content-center mt-3 mb-2">
//                                 <Link to="/" className="nav-item" style={{ textDecoration: 'none' }}>
//                                     <a className="nav-link" style={{ color: "black" }}><b><h4><u>Home</u></h4></b></a>
//                                 </Link>
//                                 <Link to="/videos" className="nav-item" style={{ textDecoration: 'none' }}>
//                                     <a className="nav-link" style={{ color: "black" }}><b><h4><u>Videos</u></h4></b></a>
//                                 </Link>
//                                 <Link to="/categories" className="nav-item" style={{ textDecoration: 'none' }}>
//                                     <a className="nav-link" style={{ color: "black" }}><b><h4><u>Categories</u></h4></b></a>
//                                 </Link>
//                             </ul>
//                         </div>
//                     </navbar>
//                 </div>
//                 <div>
//                     <a href="#" className="prev">
//                         &lt;
//                     </a>
//                     <a href="#" className="next">
//                         &gt;
//                     </a>
//                     {/* {
//                                 categories && categories.length ? (
//                                 categories.map((category, i) => {
//                                 return (
//                                     <>
//                                         <h1 className="d-flex justify-content-center">{category.name}</h1>
                                        
//                                     </>
//                                     );
//                             })
//                         ) : (
//                             <p>No categories available</p>
//                         )} */}
//                 </div>
//                 <main className="container">
//                     <div>
//                         <img
//                             src="https://i.postimg.cc/MGN0PM10/pexels-kelvin-valerio-617278.jpg"
//                             alt=""
//                         />
//                     </div>
//                     <div className="vertical">
//                         <img
//                             src="https://i.postimg.cc/1RcZhLb8/pexels-maksim-goncharenok-4596641.jpg"
//                             alt=""
//                         />
//                     </div>
//                     <div className="horizontal">
//                         <img
//                             src="https://i.postimg.cc/YStVt9FZ/pexels-matheus-bertelli-573298.jpg"
//                             alt=""
//                         />
//                     </div>
//                     <div>
//                         <img
//                             src="https://i.postimg.cc/bJ6n560d/a-tattooed-hand-doing-the-sign-for-i-love-you.jpg"
//                             alt=""
//                         />
//                     </div>
//                     <div>
//                         <img
//                             src="https://i.postimg.cc/PJgCG0Cf/pexels-wouter-de-jong-571169.jpg"
//                             alt=""
//                         />
//                     </div>
//                     <div className="big">
//                         <img
//                             src="https://i.postimg.cc/K8P4YTdz/pexels-life-of-wu-3381013.jpg"
//                             alt=""
//                         />
//                     </div>
//                     <div>
//                         <img src="https://i.postimg.cc/rFXkR5tt/pic7.png" alt="" />
//                     </div>
//                     <div className="vertical">
//                         <img src="https://source.unsplash.com/random" alt="" />
//                     </div> 
//                     <div>
//                         <img src="https://picsum.photos/id/29/800" alt="" />
//                     </div>
//                     <div className="horizontal">
//                         <img src="https://picsum.photos/id/10/800" alt="" />
//                     </div>
//                     <div>
//                         <img src="https://picsum.photos/id/11/800" alt="" />
//                     </div>
//                     <div className="big">
//                         <img
//                             src="https://i.postimg.cc/FRY8f6KQ/pexels-andrea-piacquadio-3776169.jpg"
//                             alt=""
//                         />
//                     </div>
//                     <div>
//                         <img
//                             src="https://picsum.photos/id/1/200/300
// "
//                             alt=""
//                         />
//                     </div>
//                     <div className="horizontal">
//                         <img
//                             src="https://source.unsplash.com/user/erondu/daily
// "
//                             alt=""
//                         />
//                     </div>
//                     <div>
//                         <img
//                             src="https://source.unsplash.com/weekly?landscape
// "
//                             alt=""
//                         />
//                     </div>
//                     <div className="big">
//                         <img
//                             src="https://i.postimg.cc/cHyKbrbg/pexels-aleksandar-pasaric-325185.jpg
// "
//                             alt=""
//                         />
//                     </div>
//                     <div className="explore d-flex justify-content-center"> load more </div>
//                 </main>
//             </div>
//         </>
//     )
// }


// export default SingleCategory;