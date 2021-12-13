import React from "react";
import {Link} from "react-router-dom";
const Profile = ({profile}) => {
    return(
        <>
            <div className="container emp-profile">
                <form method="post">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-img">
                                <img
                                    src={profile.photo}
                                    alt=""/>
                                <div className="file btn btn-lg btn-primary">
                                    Change Photo
                                    <input type="file" name="file"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="profile-head">
                                <h5>
                                    {profile.username}
                                </h5>
                                <h6>
                                    {profile.identity}
                                </h6>
                                <p className="proile-rating ">Selled: <span><a href="">{profile.selled}</a></span></p>
                                <p className="proile-rating">Bought: <span><a href="">{profile.bought}</a></span></p>
                                <p className="proile-rating">Comment: <span><a href="">{profile.comment}</a></span></p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            {/*<input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>*/}
                            <Link to="/editProfile">
                                <button className="profile-edit-btn">Edit profile</button>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-work">
                                <p>Selling item</p>
                                <a href="" className="boxhead a">Selling item 1</a><br/>
                                <a href="">Selling item 2</a><br/>
                                <a href="">Selling item 3</a>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li> Basic Information </li>
                                </ul>
                                <div className="tab-pane fade show active" id="home" role="tabpanel"
                                     aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>User Id</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{profile._id}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{profile.name}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{profile.email}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{profile.phone}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Location</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{profile.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </>

    )
}

export default Profile;