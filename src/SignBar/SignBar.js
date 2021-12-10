import React from "react";
import {Link} from "react-router-dom";

const SignBar = () => {
    return (
        <div className="container">
            <div className="row">

                <div className="col-3">
                            Hi
                    <Link to="">
                        <span className="ms-2 me-2">
                            Sign
                        </span>
                    </Link>
                             or
                    <Link to="">
                        <span className="ms-2">
                            Sign up
                        </span>
                    </Link>
                </div>
                <div className=" col">
                    <span className="float-end">
                        <button className="badge rounded-pill bg-primary me-3">
                                     Sell
                        </button>

                        <Link to="">
                            <span className="me-2 text-black ">
                                Watch List
                            </span>
                        </Link>


                        <Link to="">
                            <span className='me-3 text-black'>
                                My E-bay
                            </span>
                        </Link>
                        <span className='me-2'>
                            <i className="fas fa-bell "></i>
                        </span>
                        <Link to="">
                            <i className="fas fa-shopping-cart text-black "></i>
                        </Link>


                    </span>
                </div>
            </div>
        </div>


    )
};

export default SignBar;