import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";


const SignBar = () => {
    const state = useSelector((state)=>state.cart);
    let initial = 0;
    for(let i=0; i < state.length; i++) {
        initial += state[i].qty;
    }


    return (
        <div className="container">
            <div className="row">

                <div className="col-3">
                            Hi

                    <Link to="/login">
                        <button className="badge rounded-pill bg-primary">
                            Log in
                        </button>
                    </Link>

                             or
                    <Link to="/register">
                        <button className="badge rounded-pill bg-primary">
                            Sign up
                        </button>
                    </Link>
                    <Link to="/products"  className="btn btn-outline-dark">
                        <span>
                            Products
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
                        <Link to="/cart">
                            <i className="fas fa-shopping-cart text-black "></i> cart({initial})
                        </Link>
                    </span>
                </div>
            </div>
        </div>


    )
};

export default SignBar;