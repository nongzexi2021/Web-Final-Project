import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {updateCurrentProfile} from "../service/profileService";

const EditItem = ({profile})=>{
    const dispatch = useDispatch();
    const [localProfile, setLocalProfile] = useState(profile);

    const saveClickHandler = () => {
        const _profile = {...localProfile, photo: localProfile.photo, username: localProfile.username,
            identity: localProfile.identity, selled: localProfile.selled, bought: localProfile.bought,
            comment: localProfile.comment, name: localProfile.name, email: localProfile.email,
            phone: localProfile.phone, location: localProfile.location};

        updateCurrentProfile(dispatch, _profile);
    }
    const saveClickXHandler = () => {
        dispatch({
            type: 'discard-change'
        })
    }

    const handleChange = (newProfile) =>
        setLocalProfile(newProfile);

    return (
        <>
            <div className="container">
                <div className="row gutters">
                    <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                        <div className="card h-100">
                            <div className="card-body">
                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <h6 className="mb-2 text-primary">Personal Details</h6>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="fullName">Username</label>
                                            <input onChange={(event) =>
                                                handleChange({...localProfile, username: event.target.value})}
                                                type="text" className="form-control" id="fullName"
                                                   placeholder="Username" value={localProfile.username}/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="eMail">Name</label>
                                            <input onChange={(event) =>
                                                handleChange({...localProfile, name: event.target.value})}
                                                type="email" className="form-control" id="eMail"
                                                   placeholder="Name"
                                                   value={localProfile.name}/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="phone">Email</label>
                                            <input onChange={(event) =>
                                                handleChange({...localProfile, email: event.target.value})}
                                                   type="text" className="form-control" id="phone"
                                                   placeholder="Email"
                                                    value = {profile.email}/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="website">Phone</label>
                                            <input onChange={(event) =>
                                                handleChange({...localProfile, phone: event.target.value})}
                                                type="url" className="form-control" id="website"
                                                   placeholder="Phone Number"
                                                   value = {profile.phone}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <h6 className="mt-3 mb-2 text-primary">Address</h6>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="Street">Location</label>
                                            <input onChange={(event) =>
                                                handleChange({...localProfile, location: event.target.value})}
                                                   type="name" className="form-control" id="Street"
                                                   placeholder="Location"
                                            value = {localProfile.location}/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">

                                            <br/>
                                            <Link to="/profile">
                                            <button type="button" id="submit" name="submit"
                                                    className="btn btn-primary" onClick={saveClickHandler}>Update
                                            </button>
                                            </Link>
                                            <Link to="/profile">
                                            <button type="button" id="submit" name="submit"
                                                    className="btn btn-secondary" onClick={saveClickXHandler}>Cancel
                                            </button>
                                            </Link>

                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default EditItem;