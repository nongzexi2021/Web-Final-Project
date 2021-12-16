import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCart, addToDB } from './CartClient'
import { Link, useNavigate, useParams } from 'react-router-dom'
const Product = () => {

    const [user, setUser] = useState({})
    const cart = useSelector((state) => state.cart)
    const navigate = useNavigate()
    const getUser = () => {
        fetch(`http://localhost:4000/api/profile`, {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.json())
            .then(user => {
                setUser(user)
                dispatch({
                    type: 'put-to-order',
                    user: user
                })
            }).catch(e => {
            console.log('未登录 add to cart', user, !!user)
            // navigate('/login')
        })
    }
    useEffect(getUser, [])

    const params = useParams()
    const [product, setProduct] = useState([])
    const getProduct = () => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then(res => res.json())
            .then(product => setProduct(product))
    }
    useEffect(getProduct, [])

    console.log("===========", user);

    const dispatch = useDispatch()

    const addProductClickHandler = (product, user) => {
        console.log("This is userrrrrrr in addProductClickHandler", user);
        if (user._id) {
            let temp = []
            let has = false
            cart.forEach((x) => {
                if (x.id === product.id) {
                    temp.push({
                        ...x,
                        qty: (x.qty || 0) + 1
                    })
                    has = true
                    return
                }
                temp.push(x)
            });
            if (!has) {
                temp.push({ ...product, qty: 1})
            }

            dispatch(addCart(temp))
            addDataToDb({...user, asBuyer: temp})
        }
        else {
            console.log("Undefined user");
            navigate('/login')
        }
    }

    const addDataToDb = (user) => {
        addToDB(user, dispatch);
    }

    const goToCartClickHandler = () => {
        if (user._id) {
            navigate('/cart')
        }
        else {
            navigate('/login')
        }
    }


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


                    // guest cannot add to cart nor go to cart
                    <button className="btn btn-outline-dark" onClick={() => addProductClickHandler(product, user)}>
                        Add to Cart
                    </button>
                    {/*<Link to="/cart">*/}
                        <button className="btn btn-dark" onClick={() => goToCartClickHandler()}>
                            Go to Cart
                        </button>
                    {/*</Link>*/}
                </div>
            </>
        )
    }
    return (
        <div>
            <div className="container py-4">
                <div className="row py-5">
                    <ShowProduct/>
                </div>
            </div>
        </div>
    )
}

export default Product