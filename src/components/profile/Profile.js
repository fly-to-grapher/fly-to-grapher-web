import React from "react";
import Nav2 from "../navbar/Nav2";


const profile = () => {
    return (
        <>
            <Nav2 />
            <div>
                <div className="d-flex justify-content-center mb-5 mt-5" >
                    <h4>
                        <b>
                            Edit your profile
                        </b>
                    </h4>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="row"><div className="col-md-12">
                                    <div className="form-group">
                                        <label>
                                             <b>Name :</b>
                                        </label>
                                        <input name="data[User][name]" className="form-control" required="required" maxlength="255" type="text" />
                                    </div>
                                    <div>
                                        <label>
                                            <b>Username :</b>
                                        </label>
                                        <input name="data[User][username]" className="form-control" required="required" maxlength="150" type="text" />
                                    </div>
                                    <div>
                                        <label>
                                            <b>Email :</b>
                                        </label>
                                        <input name="data[User][email]" className="form-control" required="required" maxlength="150" type="text" />
                                    </div>
                                    <div className="form-group">
                                        <label>
                                            <b>Location :</b>
                                        </label>
                                        <input name="data[User][location]" className="form-control" required="required" maxlength="150" type="text" />
                                    </div>
                                    <div className="form-group">
                                        <label>
                                            <b>Password :</b>
                                        </label>
                                        <input name="data[User][password]" className="form-control" required="required" maxlength="150" type="password" />
                                    </div>
                                    <div className="form-group">
                                        <label>
                                            <b>Bio :</b>
                                        </label>
                                        <textarea name="data[User][bio]" className="form-control" required="required" cols="30" rows="6" >
                                        </textarea>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mb-5 mt-2">
                        <button type="submit" className="btn btn-info btn-save-form " style={{ backgroundColor: "#012848", color : "white" }}>
                            <b>Save</b>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default profile;