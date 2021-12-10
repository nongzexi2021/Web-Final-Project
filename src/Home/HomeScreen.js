import SignBar from "../SignBar/SignBar";
import SearchBar from "../component/SearchBar";
import NavigationBarIndex from "../component/NavigationBarIndex";

const HomeScreen = () => {
    return(
    <>
        <div className="container">
            <SignBar/>
            <SearchBar/>
            <NavigationBarIndex/>
        </div>
    </>
)

}
export default HomeScreen;