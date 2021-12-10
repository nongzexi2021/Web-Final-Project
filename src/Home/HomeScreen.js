import SignBar from "../SignBar/SignBar";
import SearchBar from "../Component/SearchBar";
import NavigationBarIndex from "../Component/NavigationBarIndex";

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