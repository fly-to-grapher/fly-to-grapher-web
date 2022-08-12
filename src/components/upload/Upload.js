import React from "react";
import "./Upload.css"
import Nav2 from "../navbar/Nav2";


const Upload = () => {
    return (
        <>
            <Nav2 />
            <div className="container-fluid mt-5 mb-5 d-flex justify-content-around align-items-center">
                <div className="file-upload">
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
                    <button
                        className="file-upload-btn mt-3"
                        type="button"
                        onclick="$('.file-upload-input').trigger( 'click' )"
                    >
                        Add File
                    </button>
                    <div className="file-upload-content">
                        <img className="file-upload-image" src="#" alt="your image" />
                        <div className="image-title-wrap">
                            <button type="button" onclick="removeUpload()" className="remove-image">
                                Remove <span className="image-title">Uploaded Image</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end mt-5">
                    <form>
                        <div className="row mb-3">
                            <label for="location" className="col-sm-2 col-form-label">Location</label>
                            <div className="col-sm-7">
                                <input type="text" className="form-control" id="location" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label">Tags</label>
                            <div className="col-sm-7">
                                <input type="text" className="form-control" id="inputEmail3" />
                            </div>
                        </div>
                        <div className="row ">
                        <b>
                            <label className="d-flex justify-content-around align-items-center">Select category</label>
                        </b>
                            <div className="container-fluid mt-2 mb-5 d-flex justify-content-around align-items-center">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                    <label className="form-check-label" for="gridCheck1">
                                        Example checkbox
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                    <label className="form-check-label" for="gridCheck1">
                                        Example checkbox
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                    <label className="form-check-label" for="gridCheck1">
                                         checkbox
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                    <label className="form-check-label" for="gridCheck1">
                                        Example checkbox
                                    </label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}




export default Upload; 