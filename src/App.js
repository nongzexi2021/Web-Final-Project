import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomeScreen from "./Home/HomeScreen";
import SellerScreen from "./SellerScreen";
import Profile from './Profile/main';
import EditProfile from './EditProfile/index';
// import Product from "./Component/Product";
import DetailProduct from "./Detail/DetailProduct";
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import cart from './reducer/cart';
import addItems from "./reducer/addItems";
import profile from './reducer/profile';
import './profile.css'


const reducers = combineReducers({cart, addItems, profile});
const store = createStore(reducers);


function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    {/*<Route path="/" element={<SearchScreen/>}/>*/}
                    {/*<Route path="/:searchTerm" element={<SearchScreen/>}/>*/}
                    {/*<Route path="/details/:id" element={<DetailsScreen/>}/>*/}
                    <Route path = "/" element={<HomeScreen/>}/>
                    <Route path = "/seller" element={<SellerScreen/>}/>
                    <Route path = "/products/:id" element={<DetailProduct/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/editProfile" element={<EditProfile/>}/>
                </Routes>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
