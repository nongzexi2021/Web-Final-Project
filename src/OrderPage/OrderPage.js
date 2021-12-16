import React, {useState} from "react";
import {Link} from "react-router-dom";

// let[order, setOrder] = useState([])
//
// const getOrders = () => {
//     fetch(`http://localhost:4000/api/profile`)
//         .then(res => res.json())
//         .then(order => setOrder(order.asBuyer))
//     }


const OrderPage = () =>{
    let [comment, setComment] = useState("");
    console.log(comment, "comment")

    return(
        <>
            <div className='container'>
                <img style={{ width: '80px', marginRight: '20px', marginLeft: '20px' }}
                     src="https://icons-for-free.com/iconfiles/png/512/cat-131996349058051117.png"/>
                <h3>Your Orders</h3>


                <div className='list-group-item'>
                    <div className='row'>
                        <div className='col-8'>
                            <div className='row'>
                                <div className='col-3'>
                                    Order Place By User
                                </div>
                                <div className='col-3'>
                                    Total
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-3'>
                                    Zexi Nong
                                </div>
                                <div className='col-3'>
                                    $199
                                </div>

                            </div>
                        </div>

                        <div className='col-4'>
                            <div >
                                Order Number
                            </div>
                            <Link path to ='/product'>
                                Order Details
                            </Link>

                        </div>




                    </div>
                </div>

                <div className='list-group-item'>
                    <div className='row'>
                        <div className='col-3'>
                            <img src={"https://cdn-images.farfetch-contents.com/17/53/64/32/17536432_37072288_1000.jpg"} style={{height:250,width:200}}/>
                        </div>
                        <div className='col-5 mt-5'>
                            Product Title
                        </div>
                        <div className={"col-3 "}>

                            <br/>
                            <button className='btn btn-outline-secondary fw-bold mt-2 ' style={{width:160, height:70}}>
                                Cancel the Item
                            </button>
                        </div>
                    </div>
                    <div>
                        <textarea onChange={(e) => setComment(e.target.value)}>

                        </textarea>
                        <br/>
                        <button className='btn btn-outline-secondary fw-bold mt-3 ms-5'>
                            Comment
                        </button>
                    </div>




                </div>
            </div>

        </>
    );
}


export default OrderPage;