import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addCart} from "../../Component/CartClient";

const EditProduct = () => {
    const params = useParams();
    const[product, setProduct] = useState([]);
    const getProduct = () => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then(res => res.json())
            .then(product => setProduct(product))
    }

    const dispatch = useDispatch();
    useEffect(getProduct,[])
    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-4">
                    <img src={product.image} alt={product.title} height="200px" width="200px"/>
                    <div className="input-group-prepend mb-2 mt-2">
                        <span className="input-group-text">Change Product Image</span>
                    </div>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="inputGroupFile01"/>
                        {/*<label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>*/}
                    </div>
                </div>
                <div className="col-md-8">
                    <h4 className="text-uppercase text-black-50">{product.category}</h4>
                    <h1 className="display-5">{product.title}</h1>
                    <p className="lead fw-bolder">
                        Rating {product.rating && product.rating.rate}
                        <i className="fa fa-star"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4">
                        ${product.price}
                    </h3>
                    <p className="lead">{product.description}</p>
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6 mb-2">
                                <label htmlFor="inputEmail4">Edit Product Name</label>
                                <input type="email" className="form-control" id="nameChange" placeholder={product.title}/>
                            </div>
                            <div className="form-group col-md-6 mb-2">
                                <label htmlFor="inputPassword4">Edit Product Category</label>
                                <input type="password" className="form-control" id="catChange"
                                       placeholder={product.category}/>
                            </div>
                        </div>
                        <div className="form-group col-md-6 mb-2">
                            <label htmlFor="inputAddress">Edit Product Price</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">$</span>
                                </div>
                                <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" placeholder={product.price}/>
                            </div>
                        </div>
                        <div className="form-group col-md-6 mb-2">
                            <label htmlFor="editDescription">Edit Product Description</label>
                            <textarea style={{width:"100%"}}>{product.description}</textarea>
                        </div>
                        <div className="form-group col-md-6 mb-2">
                            <Link to="/seller" className="btn btn-outline-dark">
                                Save
                            </Link>
                        </div>

                    </form>
                </div>
            </>
        )
    }
    return(
        <div>
            <div className="container py-4">
                <div className="row py-5">
                    <ShowProduct/>
                </div>
            </div>
        </div>
    )
}

export default EditProduct;