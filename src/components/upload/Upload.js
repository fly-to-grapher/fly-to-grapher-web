import React from "react";
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useRequest } from "../hooks/useRequest";
// import makeAnimated from 'react-select/animated';
import Select from 'react-select';
import "./Upload.css"
import Nav2 from "../navbar/Nav2";


const Upload = () => {
    const navigate = useNavigate()
	const fileRef = useRef()
	const locationRef = useRef()
    // const animatedComponents = makeAnimated();
	const [tags, setTags] = useState([])
    let options = [];
	const [categories, setCategories] = useState([])
	const [selectedTags, setSelectedTags] = useState([])
	const [selectedCategories, setSelectedCategories] = useState([])
    const handleTagToggle = (e) => {
		const tagsClone = [...selectedTags]
		if (e.target.checked) {
			tagsClone.push(e.target.value)
		} else {
			tagsClone.splice(tagsClone.indexOf(e.target.value), 1)
		}
		setSelectedTags(tagsClone)
	}
	const handleCategoryToggle = (e) => {
		const categoriesClone = [...selectedCategories]
		if (e.target.checked) {
			categoriesClone.push(e.target.value)
		} else {
			categoriesClone.splice(categoriesClone.indexOf(e.target.value), 1)
		}
		setSelectedCategories(categoriesClone)
	}
    useEffect(() => {
		sendRequest(process.env.REACT_APP_API_URL + "/tags")
			.then((response) => {
				setTags(response?.data)
			})
		sendRequest(process.env.REACT_APP_API_URL + "/categories")
			.then((response) => {
				setCategories(response?.data)
			})
	}, [])

    useEffect(() => {
        tags?.map(tag => {
            options.push({value: tag.id, label: tag.name})
        })
    }, [tags])

	const sendRequest = useRequest()
    
    const addFile = () => {
		const formdata = new FormData();
		formdata.append('title', locationRef.current.value)
		for (var i = 0; i < selectedCategories.length; i++) {
			formdata.append('categories[]', selectedCategories[i])
		}
		for (var i = 0; i < selectedTags.length; i++) {
			formdata.append('tags[]', selectedTags[i])
		}
		formdata.append('file_name', fileRef.current.files[0])
		sendRequest(process.env.REACT_APP_API_URL + "/files/add", {}, formdata, { auth: true }, 'post')
			.then((response) => {
				window.alert(response?.messages?.join(' '))
				if (response?.success) {
					navigate('/profile')
				}
			})
	}

    return (
        <>
            <Nav2 />
            <div className="container-fluid mt-5 mb-5 d-flex justify-content-around align-items-center">
                <div className="col-6 file-upload">
                    <div className="image-upload-wrap">
                        <input
                            className="file-upload-input"
                            type="file"
                            ref={fileRef}
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
                        onclick={addFile}
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
                <div className="d-flex offset-1 col-5  mt-5">
                    <form>
                        <div className="mb-3 d-flex justify-content-between align-items-center">
                        <div>
                            <label for="location" className="col-sm-2 col-form-label" placeholder="location" ref={locationRef}><b>Location:</b></label>
                            </div>
                            <div className="col-sm-7">
                                <input type="text" className="form-control" id="location" style={{width: "15em"}}/>
                            </div>
                        </div>
                        <div className="mb-3 d-flex justify-content-between align-items-center">
                        <div>
                                    <label className="col-sm-2 col-form-label"><b>Tags: </b></label>
                                    </div>
                                    <Select className="col-sm-7 basic-multi-select"
                                        // closeMenuOnSelect={false}
                                        isMulti
                                        name="tags"
                                        options={options}
                                        classNamePrefix="select"
                                        width = "15em"
                                        // onChange={handleTagToggle}
                                        />
                        </div>
                        <div className="">
                            <b><label className="col-sm-3 col-form-label">Select category:</label></b>
                        {
									categories?.map((category, i) => {
										return (
											<div key={i} className='my-2 col-md-4 col-lg-3'>
												<input onChange={handleCategoryToggle} type='checkbox' value={category.id} id={`category-${category.id}`} />
												<label htmlFor={`category-${category.id}`}>{category.name}</label>
											</div>
										)
									})
								}
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}




export default Upload; 