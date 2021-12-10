import logo from './logo.svg';
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
// import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import SearchScreen from "./SearchScreen/SearchScreen";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DetailsScreen from "./Detail/DetailsScreen";
import SignBar from "./SignBar/SignBar";
import HomeScreen from "./Home/HomeScreen";
import CartScreen from "./Cart/CartScreen";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/*<Route path="/" element={<SearchScreen/>}/>*/}
                {/*<Route path="/:searchTerm" element={<SearchScreen/>}/>*/}
                {/*<Route path="/details/:id" element={<DetailsScreen/>}/>*/}
                <Route path = "/" element={<HomeScreen/>}/>
                <Route path = "/ebay/cart" element={<CartScreen/>}/>

            </Routes>

</BrowserRouter>





);
}

export default App;
