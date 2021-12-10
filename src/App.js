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
import Profile from'./Profile/main';
import EditProfile from './EditProfile/index'
import './profile.css'
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import profiles from "./reducer/profile";
const reducer = combineReducers({profile: profiles})
const store = createStore(reducer);
function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
            <Routes>
                {/*<Route path="/" element={<SearchScreen/>}/>*/}
                {/*<Route path="/:searchTerm" element={<SearchScreen/>}/>*/}
                {/*<Route path="/details/:id" element={<DetailsScreen/>}/>*/}
                <Route path = "/" element={<HomeScreen/>}/>
                <Route path = "/ebay/cart" element={<CartScreen/>}/>
                <Route path="/profile" element={<Profile />} />
                <Route path="/editProfile" element={<EditProfile />} />
            </Routes>
            </Provider>

</BrowserRouter>





);
}

export default App;
