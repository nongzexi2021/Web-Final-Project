import React from'react';
import SignBar from "../SignBar/SignBar";
import SearchBar from "../Component/SearchBar";
import NavigationBarIndex from "../Component/NavigationBarIndex";
import Cart from "./Cart";

const CartScreen = () => {

    return(
        <>
            <SignBar/>
            <SearchBar/>
            <NavigationBarIndex/>
            <Cart/>
        </>
    );

}

export default CartScreen;