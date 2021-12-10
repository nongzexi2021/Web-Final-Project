import SignBar from "../SignBar/SignBar";
import SearchBar from "../Component/SearchBar";
import NavigationBarIndex from "../Component/NavigationBarIndex";
import "../Component/navigation.css"
import DisplayTemplate from '../Component/DisplayTemplate'

const HomeScreen = () => {
    return(
    <>
        <div className="container">
            <SignBar/>
            <SearchBar/>
            <NavigationBarIndex/>
            <DisplayTemplate/>
        </div>
    </>
)

}
export default HomeScreen;