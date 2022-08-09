import React from "react";
import "./Upload.css"



const Upload = () => {
    return (
        <div className="mt-5 mb-5 ms-20" >
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
                <div className="file-upload-content">
                    <img className="file-upload-image" src="#" alt="your image" />
                    <div className="image-title-wrap">
                        <button type="button" onclick="removeUpload()" className="remove-image">
                            Remove <span className="image-title">Uploaded Image</span>
                        </button>
                    </div>
                </div>
                <button
                    className="file-upload-btn mt-3"
                    type="button"
                    onclick="$('.file-upload-input').trigger( 'click' )"
                >
                    Add File
                </button>
            </div>
        </div>
    )
}




export default Upload; 