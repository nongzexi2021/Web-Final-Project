import SignBar from "../SignBar/SignBar";
import SearchBar from "../Component/SearchBar";
import NavigationBarIndex from "../Component/NavigationBarIndex";
// import NavBar from "../Component/NavBar";
import "../Component/navigation.css"
import DisplayTemplate from '../Component/DisplayTemplate';
import Home from "../Component/Home";

const HomeScreen = () => {
    return(
    <>
        <div className="container">
            <SignBar/>
            <SearchBar/>
            <NavigationBarIndex/>
            {/*<NavBar/>*/}
            <Home/>
            <DisplayTemplate/>

        </div>
    </>
)

}
export default HomeScreen;