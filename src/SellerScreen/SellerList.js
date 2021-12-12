import React from "react";
import { useEffect, useState } from 'react'
import {Link} from "react-router-dom";

const SellerList = () => {
    const[results,setResults] = useState([]);
    const findProduct = () =>
        fetch(`https://www.omdbapi.com/?s=star&apikey=73e6a391`).then(res=>res.json())
            .then(results=>setResults(results.Search))
    useEffect(findProduct,[]);
    return(
        <>
            <div>
                <img src='https://media.wired.com/photos/5f2d7c2191d87e6680b80936/4:3/w_2132,h_1599,c_limit/Science_climatedesk_453801484.jpg'
                     style={{objectFit:'cover'}} width='100%' height={200}/>
            </div>

            <div className="mt-1">
                <span style={{fontWeight:"bold"}}>Store: 965 HotPot City</span>
            </div>
            <div className="mt-1">
                <span style={{fontWeight:"bold"}}>Rating  </span>
                <i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i
                    className="far fa-star"></i><i className="far fa-star"></i>
            </div>
            <div  className="row mt-2">
                {
                    results.map(result =>
                        <div key={result.imdbID} className="col-3 ">
                            <img src = {result.Poster} height={100} className="img-fluid product-display-img"/>
                            {/*{result.Poster}*/}
                            <br/>
                            <div className="row">
                                <span className="col-3">Stock</span>
                                <span className="col-3">
                                    <i className="far fa-plus-square"></i>   <i className="far fa-minus-square"></i></span>
                                <input style={{width:"50px"}} className="col-6 inputAmount" placeholder="10"/>
                            </div>
                        </div>)
                }
            </div>


        </>
    )
}

export default SellerList;

