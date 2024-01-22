import SearchBar from "./SearchBar"
import Header from "./Header"
import EmployeeList from "./EmployeeList"

function HomePage() {
    return(
        <div>
            <h2>Home Page</h2>
            <Header></Header>
            <SearchBar></SearchBar>
            <EmployeeList></EmployeeList>
        </div>
    )
}

export default HomePage