import {useEffect, useState} from "react";

import { useNavigate } from 'react-router-dom'

const API_URL = 'http://localhost:4000'

const ProfileX = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const getProfile = () => {
        fetch(`${API_URL}/api/profile`, {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.json())
            .then(user => {
                setUser(user);
            }).catch(e => navigate('/login'));
    }
    const logout = () => {
        fetch(`${API_URL}/api/logout`, {
            method: 'POST',
            credentials: 'include'
        }).then(res => navigate('/'));
    }
    useEffect(getProfile, [navigate]);
    return(
        <div>
            <h1>Profile</h1>
            <input
                value={user.username}
                onChange={(e) => setUser({...user, username: e.target.value})}
                placeholder="username"
                className="form-control"/>
            <button
                onClick={logout}
                className="btn btn-danger">
                Logout
            </button>
        </div>
    );
};
export default ProfileX;