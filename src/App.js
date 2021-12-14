import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomeScreen from "./AllScreen/HomeScreen";
import SellerScreen from "./SellerScreen";
import Profile from './Profile/main';
import EditProfile from './EditProfile/index';
import DetailProduct from "./Detail/DetailProduct";
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import cart from './reducer/cart';
import addItems from "./reducer/addItems";
import profile from './reducer/profile';
import './profile.css'
import ProductsScreen from "./AllScreen/ProductsScreen";
import CartScreen from "./AllScreen/CartScreen";
import PublicProfile from "./PublicProfile/index";
import LoginScreen from './LogIn/LoginScreen'
import Register from './LogIn/Register'

const reducers = combineReducers({cart, addItems, profile});
const store = createStore(reducers);


function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path = "/" element={<HomeScreen/>}/>
                    <Route path = "/seller" element={<SellerScreen/>}/>
                    <Route path = "/products/:id" element={<DetailProduct/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/editProfile" element={<EditProfile/>}/>
                    <Route path="/cart" element={<CartScreen/>}/>
                    <Route path="/products" element={<ProductsScreen/>}/>
                    <Route path = "/profile/:id" element = {<PublicProfile/>}/>
                    <Route path = "/login" element = {<LoginScreen/>}/>
                    <Route path = "/register" element = {<Register/>}/>

                </Routes>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
