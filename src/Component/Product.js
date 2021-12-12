import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {addCart} from "./CartClient";
import {Link, useParams} from 'react-router-dom';

const Product = () => {
    const params = useParams();
    const[product, setProduct] = useState([]);
    const getProduct = () => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then(res => res.json())
            .then(product => setProduct(product))
    }

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }
    useEffect(getProduct,[])
    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} height="400px" width="400px"/>
                </div>
                <div className="col-md-6">
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
                    <button className="btn btn-outline-dark" onClick={()=>addProduct(product)}>
                        Add to Cart
                    </button>
                    <Link to="/cart">
                        <button className="btn btn-dark">
                            Go to Cart
                        </button>
                    </Link>
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

export default Product;