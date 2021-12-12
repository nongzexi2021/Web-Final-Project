import React from "react";
import {useDispatch, useSelector} from "react-redux";
// import {delItem}


const Cart = () => {
    const state = useSelector((state) => state.add)
    const dispatch = useDispatch()

    const cartItems = (cartItem) => {
        return(
            <div className="px-4">
                <div className="container">
                    <button className="btn"></button>
                </div>
            </div>
        );
    }

    return (
        <>
            {state.length !== 0 && state.map(cartItems)}
        </>
    );
}