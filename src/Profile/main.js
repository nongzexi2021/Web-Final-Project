import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import Profile from "./index";
import {getCurrentProfile} from "../service/profileService";

const selectAllProfile = (state) => state.profile.profile;
const Main = () => {
    const profile = useSelector(selectAllProfile);
    const dispatch = useDispatch();
    useEffect(() => getCurrentProfile(dispatch), [])
    return (
        <div>
            {
                profile.map(profile =>
                    <Profile profile={profile}/>
                )
            }
        </div>
    );
}
export default Main;