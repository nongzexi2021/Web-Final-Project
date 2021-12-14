import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const API_URL = 'http://localhost:4000'

const Login = () => {
    const navigate = useNavigate()

    const [user, setUser] = useState({})
    const login = () => {
        fetch(`${API_URL}/api/login`, {
            method: 'POST',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(res=> res.json())
            .then(json => {
                navigate("/profile")
        })
            .catch(() => {})
    }
    return (
        <div className="container d-flex">
            <div className="row w-100 justify-content-center">
                <div className="col-4" style={{verticalAlign: "center"}}>
                    <h1 >Login</h1>
                    <input
                        value={user.username}
                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                        placeholder="username"
                        className="form-control my-3" />
                    <input
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        placeholder="password"
                        type="password"
                        className="form-control my-3"/>
                    <button
                        className="btn btn-primary float-end"
                        onClick={login}>
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Login

// import { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { findAllUsers, loginStatus } from '../service/LoginService'
//
// const LogIn = () => {
//     const allUsers = useSelector(state => state.loginReducer)
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//
//     const dispatch = useDispatch()
//     useEffect(() => findAllUsers(dispatch), [])
//     const loginClickHandler = () => {
//         const filter_result = allUsers.filter((x) => {
//             return x.email === email
//         })
//         let flags = false;
//         if(filter_result.length !== 0 && filter_result[0].password === password){
//             flags = true;
//         }
//         const newStatus = { ...filter_result[0], loginStatus: flags }
//         loginStatus(dispatch, newStatus)
//     }
//
//     return (
//         <div className="vh-100">
//
//
//             <div className="container-fluid h-custom">
//                 <div className="row d-flex justify-content-center align-items-center h-100">
//                     <div className="col-md-9 col-lg-6 col-xl-5">
//                         <img src="https://images.pexels.com/photos/6177649/pexels-photo-6177649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
//                              className="img-fluid image-blurred-edge"
//                              alt="Sample image"/>
//                     </div>
//                     <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
//                         <form>
//                             <div className="form-outline mb-4">
//                                 <input type="email" className="form-control form-control-lg"
//                                        placeholder="Enter a valid email address"
//                                        onChange={e => setEmail(e.target.value)}/>
//                                 <label className="form-label" htmlFor="form3Example3">Email address</label>
//                             </div>
//
//                             <div className="form-outline mb-3">
//                                 <input type="password" className="form-control form-control-lg"
//                                        placeholder="Enter password"
//                                        onChange={e => setPassword(e.target.value)}/>
//                                 <label className="form-label" htmlFor="form3Example4">Password</label>
//                             </div>
//                             <div className="text-center text-lg-start mt-4 pt-2">
//
//                                 <button type="button" className="btn btn-primary btn-lg"
//                                         style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
//                                         onClick={loginClickHandler}>
//                                     Login
//                                 </button>
//                                 <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
//                                                                                                       className="link-danger">Register</a>
//                                 </p>
//                             </div>
//
//                         </form>
//                     </div>
//                 </div>
//             </div>
//             <div
//                 className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
//                 <div className="text-white mb-3 mb-md-0">
//                     Copyright © 2020. All rights reserved.
//                 </div>
//
//                 <div>
//                     <a href="#!" className="text-white me-4">
//                         <i className="fab fa-facebook-f"></i>
//                     </a>
//                     <a href="#!" className="text-white me-4">
//                         <i className="fab fa-twitter"></i>
//                     </a>
//                     <a href="#!" className="text-white me-4">
//                         <i className="fab fa-google"></i>
//                     </a>
//                     <a href="#!" className="text-white">
//                         <i className="fab fa-linkedin-in"></i>
//                     </a>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default LogIn