import EmployeeListItem from "./EmployeeListItem"

function EmployeeList() {
    return (
        <div>
            <h2>Employee List</h2>
            <EmployeeListItem employeeName= "James King"/>
            <EmployeeListItem employeeName= "Julie Taylor"/>
            <EmployeeListItem employeeName= "Eugene Lee"/>
            <EmployeeListItem employeeName= "Ray Moore"/>
            <EmployeeListItem employeeName= "Paul Jones"/>
                      
        </div>
    )
}

export default EmployeeList