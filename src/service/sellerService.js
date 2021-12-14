import { useState } from 'react'

let SELLER_API = 'http://localhost:4000/api/profile';


// export const getAllSeller = (dispatch) =>
//     fetch(SELLER_API)
//         .then(response => response.json())
//         .then(seller =>
//             dispatch({
//                 type:'fetch-sellers',
//                 seller
//             })
//         );

// const ProfileX = () => {
//     const [user, setUser] = useState({});
//     const navigate = useNavigate();
//     const getProfile = (user, dispatch) => {
//         fetch(SELLER_API, {
//             method: 'POST',
//             credentials: 'include'
//         }).then(res => res.json())
//             .then(user => {
//                 setUser(user);
//             }).catch(e => navigate('/login'));
//     }




export const createNewProduct = (newProduct, dispatch) => {

    console.log("This is the newProduct in sellerService.js:", newProduct);
    fetch(SELLER_API, {
        method: 'PUT',
        body: JSON.stringify(newProduct),
        credentials: 'include',
        headers: {
            'content-type':'application/json'
        }
    })
        .then(response => {
            console.log("This is response in sellerService.js:", response);
            return response.json();
        }).then(res=>{
            dispatch({
                type: 'create-new-product',
                user: newProduct
            })
    })
}

// export const deleteProduct = (dispatch, afterDeleted) => {
//     console.log("This is the id of deleted items in sellerService.js:", afterDeleted);
//     fetch(SELLER_API, {
//         method: 'PUT',
//         body: JSON.stringify(afterDeleted),
//         headers: {
//             'content-type':'application/json'
//         }
//     })
//         .then()
// }