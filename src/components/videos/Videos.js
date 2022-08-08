import React from "react";
import { Link } from "react-router-dom";



const Videos = () => {
    return (
        <div>
            <div>
                {/* Start hero*/}
                <div className="herro">
                    <div className="content">
                        {/*     <h1>Royalty Free Stock Photos</h1> */}
                        <h1>The best free stock photos and videos</h1>
                        <input type="search" className="find" />
                    </div>
                </div>
                {/* End hero*/}
                <navbar>
                    <div>
                        <ul className="nav justify-content-center mt-3 mb-2">
                            <Link to="/" className="nav-item" style={{ textDecoration: 'none' }}>
                                <a className="nav-link" style={{ color: "black" }}><b><h4><u>Home</u></h4></b></a>
                            </Link>
                            <Link to="/videos" className="nav-item" style={{ textDecoration: 'none' }}>
                                <a className="nav-link" style={{ color: "black" }}><b><h4><u>Videos</u></h4></b></a>
                            </Link>
                            <Link to="/categories" className="nav-item" style={{ textDecoration: 'none' }}>
                                <a className="nav-link" style={{ color: "black" }}><b><h4><u>Categories</u></h4></b></a>
                            </Link>


                            {/* <li className="active">Home</li>
          <li className="active">Videos</li>
          <li className="active">Categories</li> */}
                        </ul>
                    </div>
                </navbar>
            </div>
            <div>
                <a href="#" className="prev">
                    &lt;
                </a>
                <a href="#" className="next">
                    &gt;
                </a>
                <h1 className="d-flex justify-content-center">Free Stock Videos</h1>
            </div>
        </div>
    )
}


export default Videos;