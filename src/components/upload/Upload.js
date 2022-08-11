import React from "react";
import "./Upload.css"
import Navbar from "../navbar/Nav2";


const Upload = () => {
    return (
        <>
            <Navbar />
            <div className=" mt-5 mb-5">
                <div className="file-upload">
                    <button
                        className="file-upload-btn"
                        type="button"
                        onclick="$('.file-upload-input').trigger( 'click' )"
                    >
                        Add File
                    </button>
                    <div className="image-upload-wrap">
                        <input
                            className="file-upload-input"
                            type="file"
                            onchange="readURL(this);"
                            accept="image/*"
                        />
                        <div className="drag-text">
                            <h3>select or drop a video or photo</h3>
                        </div>
                    </div>
                    <div className="file-upload-content">
                        <img className="file-upload-image" src="#" alt="your image" />
                        <div className="image-title-wrap">
                            <button type="button" onclick="removeUpload()" className="remove-image">
                                Remove <span className="image-title">Uploaded Image</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <label>
                        <h4><b>Tags:</b></h4>
                        <input type="text" />
                    </label>
                    <label>
                        <h4><b>Location:</b></h4>
                        <input type="text" />
                    </label>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                </div>
            </div>
        </>
    )
}




export default Upload; 