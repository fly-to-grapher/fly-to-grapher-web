import React from "react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRequest } from "../hooks/useRequest";
import "./Upload.css";
import Nav2 from "../navbar/Nav2";

const Upload = () => {
  const navigate = useNavigate();
  const fileRef = useRef();
  const locationRef = useRef();
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [picture, setPicture] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTagToggle = (e) => {
    setSelectedTags(e);
  };
  const handleCategoryToggle = (e) => {
    const categoriesClone = [...selectedCategories];
    if (e.target.checked) {
      categoriesClone.push(e.target.value);
    } else {
      categoriesClone.splice(categoriesClone.indexOf(e.target.value), 1);
    }
    setSelectedCategories(categoriesClone);
  };
  useEffect(() => {
    sendRequest(process.env.REACT_APP_API_URL + "/tags").then((response) => {
      response?.data.map((tag) => {
        tags.push({ value: tag.id, label: tag.name });
      });
    });
    sendRequest(process.env.REACT_APP_API_URL + "/categories").then(
      (response) => {
        setCategories(response?.data);
      }
    );
  }, []);

  const sendRequest = useRequest();

  const addFile = async () => {
    setLoading(true);
    const formdata = new FormData();
    formdata.append("location", locationRef.current.value);
    for (var i = 0; i < selectedCategories.length; i++) {
      formdata.append("categories[]", selectedCategories[i]);
    }
    for (var i = 0; i < selectedTags.length; i++) {
      formdata.append("tags[]", selectedTags[i].value);
    }
    formdata.append("file_name", fileRef.current.files[0]);
    await sendRequest(
      process.env.REACT_APP_API_URL + "/files/add",
      {},
      formdata,
      { auth: true },
      "post"
    ).then((response) => {
      window.alert(response?.messages?.join(" "));
      if (response?.success) {
        navigate("/myprofile");
      }
    });
    setLoading(false);
  };

  return (
    <>
      <Nav2 />
      <div className="d-flex justify-content-center mb-2 mt-5" >
                <h4>
                    <b>
                        Upload File
                    </b>
                </h4>
            </div>
            <hr className="mt-5"></hr>
      <div className="d-flex justify-content-center ">
        <div className=" d-flex justify-content-center ">
          {/* <div className="image-upload-wrap"> */}

          {/* <div className="drag-text">
                            <h3>select or drop a video or photo</h3>
                        </div> */}
          {/* </div> */}
          {/* {picture && <img src={picture.file_name}
                        style={{ position: "absolute", top: "8em", left: "15em" }} alt={fileRef.current.files[0].name} />} */}

          <div className="file-upload-content">
            <img className="file-upload-image" src="#" alt="your image" />
            <div className="image-title-wrap"></div>
          </div>
          <div className="d-flex offset-1 col-8 mt-3 ">
            <form>
              <div className="mb-3 d-flex justify-content-between align-items-center">
                <div>
                  <label
                    htmlFor="location"
                    className="col-sm-2 col-form-label"
                    placeholder="location"
                  >
                    <b>Location</b>
                  </label>
                </div>
                <div className="col-sm-9">
                  <input
                    placeholder="Type the location of the file"
                    type="text"
                    className="form-control"
                    id="location"
                    style={{ width: "15em" }}
                    ref={locationRef}
                  />
                </div>
              </div>
              <div className="">
                <label className="col-form-label">
                  <b>Select Category</b>
                </label>
                <div className="row mb-4">
                  {categories?.map((category, i) => {
                    return (
                      <div className="my-2 col-md-4 col-lg-3" key={i}>
                        <input
                          onChange={handleCategoryToggle}
                          type="checkbox"
                          value={category.id}
                          id={`category-${category.id}`}
                        />
                        <label htmlFor={`category-${category.id}`}>
                          {category.name}
                        </label>
                      </div>
                    );
                  })}
                </div>
                <input
                  className=" form-control mt-2"
                  ref={fileRef}
                  required="required"
                  maxLength="255"
                  type="file"
                  style={{ backgroundColor: "#d5ecff" }}
                  accept="image/* video/*"
                />

                <button
                  className="file-upload-btn mt-5 mb-5"
                  type="button"
                  onClick={addFile}
                  disabled={loading}
                >
                  {!loading ? (
                    <span>Add File</span>
                  ) : (
                    <div className="d-flex justify-content-evenly align-items-center">
                      <span>Uploading</span>
                      <div className="spinner-border" role="status" />
                    </div>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upload;
