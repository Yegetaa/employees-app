import './App.css';
import HomePage from './components/HomePage';
import EmployeePage from './components/EmployeePage';

function App() {
  return (
    <div className="App" style={{display: "flex"}}>
      {/* <h1>Employees App</h1> */}
      <HomePage></HomePage>
      <EmployeePage></EmployeePage>
    </div>
  );
}

export default App;

