import React from 'react';
import {useState, useEffect} from "react";


const options = [
    '1', '2', '3', '4','5','6','7','8','9','10','10+'
]
const Cart = () => {
    const [results, setResults] = useState([]);

    const findProduct = () =>
        fetch(`https://www.omdbapi.com/?s=batman&apikey=73e6a391`).then(res => res.json())
            .then(results => setResults(results.Search))
    useEffect(findProduct, []);

    return (
        <>


            <div className='row'>
                <div className='col-8'>
                    <div className="container ">


                        <div className='list-group mt-3'>

                            <h4>
                                Shopping Cart ( 10 Items )
                            </h4>


                            {
                                results.map(result =>
                                    <div className='list-group-item card'>


                                        <div className='row'>
                                            <div className='col-4'>
                                                <img src={result.Poster}  className="img-fluid objectFit" />
                                            </div>
                                            <div className='col-2 me-2'>
                                                <span style={{
                                                    fontWeight: "bold",
                                                    fontSize: "large",
                                                    textDecorationLine: "underline"
                                                }}>
                                                    {result.Title}
                                                </span>
                                                <br/>
                                                <span style={{fontSize: "medium", fontWeight: "normal"}}>
                                                    New!
                                                </span>
                                            </div>
                                            <div className='col-2'>
                                        <span  style={{fontWeight: "bold", fontSize: "large"}}>
                                                Qty
                                            <select className="role ms-2" style={{ height: '25px' , width:'50px' }}>
                                                {options.map(option => {
                                                    return (
                                                        <option value="" >
                                                            {option}
                                                        </option>)
                                                })
                                                }


                                            </select>

                                            <button className="btn-primary  small ms-2   rounded " style={{height:"25px",fontSize:"small", fontWeight:"bold"}}>

                                                        remove

                                            </button>
                                        </span>

                                                <br/>
                                                <span style={{ fontSize: "small"}}>
                                            Standard Shipping
                                        </span>
                                            </div>
                                            <div className='col-2 float-end'>
                                         <span style={{fontWeight: "bold", fontSize: "large"}}>
                                                 $1999
                                         </span>
                                                <br/>
                                                <span style={{ fontSize: "small"}}>
                                                     Free Shipping!
                                                </span>
                                            </div>


                                        </div>


                                    </div>
                                )

                            }

                        </div>

                    </div>
                </div>
                <div className='col-4 mt-5 '>

                    <div className="card" style={{borderColor:" 2px solid darkgrey"}}>




                    <div className='card' >

                        <button className='btn-primary btn-group-sm card-body rounded-pill mt-4 mb-4 ms-4 me-4'>
                            Go To Check Out
                        </button>

                    </div>
                    <div className='row'>
                        <div className='col-3 '>
                            <span className='float-start ms-3 mt-3' style={{fontSize:"small"}}>
                                Items(10)
                            </span>
                            <span className='float-start ms-3 mb-3' style={{fontSize:"small"}}>
                                Shipping
                            </span>
                        </div>
                        <div className='col-6'>

                        </div>
                        <div className='col-3'>
                            <span className='float-end me-3 mt-3 ' style={{fontSize:"small"}}>
                                $1999
                            </span>

                            <span className=" float-end me-3" style={{fontSize:"small"}}>
                                Free
                            </span>
                        </div>
                    </div>

                </div>

                    <div className="card">
                        <div className='row'>
                            <div className="col-6">
                                <span className="float-start ms-2" style={{fontWeight:"bold",fontSize:"large"}}>
                                    Total:
                                </span>
                            </div>
                            <div className="col-6">
                                <span className="float-end me-2" style={{fontWeight:"bold",fontSize:"large"}}>
                                    $19999
                                </span>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


        </>
    );


}

export default Cart;